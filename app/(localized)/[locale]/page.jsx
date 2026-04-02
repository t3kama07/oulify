import ContactSection from "@/app/components/ContactSection";
import FAQSection from "@/app/components/FAQSection";
import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import ProcessSection from "@/app/components/ProcessSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ServicesSection from "@/app/components/ServicesSection";
import TrustSection from "@/app/components/TrustSection";
import WhyChooseSection from "@/app/components/WhyChooseSection";
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
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fi: "/fi",
        "x-default": "/en",
      },
    },
    openGraph: {
      url: `/${locale}`,
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      images: [siteShareImage],
    },
    twitter: {
      card: siteTwitterCard,
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      images: [siteShareImage.url],
    },
  };
}

export default async function LocalizedHomePage({ params }) {
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
    description: dict.meta.homeDescription,
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
      <Navbar locale={locale} nav={dict.nav} currentPath="/" brandLogoSrc={brandLogoSrc} />
      <HeroSection
        locale={locale}
        hero={dict.hero}
        primaryCta={dict.hero.viewWork}
        secondaryCta={dict.hero.contactMe}
      />
      <ServicesSection
        groups={dict.services.groups}
        title={dict.services.title}
        ariaLabel={dict.services.aria}
      />
      <ProcessSection process={dict.process} />
      <WhyChooseSection whyChoose={dict.whyChoose} />

      <ProjectsSection
        projects={dict.projects.items}
        title={dict.projects.title}
        subtitle={dict.projects.subtitle}
        headingLevel="h2"
      />
      <TrustSection trust={dict.trust} />
      <FAQSection faq={dict.faq} />
      <ContactSection locale={locale} contactSection={dict.contactSection} footer={dict.footer} />
    </main>
  );
}
