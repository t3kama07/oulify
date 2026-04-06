import { defaultLocale } from "@/lib/i18n";
import { getServices } from "@/lib/services";
import LocalizedServiceDetailPage, {
  generateMetadata as generateLocalizedServiceMetadata,
} from "@/app/(localized)/[locale]/services/[slug]/page";

export function generateStaticParams() {
  return getServices(defaultLocale).map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return generateLocalizedServiceMetadata({
    params: Promise.resolve({
      locale: defaultLocale,
      slug,
    }),
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  return (
    <LocalizedServiceDetailPage
      params={Promise.resolve({
        locale: defaultLocale,
        slug,
      })}
    />
  );
}
