import LocalizedTermsAndConditionsPage, {
  generateMetadata as generateLocalizedTermsMetadata,
} from "@/app/(localized)/[locale]/terms-and-conditions/page";
import { defaultLocale } from "@/lib/i18n";

export function generateMetadata() {
  return generateLocalizedTermsMetadata({
    params: Promise.resolve({ locale: defaultLocale }),
  });
}

export default function TermsAndConditionsPage() {
  return <LocalizedTermsAndConditionsPage params={Promise.resolve({ locale: defaultLocale })} />;
}
