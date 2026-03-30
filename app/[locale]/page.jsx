import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProcessSection from "../components/ProcessSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import TrustSection from "../components/TrustSection";
import WhyChooseSection from "../components/WhyChooseSection";
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
      title: dict.meta.homeTitle,
      description: dict.meta.homeDescription,
      images: ["/assets/heroimage.png"],
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oulify",
    url: siteUrl,
    email: "hello@oulify.com",
    description: dict.meta.homeDescription,
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
      <Navbar locale={locale} nav={dict.nav} currentPath="/" />
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
