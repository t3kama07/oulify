import ContactSection from "@/app/components/ContactSection";
import Navbar from "@/app/components/Navbar";
import ServicePageSection from "@/app/components/ServicePageSection";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { getLogoSrc } from "@/lib/logo";
import { buildServiceSchema } from "@/lib/schema";
import {
  buildServiceMetadata,
  getAllServiceParams,
  getServiceBySlug,
  getServicePageLabels,
  getServices,
} from "@/lib/services";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllServiceParams();
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale);
  const service = getServiceBySlug(locale, slug);

  if (!service) {
    return {};
  }

  return buildServiceMetadata({ locale, service, dict });
}

export default async function LocalizedServiceDetailPage({ params }) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const brandLogoSrc = getLogoSrc("/assets/logo.png");
  const service = getServiceBySlug(locale, slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getServices(locale).filter((item) => item.id !== service.id);
  const labels = getServicePageLabels(locale);
  const serviceSchema = buildServiceSchema({ locale, service });

  return (
    <main className="portfolio-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar
        locale={locale}
        nav={dict.nav}
        currentPath={`/services/${service.slug}`}
        brandLogoSrc={brandLogoSrc}
      />
      <ServicePageSection
        locale={locale}
        service={service}
        labels={labels}
        relatedServices={relatedServices}
      />
      <ContactSection locale={locale} contactSection={dict.contactSection} footer={dict.footer} />
    </main>
  );
}
