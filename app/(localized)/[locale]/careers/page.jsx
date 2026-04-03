import CareersSection from "@/app/components/CareersSection";
import Footer from "@/app/components/Footer";
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
    title: dict.meta.careersTitle,
    description: dict.meta.careersDescription,
    alternates: {
      canonical: `/${locale}/careers`,
      languages: {
        en: "/en/careers",
        fi: "/fi/careers",
        "x-default": "/en/careers",
      },
    },
    openGraph: {
      url: `/${locale}/careers`,
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
