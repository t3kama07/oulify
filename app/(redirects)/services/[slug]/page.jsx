import { defaultLocale } from "@/lib/i18n";
import { getServices } from "@/lib/services";
import { permanentRedirect } from "next/navigation";

export function generateStaticParams() {
  return getServices(defaultLocale).map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceRedirectPage({ params }) {
  const { slug } = await params;

  permanentRedirect(`/${defaultLocale}/services/${slug}`);
}
