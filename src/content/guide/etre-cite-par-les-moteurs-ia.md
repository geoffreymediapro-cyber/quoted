---
title: 'Comment être cité par ChatGPT, Perplexity et Gemini'
shortTitle: 'Se faire citer'
description: "Les pratiques concrètes qui augmentent les chances qu'un contenu soit repris par un moteur de réponse : structure, extractibilité, sourcing, données structurées et présence hors site."
chapter: 'Pratique'
order: 2
updated: 2026-09-12
---

Aucune méthode ne garantit une citation. En revanche, on observe des différences nettes entre les contenus régulièrement repris et ceux qui ne le sont jamais. Voici ce sur quoi il est raisonnable d'agir.

## 1. Répondre dans les deux premières phrases

C'est la règle qui produit le plus d'effet pour le moins d'effort. Sur toute page qui traite une question, la réponse doit apparaître immédiatement, dans une formulation autonome.

Une phrase autonome est une phrase qui garde son sens quand on l'extrait de la page : elle contient son sujet, elle ne commence pas par « cela dépend », elle ne renvoie pas à un paragraphe précédent par un pronom. Comparez :

> « Comme nous l'avons vu plus haut, cela varie selon les cas, mais il est possible d'obtenir un résultat dans certaines conditions. »

et :

> « Une demande de déréférencement aboutit généralement en deux à six semaines lorsque le contenu relève du droit à l'oubli. »

La seconde peut être citée telle quelle. La première est inutilisable.

Le développement, les nuances et les cas particuliers viennent après. Ils ne disparaissent pas — ils cessent simplement de faire écran à la réponse.

## 2. Structurer pour le découpage

Un moteur découpe vos pages en fragments avant de s'en servir. Plus le découpage est propre, plus les fragments sont exploitables.

- **Des titres qui annoncent leur contenu.** « Combien de temps ça prend » vaut mieux que « Et concrètement ? ».
- **Des questions posées comme les utilisateurs les posent.** Les intertitres interrogatifs correspondent souvent, mot pour mot, aux requêtes formulées en langage naturel.
- **Des listes pour l'énumératif, des tableaux pour le comparatif.** Un tableau de comparaison est repris beaucoup plus facilement qu'un paragraphe qui décrit trois options à la suite.
- **Un sujet par page.** Une page qui traite proprement une question est plus citable que la page « tout-en-un » qui en survole huit.

## 3. Sourcer ce qui est affirmé

Un chiffre sans date ni origine est un chiffre qu'un moteur prend un risque à reprendre. Datez, attribuez, liez la source primaire quand elle existe. Si une donnée provient d'une étude, nommez l'étude et l'année. Si elle provient de votre propre expérience, dites-le explicitement — une donnée assumée comme interne reste une donnée attribuable.

L'inverse est vrai aussi : purger les affirmations invérifiables d'une page augmente la confiance globale accordée au reste.

## 4. Rendre l'auteur et l'expertise visibles

Qui écrit, avec quelle légitimité, et depuis quand. Une page signée par une personne identifiable, dont la compétence est démontrable ailleurs, offre au moteur un motif d'attribution. Une page anonyme n'en offre aucun.

Cela suppose des pages auteur réelles, une date de mise à jour honnête, et une cohérence entre ce que la signature affirme et ce que le reste du web confirme.

## 5. Poser les données structurées utiles

Les données structurées ne provoquent pas une citation à elles seules, mais elles lèvent les ambiguïtés : de quel type d'entité parle-t-on, qui en est l'auteur, à quelle question ce bloc répond-il, quel produit ou quelle organisation est désigné.

Les schémas qui servent le plus dans un contexte GEO sont ceux qui décrivent une entité (`Organization`, `Person`, `Product`), ceux qui expriment une question et sa réponse (`FAQPage`, `HowTo`), et ceux qui rattachent un contenu à son auteur et à sa date (`Article`). La cohérence entre ce balisage et le texte visible compte davantage que l'exhaustivité du balisage.

## 6. Travailler ce qui se dit ailleurs

C'est la partie qu'on sous-estime, et souvent celle qui débloque une situation.

Votre site est **une** source parmi celles que le moteur consulte. S'il est le seul endroit où votre expertise est affirmée, l'information reste fragile. Si la même description de votre marque se retrouve dans un média sectoriel, dans une discussion Reddit, dans un référentiel professionnel et dans une fiche encyclopédique, elle devient un fait stable que le moteur peut reprendre sans hésiter.

Trois terrains reviennent constamment :

- **Les médias que les moteurs citent déjà** dans votre secteur. Ils s'identifient par relevé, pas au jugé : ce ne sont pas toujours les plus connus.
- **Reddit et les forums spécialisés**, largement repris par plusieurs moteurs. Une présence organique et utile, pas une opération de placement.
- **Wikipédia et Wikidata**, quand les critères d'admissibilité sont réellement remplis — ce qui est loin d'être toujours le cas, et ne se force pas.

## 7. Mailler ce qui traite du même sujet

Le maillage interne n'a pas changé de rôle : il consolide un sujet et montre où se trouve la référence. En contexte GEO il gagne une fonction supplémentaire — il permet au moteur de rattacher plusieurs fragments au même ensemble cohérent, plutôt que de traiter chaque page comme un document isolé.

Les ancres descriptives valent mieux que les « en savoir plus », et un lien pertinent vaut mieux que cinq liens posés au hasard.

## Ce qu'il faut éviter

- **Les instructions cachées destinées aux modèles** dans le HTML ou en texte invisible. C'est détectable, et c'est un risque disproportionné.
- **Le contenu produit en masse sans expertise réelle.** Le volume seul ne crée pas d'autorité, il crée de la surface à faible valeur.
- **La fabrication d'avis ou de mentions.** Interdite, repérable, et destructrice pour la marque qui s'y prête.
- **Le suivi à la capture d'écran.** Une réponse obtenue une fois ne prouve rien : la variance entre deux exécutions est réelle. Voir [Mesurer sa visibilité dans les réponses IA](/guide/mesurer-sa-visibilite-ia/).
