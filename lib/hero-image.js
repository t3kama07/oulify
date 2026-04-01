import { statSync } from "node:fs";
import path from "node:path";

const HERO_IMAGE_PATH = "/assets/heroimage.png";
const HERO_IMAGE_FILE = path.join(process.cwd(), "public", "assets", "heroimage.png");

function getHeroImageVersion() {
  try {
    return Math.floor(statSync(HERO_IMAGE_FILE).mtimeMs).toString();
  } catch {
    return "";
  }
}

export function getHeroImageSrc(src = HERO_IMAGE_PATH) {
  const [pathname, search = ""] = src.split("?");

  if (pathname !== HERO_IMAGE_PATH) {
    return src;
  }

  const version = getHeroImageVersion();

  if (!version) {
    return src;
  }

  const params = new URLSearchParams(search);
  params.set("v", version);

  return `${pathname}?${params.toString()}`;
}
