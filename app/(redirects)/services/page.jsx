import LocalizedServicesPage, {
  generateMetadata as generateLocalizedServicesMetadata,
} from "@/app/(localized)/[locale]/services/page";
import { defaultLocale } from "@/lib/i18n";

export function generateMetadata() {
  return generateLocalizedServicesMetadata({
    params: Promise.resolve({ locale: defaultLocale }),
  });
}

export default function ServicesPage() {
  return <LocalizedServicesPage params={Promise.resolve({ locale: defaultLocale })} />;
}
