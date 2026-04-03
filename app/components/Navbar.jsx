"use client";

import Image from "next/image";
import { useState } from "react";
import { LOGO_HEIGHT, LOGO_WIDTH } from "@/lib/logo-dimensions";

export default function Navbar({ locale, nav, currentPath = "/", brandLogoSrc = "/assets/logo.png" }) {
  const [open, setOpen] = useState(false);
  const labels =
    locale === "fi"
      ? {
          home: "Oulifyn etusivu",
          primary: "Päänavigaatio",
          openMenu: "Avaa valikko",
          closeMenu: "Sulje valikko",
          mobileMenu: "Navigointivalikko",
          mobilePrimary: "Mobiilin päänavigaatio",
        }
      : {
          home: "Oulify home",
          primary: "Primary",
          openMenu: "Open menu",
          closeMenu: "Close menu",
          mobileMenu: "Navigation menu",
          mobilePrimary: "Mobile primary",
        };
  const enPath = `/en${currentPath === "/" ? "" : currentPath}`;
  const fiPath = `/fi${currentPath === "/" ? "" : currentPath}`;
  const isAboutPage = currentPath === "/about";
  const isCareersPage = currentPath === "/careers";
  const isServicesPage = currentPath === "/services" || currentPath.startsWith("/services/");
  const isHomePage = currentPath === "/";
  const homeHref = `/${locale}/#top`;
  const servicesHref = `/${locale}/#services`;
  const aboutHref = `/${locale}/about`;
  const careersHref = `/${locale}/careers`;
  const projectsHref = `/${locale}/#projects`;
  const contactHref = `/${locale}/#contact`;
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-content">
        <a className="nav-brand" href={`/${locale}`} onClick={close} aria-label={labels.home}>
          <Image
            className="nav-brand-logo"
            src={brandLogoSrc}
            alt="Oulify"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            priority
          />
        </a>
        <nav className="nav-links" aria-label={labels.primary}>
          <a href={homeHref} aria-current={isHomePage ? "page" : undefined}>{nav.home}</a>
          <a href={servicesHref} aria-current={isServicesPage ? "page" : undefined}>{nav.services}</a>
          <a href={aboutHref} aria-current={isAboutPage ? "page" : undefined}>{nav.about}</a>
          <a href={projectsHref}>{nav.projects}</a>
          <a href={careersHref} aria-current={isCareersPage ? "page" : undefined}>{nav.careers}</a>
          <a href={contactHref}>{nav.contact}</a>
        </nav>
        <div className="lang-switch" role="group" aria-label={nav.languageSwitch}>
          <a className={`lang-btn${locale === "en" ? " is-active" : ""}`} href={enPath} aria-current={locale === "en" ? "page" : undefined}>
            EN
          </a>
          <a className={`lang-btn${locale === "fi" ? " is-active" : ""}`} href={fiPath} aria-current={locale === "fi" ? "page" : undefined}>
            FI
          </a>
        </div>
        <a className="btn btn-primary btn-cv" href={contactHref}>
          {nav.requestCv}
        </a>
        <button
          className={`nav-hamburger${open ? " is-open" : ""}`}
          aria-label={open ? labels.closeMenu : labels.openMenu}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="mobile-menu" id="mobile-menu" role="dialog" aria-label={labels.mobileMenu}>
          <nav className="mobile-nav" aria-label={labels.mobilePrimary}>
            <a href={homeHref} onClick={close}>{nav.home}</a>
            <a href={servicesHref} onClick={close}>{nav.services}</a>
            <a href={aboutHref} onClick={close}>{nav.about}</a>
            <a href={projectsHref} onClick={close}>{nav.projects}</a>
            <a href={careersHref} onClick={close}>{nav.careers}</a>
            <a href={contactHref} onClick={close}>{nav.contact}</a>
          </nav>
          <div className="mobile-menu-footer">
            <div className="lang-switch" role="group" aria-label={nav.languageSwitch}>
              <a className={`lang-btn${locale === "en" ? " is-active" : ""}`} href={enPath} onClick={close}>EN</a>
              <a className={`lang-btn${locale === "fi" ? " is-active" : ""}`} href={fiPath} onClick={close}>FI</a>
            </div>
            <a className="btn btn-primary" href={contactHref} onClick={close}>
              {nav.requestCv}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
