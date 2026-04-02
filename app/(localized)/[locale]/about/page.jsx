import AboutSection from "@/app/components/AboutSection";
import ContactSection from "@/app/components/ContactSection";
import Navbar from "@/app/components/Navbar";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { siteShareImage, siteTwitterCard } from "@/lib/metadata";
import { getLogoSrc } from "@/lib/logo";
import { getSiteUrl, toAbsoluteUrl } from "@/lib/site";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale);

  return {
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: "/en/about",
        fi: "/fi/about",
        "x-default": "/en/about",
      },
    },
    openGraph: {
      url: `/${locale}/about`,
      title: dict.meta.aboutTitle,
      description: dict.meta.aboutDescription,
      images: [siteShareImage],
    },
    twitter: {
      card: siteTwitterCard,
      title: dict.meta.aboutTitle,
      description: dict.meta.aboutDescription,
      images: [siteShareImage.url],
    },
  };
}

export default async function LocalizedAboutPage({ params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const siteUrl = getSiteUrl();
  const brandLogoSrc = getLogoSrc("/assets/logo.png");
  const sameAs = [dict.footer.facebookUrl, dict.footer.linkedinUrl].filter(Boolean);
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oulify",
    url: siteUrl,
    email: "hello@oulify.com",
    description: dict.meta.aboutDescription,
    logo: toAbsoluteUrl(brandLogoSrc),
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@oulify.com",
      contactType: "sales",
      availableLanguage: ["en", "fi"],
    },
    sameAs: sameAs.length ? sameAs : undefined,
  };

  return (
    <main className="portfolio-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar locale={locale} nav={dict.nav} currentPath="/about" brandLogoSrc={brandLogoSrc} />
      <AboutSection about={dict.aboutPage} />
      <ContactSection locale={locale} contactSection={dict.contactSection} footer={dict.footer} />
    </main>
  );
}
