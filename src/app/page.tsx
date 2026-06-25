import { Hero } from "@/components/sections/Hero";
import { Commitments } from "@/components/sections/Commitments";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyVisintia } from "@/components/sections/WhyVisintia";
import { Work } from "@/components/sections/Work";
import { Diagnostic } from "@/components/sections/Diagnostic";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { siteConfig } from "@/lib/site";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.svg`,
  image: `${siteConfig.url}/opengraph-image`,
  email: siteConfig.email,
  telephone: "+34 622 61 05 71",
  areaServed: siteConfig.location,
  knowsAbout: [
    "Desarrollo web",
    "Software a medida",
    "Diseño de marca",
    "SEO",
    "Redes sociales",
  ],
  sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD is non-executable data, so CSP script-src does not block it
          and it needs no nonce. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Hero />
      <Commitments />
      <Services />
      <Process />
      <WhyVisintia />
      <Work />
      <Diagnostic />
      <Faq />
      <CtaFinal />
    </>
  );
}
