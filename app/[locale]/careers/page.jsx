import CareersSection from "../../components/CareersSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { getSiteUrl, toAbsoluteUrl } from "@/lib/site";
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
      images: [
        {
          url: "/assets/heroimage.png",
          width: 1024,
          height: 666,
          alt: dict.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.careersTitle,
      description: dict.meta.careersDescription,
      images: ["/assets/heroimage.png"],
    },
  };
}

export default async function LocalizedCareersPage({ params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const siteUrl = getSiteUrl();
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oulify",
    url: siteUrl,
    email: "hello@oulify.com",
    description: dict.meta.careersDescription,
    logo: toAbsoluteUrl("/favicon.ico"),
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@oulify.com",
      contactType: "recruiting",
      availableLanguage: ["en", "fi"],
    },
    sameAs: dict.footer.linkedinUrl ? [dict.footer.linkedinUrl] : undefined,
  };

  return (
    <main className="portfolio-page portfolio-page-short" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar locale={locale} nav={dict.nav} currentPath="/careers" />
      <CareersSection careers={dict.careersPage} />
      <footer className="contact-footer">
        <div className="footer-shell">
          <Footer locale={locale} footer={dict.footer} />
        </div>
      </footer>
    </main>
  );
}
