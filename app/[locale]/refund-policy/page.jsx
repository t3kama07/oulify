import Footer from "../../components/Footer";
import LegalPageSection from "../../components/LegalPageSection";
import Navbar from "../../components/Navbar";
import { buildLegalMetadata, getLegalPage } from "@/lib/legal-pages";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { getLogoSrc } from "@/lib/logo";
import { notFound } from "next/navigation";

const PAGE_KEY = "refundPolicy";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const dict = getDictionary(locale);

  return buildLegalMetadata({ locale, dict, pageKey: PAGE_KEY });
}

export default async function LocalizedRefundPolicyPage({ params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const legalPage = getLegalPage(locale, PAGE_KEY);
  const brandLogoSrc = getLogoSrc("/assets/logo.png");

  return (
    <main className="portfolio-page" id="top">
      <Navbar
        locale={locale}
        nav={dict.nav}
        currentPath={`/${legalPage.slug}`}
        brandLogoSrc={brandLogoSrc}
      />
      <LegalPageSection page={legalPage} />
      <footer className="contact-footer">
        <div className="footer-shell">
          <Footer locale={locale} footer={dict.footer} />
        </div>
      </footer>
    </main>
  );
}
