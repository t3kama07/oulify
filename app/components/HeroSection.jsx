import Image from "next/image";
import { getHeroImageSrc } from "@/lib/hero-image";

export default function HeroSection({ locale, hero, primaryCta, secondaryCta }) {
  const heroImageSrc = getHeroImageSrc(hero.imageSrc || "/assets/heroimage.png");
  const heroImageAlt = hero.imageAlt || "Website showcase";
  const heroImageWidth = hero.imageWidth || 1024;
  const heroImageHeight = hero.imageHeight || 666;

  return (
    <section className="hero tone-plain" id="about">
      <div className="shell">
        <div className="hero-layout">
          <div className="hero-left">
            <h1 className="hero-title">
              {hero.titlePrefix ? (
                <>
                  {hero.titlePrefix} <span className="hero-title-highlight">{hero.titleHighlight}</span>
                </>
              ) : (
                hero.title
              )}
            </h1>
            {hero.kicker ? <p className="hero-kicker">{hero.kicker}</p> : null}
            <p className="hero-description">{hero.description}</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={`/${locale}/#contact`}>
                {primaryCta}
              </a>
              <a className="btn btn-secondary" href={`/${locale}/#projects`}>
                {secondaryCta}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src={heroImageSrc}
              alt={heroImageAlt}
              width={heroImageWidth}
              height={heroImageHeight}
              sizes="(max-width: 720px) 62vw, (max-width: 1024px) 68vw, 620px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
