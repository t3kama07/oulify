import LocalizedHomePage, {
  generateMetadata as generateLocalizedHomeMetadata,
} from "@/app/(localized)/[locale]/page";
import { defaultLocale } from "@/lib/i18n";

export function generateMetadata() {
  return generateLocalizedHomeMetadata({
    params: Promise.resolve({ locale: defaultLocale }),
  });
}

export default function Home() {
  return <LocalizedHomePage params={Promise.resolve({ locale: defaultLocale })} />;
}
