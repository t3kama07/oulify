import LocalizedPrivacyPolicyPage, {
  generateMetadata as generateLocalizedPrivacyMetadata,
} from "@/app/(localized)/[locale]/privacy-policy/page";
import { defaultLocale } from "@/lib/i18n";

export function generateMetadata() {
  return generateLocalizedPrivacyMetadata({
    params: Promise.resolve({ locale: defaultLocale }),
  });
}

export default function PrivacyPolicyPage() {
  return <LocalizedPrivacyPolicyPage params={Promise.resolve({ locale: defaultLocale })} />;
}
