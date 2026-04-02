import { getSiteUrl } from "@/lib/site";

export const siteIcons = {
  icon: [{ url: "/assets/favicon.png", type: "image/png", sizes: "515x484" }],
  shortcut: ["/assets/favicon.png"],
  apple: [{ url: "/assets/favicon.png", type: "image/png", sizes: "515x484" }],
};

export const siteMetadataBase = new URL(getSiteUrl());
