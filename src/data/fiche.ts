import type { CollectionEntry } from "astro:content";
import { SITE_NAME, SITE_URL } from "./site";

type Fiche = CollectionEntry<"metiers">["data"];

/**
 * JSON-LD des pages metier et secteur. Vit ici plutot que dans FichePro
 * parce qu'il doit atterrir dans le <head> via BaseLayout : un composant
 * enfant ne peut pas remonter une valeur a son layout.
 *
 * Service et FAQPage sont deux blocs distincts, pour que les questions
 * restent exploitables meme si le reste de la page ne l'est pas.
 */
export function ficheSchema(d: Fiche, url: string, kicker: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${kicker} pour ${d.pluriel}`,
      description: d.description,
      url,
      serviceType: "Generative Engine Optimization",
      areaServed: { "@type": "Country", name: "France" },
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];
}
