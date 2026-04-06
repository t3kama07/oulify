import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "../styles.css";
import WhatsAppButton from "../components/WhatsAppButton";
import { siteIcons, siteMetadataBase, siteVerification } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <WhatsAppButton locale="en" />
      </body>
    </html>
  );
}
