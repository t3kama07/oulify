import { defaultLocale, getDictionary, getLocalizedPath, locales } from "@/lib/i18n";
import { siteShareImage, siteTwitterCard } from "@/lib/metadata";
import { toAbsoluteUrl } from "@/lib/site";

const servicePageLabels = {
  en: {
    directoryTitleFallback: "Services",
    directoryIntroFallback:
      "Explore Oulify's core digital services and the kinds of solutions we build for business growth.",
    overviewHeading: "Overview",
    includesHeading: "What this service can include",
    relatedHeading: "Related services",
    relatedIntro: "You can also explore these related services.",
    contactHeading: "Start with this service",
    contactDescription:
      "Tell us what you want to build and we will help shape the right service scope for your goals.",
    contactLabel: "Discuss this service",
    backToServicesLabel: "View all services",
    generatedOverviewPrefix: "This service can include",
  },
  fi: {
    directoryTitleFallback: "Palvelut",
    directoryIntroFallback:
      "Tutustu Oulifyn ydinpalveluihin ja siihen, millaisia digitaalisia ratkaisuja rakennamme liiketoiminnan kasvun tueksi.",
    overviewHeading: "Yleiskuva",
    includesHeading: "Mitä palvelu voi sisältää",
    relatedHeading: "Muut palvelut",
    relatedIntro: "Voit tutustua myös näihin palveluihin.",
    contactHeading: "Aloita tämän palvelun suunnittelu",
    contactDescription:
      "Kerro, mitä haluat rakentaa, niin autamme määrittelemään tavoitteisiisi sopivan palvelukokonaisuuden.",
    contactLabel: "Keskustele palvelusta",
    backToServicesLabel: "Katso kaikki palvelut",
    generatedOverviewPrefix: "Palvelu voi sisältää esimerkiksi",
  },
};

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function buildGeneratedOverview(service, locale) {
  const labels = servicePageLabels[locale] || servicePageLabels.en;
  const previewItems = Array.isArray(service.items) ? service.items.slice(0, 3) : [];

  if (!previewItems.length) {
    return [];
  }

  return [`${labels.generatedOverviewPrefix} ${previewItems.join(", ")}.`];
}

function normalizeService(service, locale) {
  const id = service.id || slugify(service.title);
  const slug = service.slug || id;
  const overview = Array.isArray(service.overview)
    ? service.overview.filter(Boolean)
    : [service.overview, service.description, ...buildGeneratedOverview(service, locale)].filter(Boolean);

  return {
    ...service,
    id,
    slug,
    overview,
    pageTitle:
      service.pageTitle || (locale === "fi" ? `${service.title} | Oulify` : `${service.title} Services | Oulify`),
    pageDescription: service.pageDescription || service.description,
  };
}

export function getServices(locale) {
  const dict = getDictionary(locale);

  return (dict.services?.groups || []).map((service) => normalizeService(service, locale));
}

export function getServiceBySlug(locale, slug) {
  return getServices(locale).find((service) => service.slug === slug) || null;
}

export function getServiceById(locale, id) {
  return getServices(locale).find((service) => service.id === id) || null;
}

export function getServicePath(locale, serviceOrSlug) {
  const slug = typeof serviceOrSlug === "string" ? serviceOrSlug : serviceOrSlug.slug;
  return getLocalizedPath(locale, `/services/${slug}`);
}

export function getServicesHubPath(locale) {
  return getLocalizedPath(locale, "/services");
}

export function getServicePageLabels(locale) {
  return servicePageLabels[locale] || servicePageLabels.en;
}

export function getServicesDirectoryContent(locale) {
  const dict = getDictionary(locale);
  const labels = getServicePageLabels(locale);

  return {
    title: dict.services?.pageTitle || labels.directoryTitleFallback,
    intro: dict.services?.pageIntro || labels.directoryIntroFallback,
  };
}

export function getAllServiceParams() {
  return locales.flatMap((locale) =>
    getServices(locale).map((service) => ({
      locale,
      slug: service.slug,
    })),
  );
}

export function buildServicesMetadata({ locale, dict }) {
  const title = dict.meta.servicesTitle || `${dict.services.title} | Oulify`;
  const description = dict.meta.servicesDescription || dict.services.pageIntro || dict.services.title;

  return {
    title,
    description,
    alternates: {
      canonical: getServicesHubPath(locale),
      languages: {
        en: getServicesHubPath("en"),
        fi: getServicesHubPath("fi"),
        "x-default": getServicesHubPath(defaultLocale),
      },
    },
    openGraph: {
      url: getServicesHubPath(locale),
      title,
      description,
      images: [siteShareImage],
    },
    twitter: {
      card: siteTwitterCard,
      title,
      description,
      images: [siteShareImage.url],
    },
  };
}

export function buildServiceMetadata({ locale, service, dict }) {
  const englishService = getServiceById("en", service.id) || service;
  const finnishService = getServiceById("fi", service.id) || service;

  return {
    title: service.pageTitle,
    description: service.pageDescription,
    alternates: {
      canonical: getServicePath(locale, service),
      languages: {
        en: getServicePath("en", englishService),
        fi: getServicePath("fi", finnishService),
        "x-default": getServicePath(defaultLocale, defaultLocale === "fi" ? finnishService : englishService),
      },
    },
    openGraph: {
      url: getServicePath(locale, service),
      title: service.pageTitle,
      description: service.pageDescription,
      images: [siteShareImage],
    },
    twitter: {
      card: siteTwitterCard,
      title: service.pageTitle,
      description: service.pageDescription,
      images: [siteShareImage.url],
    },
  };
}

export function getServiceSitemapEntries(lastModified = new Date()) {
  return locales.flatMap((locale) =>
    getServices(locale).map((service) => ({
      url: toAbsoluteUrl(getServicePath(locale, service)),
      lastModified,
      changeFrequency: "monthly",
      priority: locale === defaultLocale ? 0.75 : 0.65,
    })),
  );
}
