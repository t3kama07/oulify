import LocalizedAboutPage, {
  generateMetadata as generateLocalizedAboutMetadata,
} from "@/app/(localized)/[locale]/about/page";
import { defaultLocale } from "@/lib/i18n";

export function generateMetadata() {
  return generateLocalizedAboutMetadata({
    params: Promise.resolve({ locale: defaultLocale }),
  });
}

export default function AboutPage() {
  return <LocalizedAboutPage params={Promise.resolve({ locale: defaultLocale })} />;
}
