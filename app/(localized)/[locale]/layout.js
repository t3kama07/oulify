import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../../globals.css";
import "../../styles.css";
import WhatsAppButton from "../../components/WhatsAppButton";
import { isValidLocale, locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <WhatsAppButton locale={locale} />
      </body>
    </html>
  );
}
