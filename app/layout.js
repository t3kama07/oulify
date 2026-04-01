import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles.css";
import WhatsAppButton from "./components/WhatsAppButton";
import { getHeroImageSrc } from "@/lib/hero-image";
import { getSiteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const heroImageSrc = getHeroImageSrc("/assets/heroimage.png");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Oulify | High-Converting Websites, Apps & Automation",
    template: "%s",
  },
  description:
    "Oulify builds high-converting websites, apps, automation, and digital growth systems for businesses in Oulu, Finland and beyond.",
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    type: "website",
    url: "/en",
    title: "Oulify | High-Converting Websites, Apps & Automation",
    description:
      "Oulify builds high-converting websites, apps, automation, and digital growth systems for businesses in Oulu, Finland and beyond.",
    images: [
      {
        url: heroImageSrc,
        width: 1024,
        height: 666,
        alt: "Oulify digital products across devices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oulify | High-Converting Websites, Apps & Automation",
    description:
      "Oulify builds high-converting websites, apps, automation, and digital growth systems for businesses in Oulu, Finland and beyond.",
    images: [heroImageSrc],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale === "fi" ? "fi" : "en";

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <WhatsAppButton locale={locale} />
      </body>
    </html>
  );
}
