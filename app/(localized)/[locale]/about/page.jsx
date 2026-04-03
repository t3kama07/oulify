import AboutSection from "@/app/components/AboutSection";
import ContactSection from "@/app/components/ContactSection";
import Navbar from "@/app/components/Navbar";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { siteShareImage, siteTwitterCard } from "@/lib/metadata";
import { getLogoSrc } from "@/lib/logo";
import { buildProfessionalServiceSchema } from "@/lib/schema";
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
  const brandLogoSrc = getLogoSrc("/assets/logo.png");
  const professionalServiceSchema = buildProfessionalServiceSchema({
    dict,
    description: dict.meta.aboutDescription,
  });

  return (
    <main className="portfolio-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <Navbar locale={locale} nav={dict.nav} currentPath="/about" brandLogoSrc={brandLogoSrc} />
      <AboutSection about={dict.aboutPage} />
      <ContactSection locale={locale} contactSection={dict.contactSection} footer={dict.footer} />
    </main>
  );
}
