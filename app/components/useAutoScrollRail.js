"use client";

import { useEffect, useRef, useState } from "react";

function normalizePosition(position, loopWidth, startOffset) {
  if (loopWidth <= 0) {
    return 0;
  }

  let next = position;

  while (next < startOffset) {
    next += loopWidth;
  }

  while (next >= startOffset + loopWidth) {
    next -= loopWidth;
  }

  return next;
}

function applyTransform(track, position) {
  if (!track) {
    return;
  }

  track.style.transform = `translate3d(${-position}px, 0, 0)`;
}

function getLoopWidth(track, itemCount) {
  if (!track) {
    return 0;
  }

  const items = track.children;

  if (items.length > itemCount) {
    return items[itemCount].offsetLeft;
  }

  return track.scrollWidth / 2;
}

export default function useAutoScrollRail({ itemCount, speed = 0.03, enabled = true }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const positionRef = useRef(0);
  const loopWidthRef = useRef(0);
  const startOffsetRef = useRef(0);
  const initializedRef = useRef(false);
  const dragRef = useRef({
    active: false,
    pointerId: null,
    startX: 0,
    startPosition: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || !enabled || itemCount <= 1) {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;
    let lastTimestamp = 0;

    const syncMeasurements = () => {
      const loopWidth = getLoopWidth(track, itemCount);

      loopWidthRef.current = loopWidth;
      startOffsetRef.current = loopWidth;

      if (loopWidth <= 0) {
        return;
      }

      if (!initializedRef.current) {
        positionRef.current = loopWidth;
        initializedRef.current = true;
      } else {
        positionRef.current = normalizePosition(positionRef.current, loopWidth, loopWidth);
      }

      applyTransform(track, positionRef.current);
    };

    syncMeasurements();

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => {
            syncMeasurements();
          });

    if (resizeObserver) {
      resizeObserver.observe(track);
      Array.from(track.children).forEach((child) => resizeObserver.observe(child));
    }

    const step = (timestamp) => {
      if (!track) {
        return;
      }

      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!mediaQuery.matches && !dragRef.current.active && loopWidthRef.current > 0) {
        positionRef.current = normalizePosition(
          positionRef.current + delta * speed,
          loopWidthRef.current,
          startOffsetRef.current,
        );

        applyTransform(track, positionRef.current);
      }

      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();
    };
  }, [enabled, itemCount, speed]);

  const onPointerDown = (event) => {
    if (!enabled || itemCount <= 1) {
      return;
    }

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const container = containerRef.current;

    if (!container) {
      return;
    }

    dragRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startPosition: positionRef.current,
    };

    setIsDragging(true);
    container.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    const track = trackRef.current;
    const dragState = dragRef.current;

    if (!track || !dragState.active || dragState.pointerId !== event.pointerId) {
      return;
    }

    event.preventDefault();

    positionRef.current = normalizePosition(
      dragState.startPosition - (event.clientX - dragState.startX),
      loopWidthRef.current,
      startOffsetRef.current,
    );

    applyTransform(track, positionRef.current);
  };

  const endDrag = (event) => {
    const container = containerRef.current;
    const dragState = dragRef.current;

    if (!dragState.active || dragState.pointerId !== event.pointerId) {
      return;
    }

    dragRef.current = {
      active: false,
      pointerId: null,
      startX: 0,
      startPosition: 0,
    };

    setIsDragging(false);
    container?.releasePointerCapture?.(event.pointerId);
  };

  return {
    containerRef,
    trackRef,
    isDragging,
    railProps: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
      onDragStart: (event) => event.preventDefault(),
    },
  };
}
