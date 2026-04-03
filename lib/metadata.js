import { getSiteUrl } from "@/lib/site";

export const siteShareImage = {
  url: "/assets/favicon.png",
  width: 515,
  height: 484,
  alt: "Oulify logo",
};

export const siteTwitterCard = "summary";

export const siteIcons = {
  icon: [{ url: "/assets/favicon.png", type: "image/png", sizes: "515x484" }],
  shortcut: ["/assets/favicon.png"],
  apple: [{ url: "/assets/favicon.png", type: "image/png", sizes: "515x484" }],
};

export const siteVerification = {
  google: "gmu3g4XA6lWoSWzPdKIKaxV02TP2yuqOFANUih2TZZI",
};

export const siteMetadataBase = new URL(getSiteUrl());
