import { siteIcons, siteMetadataBase } from "@/lib/metadata";

export const metadata = {
  metadataBase: siteMetadataBase,
  icons: siteIcons,
};

export default function RedirectLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
