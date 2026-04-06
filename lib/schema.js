import { getLogoSrc } from "@/lib/logo";
import { getSiteUrl, toAbsoluteUrl } from "@/lib/site";
import { getLocalizedPath } from "@/lib/i18n";

const BUSINESS_NAME = "Oulify";
const BUSINESS_EMAIL = "hello@oulify.com";
const BUSINESS_LANGUAGES = ["en", "fi"];
const BUSINESS_AREAS = ["Finland", "Europe", "Worldwide"];

function getSameAs(dict) {
  return [dict.footer?.facebookUrl, dict.footer?.linkedinUrl].filter(Boolean);
}

export function getProfessionalServiceId() {
  return `${getSiteUrl()}/#professional-service`;
}

export function buildProfessionalServiceSchema({
  dict,
  description,
  contactType = "sales",
  email = BUSINESS_EMAIL,
}) {
  const brandLogoSrc = getLogoSrc("/assets/logo.png");
  const sameAs = getSameAs(dict);
  const serviceTypes = dict.services?.groups?.map((service) => service.title).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": getProfessionalServiceId(),
    name: BUSINESS_NAME,
    url: getSiteUrl(),
    image: toAbsoluteUrl(brandLogoSrc),
    logo: toAbsoluteUrl(brandLogoSrc),
    description,
    email,
    areaServed: BUSINESS_AREAS,
    availableLanguage: BUSINESS_LANGUAGES,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oulu",
      addressCountry: "FI",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email,
      contactType,
      availableLanguage: BUSINESS_LANGUAGES,
    },
    serviceType: serviceTypes?.length ? serviceTypes : undefined,
    sameAs: sameAs.length ? sameAs : undefined,
  };
}

export function buildFAQPageSchema(faq) {
  if (!faq?.items?.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServiceSchema({ locale, service }) {
  const servicePath = getLocalizedPath(locale, `/services/${service.slug}`);
  const serviceUrl = toAbsoluteUrl(servicePath);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.title,
    url: serviceUrl,
    description: service.pageDescription,
    serviceType: service.title,
    areaServed: BUSINESS_AREAS,
    provider: {
      "@type": "ProfessionalService",
      "@id": getProfessionalServiceId(),
      name: BUSINESS_NAME,
      url: getSiteUrl(),
    },
    brand: {
      "@type": "Brand",
      name: BUSINESS_NAME,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl,
    },
    hasOfferCatalog: service.items?.length
      ? {
          "@type": "OfferCatalog",
          name: `${service.title} deliverables`,
          itemListElement: service.items.map((item) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item,
            },
          })),
        }
      : undefined,
  };
}
