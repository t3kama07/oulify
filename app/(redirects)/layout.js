import { siteIcons, siteMetadataBase, siteVerification } from "@/lib/metadata";

export const metadata = {
  metadataBase: siteMetadataBase,
  icons: siteIcons,
  verification: siteVerification,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RedirectLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
