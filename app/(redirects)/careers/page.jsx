import LocalizedCareersPage, {
  generateMetadata as generateLocalizedCareersMetadata,
} from "@/app/(localized)/[locale]/careers/page";
import { defaultLocale } from "@/lib/i18n";

export function generateMetadata() {
  return generateLocalizedCareersMetadata({
    params: Promise.resolve({ locale: defaultLocale }),
  });
}

export default function CareersPage() {
  return <LocalizedCareersPage params={Promise.resolve({ locale: defaultLocale })} />;
}
