import CareersSection from "@/app/components/CareersSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { defaultLocale, getDictionary, getLocalizedPath, isValidLocale } from "@/lib/i18n";
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
  const canonicalPath = getLocalizedPath(locale, "/careers");

  return {
    title: dict.meta.careersTitle,
    description: dict.meta.careersDescription,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: getLocalizedPath("en", "/careers"),
        fi: getLocalizedPath("fi", "/careers"),
        "x-default": getLocalizedPath(defaultLocale, "/careers"),
      },
    },
    openGraph: {
      url: canonicalPath,
      title: dict.meta.careersTitle,
      description: dict.meta.careersDescription,
      images: [siteShareImage],
    },
    twitter: {
      card: siteTwitterCard,
      title: dict.meta.careersTitle,
      description: dict.meta.careersDescription,
      images: [siteShareImage.url],
    },
  };
}

export default async function LocalizedCareersPage({ params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const brandLogoSrc = getLogoSrc("/assets/logo.png");
  const professionalServiceSchema = buildProfessionalServiceSchema({
    dict,
    description: dict.meta.careersDescription,
    contactType: "recruiting",
    email: dict.careersPage.email || "hello@oulify.com",
  });

  return (
    <main className="portfolio-page portfolio-page-short" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <Navbar locale={locale} nav={dict.nav} currentPath="/careers" brandLogoSrc={brandLogoSrc} />
      <CareersSection careers={dict.careersPage} />
      <footer className="contact-footer">
        <div className="footer-shell">
          <Footer locale={locale} footer={dict.footer} />
        </div>
      </footer>
    </main>
  );
}
