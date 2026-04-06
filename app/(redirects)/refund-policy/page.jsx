import LocalizedRefundPolicyPage, {
  generateMetadata as generateLocalizedRefundMetadata,
} from "@/app/(localized)/[locale]/refund-policy/page";
import { defaultLocale } from "@/lib/i18n";

export function generateMetadata() {
  return generateLocalizedRefundMetadata({
    params: Promise.resolve({ locale: defaultLocale }),
  });
}

export default function RefundPolicyPage() {
  return <LocalizedRefundPolicyPage params={Promise.resolve({ locale: defaultLocale })} />;
}
