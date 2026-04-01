import ContactSection from "@/app/components/ContactSection";
import Navbar from "@/app/components/Navbar";
import ServicesSection from "@/app/components/ServicesSection";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { getLogoSrc } from "@/lib/logo";
import { buildServicesMetadata, getServices, getServicesDirectoryContent } from "@/lib/services";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale);

  return buildServicesMetadata({ locale, dict });
}

export default async function LocalizedServicesPage({ params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const brandLogoSrc = getLogoSrc("/assets/logo.png");
  const services = getServices(locale);
  const directory = getServicesDirectoryContent(locale);

  return (
    <main className="portfolio-page" id="top">
      <Navbar locale={locale} nav={dict.nav} currentPath="/services" brandLogoSrc={brandLogoSrc} />
      <ServicesSection
        groups={services}
        title={directory.title}
        intro={directory.intro}
        ariaLabel={dict.services.aria}
        locale={locale}
        linkCards
      />
      <ContactSection locale={locale} contactSection={dict.contactSection} footer={dict.footer} />
    </main>
  );
}
