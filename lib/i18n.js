import en from "@/messages/en.json";
import fi from "@/messages/fi.json";

export const locales = ["en", "fi"];
export const defaultLocale = "en";

const dictionaries = {
  en,
  fi,
};

export function isValidLocale(locale) {
  return locales.includes(locale);
}

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

function normalizePath(path = "/") {
  if (!path) {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

export function getLocalizedPath(locale, path = "/") {
  const normalizedPath = normalizePath(path);

  if (!locale || locale === defaultLocale) {
    return normalizedPath;
  }

  return normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;
}
