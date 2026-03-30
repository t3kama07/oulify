import AboutSection from "../../components/AboutSection";
import ContactSection from "../../components/ContactSection";
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
      title: dict.meta.aboutTitle,
      description: dict.meta.aboutDescription,
      images: ["/assets/heroimage.png"],
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oulify",
    url: siteUrl,
    email: "hello@oulify.com",
    description: dict.meta.aboutDescription,
    logo: toAbsoluteUrl("/favicon.ico"),
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@oulify.com",
      contactType: "sales",
      availableLanguage: ["en", "fi"],
    },
    sameAs: dict.footer.linkedinUrl ? [dict.footer.linkedinUrl] : undefined,
  };

  return (
    <main className="portfolio-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar locale={locale} nav={dict.nav} currentPath="/about" />
      <AboutSection about={dict.aboutPage} />
      <ContactSection locale={locale} contactSection={dict.contactSection} footer={dict.footer} />
    </main>
  );
}
