import { statSync } from "node:fs";
import path from "node:path";

const LOGO_PATH = "/assets/logo.png";
const LOGO_FILE = path.join(process.cwd(), "public", "assets", "logo.png");

function getLogoVersion() {
  try {
    return Math.floor(statSync(LOGO_FILE).mtimeMs).toString();
  } catch {
    return "";
  }
}

export function getLogoSrc(src = LOGO_PATH) {
  const [pathname, search = ""] = src.split("?");

  if (pathname !== LOGO_PATH) {
    return src;
  }

  const version = getLogoVersion();

  if (!version) {
    return src;
  }

  const params = new URLSearchParams(search);
  params.set("v", version);

  return `${pathname}?${params.toString()}`;
}
