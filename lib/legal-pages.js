import { getHeroImageSrc } from "@/lib/hero-image";

const legalPages = {
  en: {
    privacyPolicy: {
      slug: "privacy-policy",
      metaTitle: "Privacy Policy | Oulify",
      metaDescription:
        "Read how Oulify collects, uses, stores, and protects personal information shared through this website and project inquiries.",
      title: "Privacy Policy",
      intro:
        "This Privacy Policy explains how Oulify collects, uses, stores, and protects information shared through this website and during project discussions.",
      effectiveDateLabel: "Effective date",
      effectiveDate: "April 1, 2026",
      sections: [
        {
          title: "Information We Collect",
          paragraphs: [
            "We collect information that you choose to share with us when you contact Oulify about a website, app, automation, marketing, or video project.",
          ],
          items: [
            "Contact details such as your name, email address, and business name.",
            "Project information such as your goals, timeline, budget notes, and message content.",
            "Communication records when you contact us by email, WhatsApp, or other agreed channels.",
            "Basic technical usage data that our hosting platform or website performance tools may collect, such as browser type, device type, and page activity.",
          ],
        },
        {
          title: "How We Use Your Information",
          paragraphs: [
            "We use the information we collect to run the website responsibly and to provide our services.",
          ],
          items: [
            "Respond to inquiries and prepare proposals or project recommendations.",
            "Manage client communication, project delivery, invoices, and support.",
            "Improve our website, services, and service quality.",
            "Protect the website, prevent misuse, and meet legal or contractual obligations.",
          ],
        },
        {
          title: "How Information Is Shared",
          paragraphs: [
            "We do not sell personal information. We only share information when it is necessary to operate the business or deliver services.",
          ],
          items: [
            "With trusted service providers such as hosting, email, file storage, communication, or payment tools.",
            "With legal or regulatory authorities when required by law.",
            "With project partners or contractors only when they need specific information to help deliver agreed work.",
          ],
        },
        {
          title: "Data Retention and Security",
          paragraphs: [
            "We keep personal information only for as long as it is reasonably needed for communication, project delivery, record keeping, or legal compliance.",
            "We use reasonable technical and organizational measures to protect personal information, but no website or online storage method can guarantee absolute security.",
          ],
        },
        {
          title: "Your Rights",
          paragraphs: [
            "Depending on your location, you may have the right to request access to, correction of, or deletion of your personal information.",
          ],
          items: [
            "Request a copy of the information we hold about you.",
            "Ask us to correct inaccurate or outdated information.",
            "Ask us to delete information that we no longer need to keep.",
            "Withdraw consent for optional communication where consent is the basis for processing.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "If you have privacy-related questions or want to make a request about your information, contact us at hello@oulify.com.",
          ],
        },
      ],
    },
    termsAndConditions: {
      slug: "terms-and-conditions",
      metaTitle: "Terms and Conditions | Oulify",
      metaDescription:
        "Review the main terms that apply when you use the Oulify website or engage Oulify for websites, apps, automation, and related digital services.",
      title: "Terms and Conditions",
      intro:
        "These Terms and Conditions describe the general rules for using the Oulify website and working with Oulify on digital service projects.",
      effectiveDateLabel: "Effective date",
      effectiveDate: "April 1, 2026",
      sections: [
        {
          title: "Website Use",
          paragraphs: [
            "By using this website, you agree to use it lawfully and respectfully. You may not use the website in a way that harms the site, attempts unauthorized access, or interferes with its normal operation.",
          ],
        },
        {
          title: "Services and Project Scope",
          paragraphs: [
            "Oulify provides digital services such as websites, landing pages, mobile apps, automation systems, growth support, and product or demo video work.",
            "Each paid project is governed by the specific proposal, quote, scope, timeline, and deliverables agreed in writing with the client.",
          ],
        },
        {
          title: "Client Responsibilities",
          paragraphs: [
            "To keep work moving efficiently, clients are responsible for providing timely feedback, required content, approvals, logins, and any third-party access needed for the project.",
            "Delays in client feedback or missing materials may affect delivery timelines.",
          ],
        },
        {
          title: "Fees, Invoices, and Revisions",
          paragraphs: [
            "Pricing, deposit requirements, milestone payments, and included revisions are defined in the agreed proposal or invoice.",
            "Work outside the agreed scope may require a separate quote or additional billing.",
            "If payment is overdue, Oulify may pause ongoing work until the account is brought up to date.",
          ],
        },
        {
          title: "Ownership and Portfolio Use",
          paragraphs: [
            "Unless otherwise agreed in writing, the client receives rights to the final approved deliverables after all agreed payments have been made in full.",
            "Oulify retains ownership of pre-existing tools, reusable frameworks, internal processes, and third-party assets that are licensed separately.",
            "Unless confidentiality has been agreed in writing, Oulify may reference completed work in its portfolio or marketing materials.",
          ],
        },
        {
          title: "Liability and Governing Law",
          paragraphs: [
            "Oulify aims to provide high-quality work, but we do not guarantee specific business results, search rankings, platform uptime, or uninterrupted third-party services.",
            "To the maximum extent allowed by law, Oulify's liability is limited to the amount paid by the client for the specific service giving rise to the claim.",
            "These terms are interpreted together with the written agreement, proposal, or invoice provided for the specific service unless another written agreement applies.",
          ],
        },
      ],
    },
    refundPolicy: {
      slug: "refund-policy",
      metaTitle: "Refund Policy | Oulify",
      metaDescription:
        "Read how refunds are handled for Oulify services, including deposits, milestones, custom digital work, cancellations, and delivery issues.",
      title: "Refund Policy",
      intro:
        "This Refund Policy explains how Oulify handles refunds for custom digital services such as websites, apps, automation, and related project work.",
      effectiveDateLabel: "Effective date",
      effectiveDate: "April 1, 2026",
      sections: [
        {
          title: "Custom Service Basis",
          paragraphs: [
            "Most Oulify services are custom, time-based, and created specifically for each client. Because of that, refunds are assessed based on work completed, time reserved, and project stage.",
          ],
        },
        {
          title: "Before Work Starts",
          paragraphs: [
            "If a project is cancelled before work has started, Oulify may issue a refund of prepaid amounts after deducting any planning, consultation, payment processing, or reservation costs already incurred.",
          ],
        },
        {
          title: "After Work Has Started",
          paragraphs: [
            "Once strategy, design, development, editing, setup, or production work has begun, payments covering completed work are non-refundable.",
            "Project deposits are generally non-refundable after the project kickoff or first active work session.",
          ],
        },
        {
          title: "Milestones and Ongoing Services",
          paragraphs: [
            "Approved milestones, delivered work, and completed service periods are non-refundable.",
            "If a project includes recurring monthly work, cancellation applies to future unpaid periods and does not refund work already completed or scheduled for the active billing cycle.",
          ],
        },
        {
          title: "If There Is a Delivery Problem",
          paragraphs: [
            "If Oulify is clearly unable to deliver the agreed scope for reasons within our control, we will first aim to correct the issue within a reasonable time.",
            "If that is not possible, we may offer a proportional partial refund, credit, or another fair written resolution based on the unfinished part of the scope.",
          ],
        },
        {
          title: "How To Request a Refund Review",
          paragraphs: [
            "To request a refund review, email hello@oulify.com with your project name, invoice details, and the reason for the request.",
            "We review requests in good faith and respond as quickly as reasonably possible.",
          ],
        },
      ],
    },
  },
  fi: {
    privacyPolicy: {
      slug: "privacy-policy",
      metaTitle: "Tietosuojaseloste | Oulify",
      metaDescription:
        "Lue, miten Oulify keraa, kayttaa, sailyttaa ja suojaa henkilotietoja, joita jaetaan verkkosivuston ja projektikyselyiden kautta.",
      title: "Tietosuojaseloste",
      intro:
        "Tama tietosuojaseloste kertoo, miten Oulify keraa, kayttaa, sailyttaa ja suojaa tietoja, joita jaetaan taman verkkosivuston kautta ja projektikeskustelujen aikana.",
      effectiveDateLabel: "Voimassa alkaen",
      effectiveDate: "1.4.2026",
      sections: [
        {
          title: "Mita tietoja keramme",
          paragraphs: [
            "Keramme tietoja, jotka paatat jakaa meille, kun otat yhteytta Oulifyyn verkkosivu-, sovellus-, automaatio-, markkinointi- tai videoprojektia varten.",
          ],
          items: [
            "Yhteystiedot, kuten nimi, sahkopostiosoite ja yrityksen nimi.",
            "Projektitiedot, kuten tavoitteet, aikataulu, budjettia koskevat huomiot ja viestin sisalto.",
            "Viestintahistoria, kun otat yhteytta sahkopostilla, WhatsAppilla tai muilla sovituilla kanavilla.",
            "Perustason tekninen kayttodata, jota hosting-ymparisto tai sivuston suorituskykytyokalut voivat kerata, kuten selain, laite ja sivujen kaytto.",
          ],
        },
        {
          title: "Miten kaytamme tietoja",
          paragraphs: [
            "Kaytamme kerattyja tietoja sivuston vastuulliseen yllapitoon ja palvelujen toimittamiseen.",
          ],
          items: [
            "Vastaamme yhteydenottoihin ja laadimme tarjouksia tai projektisuosituksia.",
            "Hallinnoimme asiakasviestintaa, projektitoimituksia, laskutusta ja tukea.",
            "Parannamme verkkosivustoa, palveluja ja palvelun laatua.",
            "Suojaamme sivustoa, estamme vaarinkayttoa ja taytamme lakisaateiset tai sopimuksiin liittyvat velvoitteet.",
          ],
        },
        {
          title: "Tietojen jakaminen",
          paragraphs: [
            "Emme myy henkilotietoja. Jaamme tietoja vain silloin, kun se on tarpeen liiketoiminnan pyorittamiseen tai palvelujen toimittamiseen.",
          ],
          items: [
            "Luotettujen palveluntarjoajien kanssa, kuten hosting-, sahkoposti-, tiedostonsailytys-, viestinta- tai maksutyokalujen osalta.",
            "Viranomaisten kanssa silloin, kun laki niin vaatii.",
            "Projektikumppaneiden tai alihankkijoiden kanssa vain silloin, kun he tarvitsevat tietoja sovitun tyon toteuttamiseen.",
          ],
        },
        {
          title: "Tietojen sailytys ja suojaus",
          paragraphs: [
            "Sailytamme henkilotietoja vain niin kauan kuin se on kohtuullisesti tarpeen viestintaan, projektitoimituksiin, kirjanpitoon tai lakisaateisiin velvoitteisiin.",
            "Kaytamme kohtuullisia teknisia ja organisatorisia suojaustoimia, mutta mikaan verkkosivusto tai verkkotallennusratkaisu ei voi taata taydellista turvallisuutta.",
          ],
        },
        {
          title: "Oikeutesi",
          paragraphs: [
            "Sijainnistasi riippuen sinulla voi olla oikeus pyytaa paasya tietoihisi, tietojen oikaisua tai poistamista.",
          ],
          items: [
            "Voit pyytaa kopion tiedoista, joita sailytamme sinusta.",
            "Voit pyytaa virheellisten tai vanhentuneiden tietojen korjaamista.",
            "Voit pyytaa tietojen poistamista, jos emme enaa tarvitse niita.",
            "Voit peruuttaa suostumuksen valinnaiseen viestintaan silloin, kun kasittely perustuu suostumukseen.",
          ],
        },
        {
          title: "Yhteys",
          paragraphs: [
            "Jos sinulla on tietosuojaan liittyvia kysymyksia tai haluat tehda tietopyynnon, ota yhteytta osoitteeseen hello@oulify.com.",
          ],
        },
      ],
    },
    termsAndConditions: {
      slug: "terms-and-conditions",
      metaTitle: "Kayttoehdot | Oulify",
      metaDescription:
        "Tutustu yleisiin ehtoihin, joita sovelletaan Oulifyn verkkosivuston kayttoon seka verkkosivu-, sovellus-, automaatio- ja muihin digipalveluprojekteihin.",
      title: "Kayttoehdot",
      intro:
        "Nama kayttoehdot kuvaavat yleiset saannot Oulifyn verkkosivuston kaytolle ja yhteistyolle Oulifyn kanssa digipalveluprojekteissa.",
      effectiveDateLabel: "Voimassa alkaen",
      effectiveDate: "1.4.2026",
      sections: [
        {
          title: "Verkkosivuston kaytto",
          paragraphs: [
            "Kayttamalla tata verkkosivustoa sitoudut kayttamaan sita lainmukaisesti ja asiallisesti. Et saa kayttaa sivustoa tavalla, joka vahingoittaa sivustoa, yrittaa luvattomasti paasta jarjestelmiin tai hairitsee sivuston normaalia toimintaa.",
          ],
        },
        {
          title: "Palvelut ja projektin laajuus",
          paragraphs: [
            "Oulify tarjoaa digitaalisia palveluja, kuten verkkosivuja, laskeutumissivuja, mobiilisovelluksia, automaatiojarjestelmia, kasvun tukipalveluja seka tuote- ja demovideoita.",
            "Jokaista maksullista projektia ohjaavat erikseen kirjallisesti sovitut tarjous-, laajuus-, aikataulu- ja toimitussisallot.",
          ],
        },
        {
          title: "Asiakkaan vastuut",
          paragraphs: [
            "Jotta tyo etenee sujuvasti, asiakkaan tulee toimittaa palaute, sisallot, hyvaksynta, tunnukset ja muut tarvittavat paasyoikeudet ajallaan.",
            "Viiveet palautteessa tai puuttuvat materiaalit voivat vaikuttaa toimitusaikatauluun.",
          ],
        },
        {
          title: "Hinnat, laskutus ja muutoskierrokset",
          paragraphs: [
            "Hinnoittelu, mahdolliset ennakkomaksut, valimaksut ja sisaltyvat muutoskierrokset maaritellaan sovitussa tarjouksessa tai laskussa.",
            "Sovitun laajuuden ulkopuolinen tyo voidaan hinnoitella erikseen.",
            "Jos maksu on myohassa, Oulifylla on oikeus keskeyttaa kaynnissa oleva tyo, kunnes avoin saldo on maksettu.",
          ],
        },
        {
          title: "Omistusoikeus ja portfoliokaytto",
          paragraphs: [
            "Ellei kirjallisesti toisin sovita, asiakas saa oikeudet lopullisiin hyvaksyttyihin toimituksiin sen jalkeen, kun kaikki sovitut maksut on maksettu kokonaisuudessaan.",
            "Oulify sailyttaa oikeudet olemassa oleviin tyokaluihin, uudelleenkaytettaviin runkoihin, sisaisiin prosesseihin ja kolmannen osapuolen aineistoihin, joihin sovelletaan erillisia lisensseja.",
            "Ellei kirjallista salassapitoa ole sovittu, Oulify voi esitella valmistunutta tyota portfoliossa tai markkinointimateriaaleissa.",
          ],
        },
        {
          title: "Vastuunrajoitus ja sovellettava laki",
          paragraphs: [
            "Oulify pyrkii toimittamaan laadukasta tyota, mutta emme takaa tiettyja liiketoimintatuloksia, hakukonesijoituksia, alustojen kaytettavyytta tai kolmannen osapuolen palveluiden keskeytyksetonta toimintaa.",
            "Sallituissa rajoissa Oulifyn vastuu rajoittuu siihen summaan, jonka asiakas on maksanut vaateen perusteena olevasta palvelusta.",
            "Naita ehtoja tulkitaan yhdessa kyseista palvelua varten toimitetun kirjallisen sopimuksen, tarjouksen tai laskun kanssa, ellei kirjallisesti toisin sovita.",
          ],
        },
      ],
    },
    refundPolicy: {
      slug: "refund-policy",
      metaTitle: "Palautuskaytanto | Oulify",
      metaDescription:
        "Lue, miten Oulify kasittelee hyvitykset ja palautukset mukautetuissa digipalveluissa, mukaan lukien ennakkomaksut, valivaiheet ja projektin peruutukset.",
      title: "Palautuskaytanto",
      intro:
        "Tama palautuskaytanto kertoo, miten Oulify kasittelee hyvitykset ja palautukset mukautetuissa digipalveluissa, kuten verkkosivu-, sovellus- ja automaatioprojekteissa.",
      effectiveDateLabel: "Voimassa alkaen",
      effectiveDate: "1.4.2026",
      sections: [
        {
          title: "Mukautettujen palvelujen luonne",
          paragraphs: [
            "Useimmat Oulifyn palvelut ovat asiakkaalle erikseen toteutettavia ja aikaan perustuvia. Siksi mahdolliset palautukset arvioidaan tehdyn tyon, varatun ajan ja projektin vaiheen perusteella.",
          ],
        },
        {
          title: "Ennen tyon alkamista",
          paragraphs: [
            "Jos projekti perutaan ennen tyon alkamista, Oulify voi palauttaa ennakkoon maksettuja summia vahennettyna mahdollisilla suunnittelu-, konsultointi-, maksunkasittely- tai varauskuluilla, joita on jo syntynyt.",
          ],
        },
        {
          title: "Kun tyo on alkanut",
          paragraphs: [
            "Kun strategia-, suunnittelu-, kehitys-, editointi-, asennus- tai tuotantotyo on alkanut, valmistunutta tyota vastaavat maksut eivat ole palautuskelpoisia.",
            "Projektien ennakkomaksut ovat yleensa palautuskelvottomia kickoffin tai ensimmaisen aktiivisen tyovaiheen jalkeen.",
          ],
        },
        {
          title: "Valivaiheet ja jatkuvat palvelut",
          paragraphs: [
            "Hyvaksytyt valivaiheet, toimitettu tyo ja toteutuneet palvelujaksot eivat ole palautuskelpoisia.",
            "Jos projektiin sisaltyy kuukausittaista jatkuvaa tyota, peruutus koskee tulevia maksamattomia jaksoja eika hyvita jo tehtya tai kaynnissa olevaa laskutusjaksoa.",
          ],
        },
        {
          title: "Jos toimituksessa on ongelma",
          paragraphs: [
            "Jos Oulify ei selkeasti pysty toimittamaan sovittua laajuutta syysta, joka on hallinnassamme, pyrimme ensisijaisesti korjaamaan tilanteen kohtuullisessa ajassa.",
            "Jos se ei ole mahdollista, voimme tarjota suhteellisen osittaisen hyvityksen, krediitin tai muun reilun kirjallisesti sovitun ratkaisun keskeneraisen osuuden perusteella.",
          ],
        },
        {
          title: "Miten pyydat palautusarviota",
          paragraphs: [
            "Voit pyytaa palautusarviota lahettamalla sahkopostia osoitteeseen hello@oulify.com ja kertomalla projektin nimen, laskutiedot ja pyynnon syyn.",
            "Kasittelemme pyynnot hyvan tavan mukaisesti ja vastaamme niin nopeasti kuin kohtuudella mahdollista.",
          ],
        },
      ],
    },
  },
};

export function getLegalPage(locale, pageKey) {
  return legalPages[locale]?.[pageKey] || legalPages.en[pageKey];
}

export function buildLegalMetadata({ locale, dict, pageKey }) {
  const legalPage = getLegalPage(locale, pageKey);
  const heroImageSrc = getHeroImageSrc(dict.hero.imageSrc || "/assets/heroimage.png");

  return {
    title: legalPage.metaTitle,
    description: legalPage.metaDescription,
    alternates: {
      canonical: `/${locale}/${legalPage.slug}`,
      languages: {
        en: `/en/${legalPage.slug}`,
        fi: `/fi/${legalPage.slug}`,
        "x-default": `/en/${legalPage.slug}`,
      },
    },
    openGraph: {
      url: `/${locale}/${legalPage.slug}`,
      title: legalPage.metaTitle,
      description: legalPage.metaDescription,
      images: [
        {
          url: heroImageSrc,
          width: 1024,
          height: 666,
          alt: dict.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: legalPage.metaTitle,
      description: legalPage.metaDescription,
      images: [heroImageSrc],
    },
  };
}
