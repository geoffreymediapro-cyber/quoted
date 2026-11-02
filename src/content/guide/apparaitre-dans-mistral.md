---
title: "Mistral Vibe (ex-Le Chat) : comment être cité par l'IA française"
shortTitle: 'Mistral (ex-Le Chat)'
description: "L'assistant de Mistral n'interroge pas l'index de Google mais celui de Brave, dont le robot n'annonce aucun user-agent. Deux faits que les pages françaises sur le sujet ne mentionnent pas, et qui changent tout."
chapter: 'Par moteur'
order: 13
updated: 2026-11-02
---

Commençons par le détail qui date les pages existantes : **Le Chat s'appelle désormais Vibe**. La fiche de l'application, publiée par Mistral, l'annonce en une phrase, « Le Chat devient Vibe ».

Ce n'est qu'un nom, et ce n'est pas le sujet. Le vrai sujet est ailleurs, et il est absent des quatre pages françaises les mieux placées sur la question : aucune ne dit quel index l'assistant interroge.

## Il ne lit pas Google, il lit Brave

Mistral et Brave ont annoncé que l'assistant utiliserait l'API de recherche de Brave pour ses résultats web en direct, avec citations. C'est l'accord documenté, et rien n'indique qu'il ait changé avec le passage à Vibe.

Cela paraît anecdotique. Ça ne l'est pas, parce que **Brave Search fonctionne sur un index entièrement indépendant**, construit par son propre robot, et non sur une redistribution de Google ou de Bing. Brave le revendique explicitement.

La conséquence est directe et contre-intuitive. Être premier sur Google ne garantit rien ici. Votre page peut dominer la recherche classique et simplement ne pas figurer dans l'index que l'assistant consulte. C'est une situation différente de celle de [ChatGPT](/guide/apparaitre-dans-chatgpt/), et sans aucun rapport avec les AI Overviews, qui ne reprennent au contraire que ce qui est déjà classé chez Google.

Le test tient en trente secondes : cherchez votre page sur `search.brave.com`. Si elle n'y est pas, aucune optimisation de contenu ne vous fera citer par Mistral, parce que le problème est en amont.

## Le piège du blocage par user-agent

Voici le point le plus utile de cette page, et celui qui surprend tout le monde.

Le robot de Brave **n'annonce volontairement aucun user-agent distinctif**. Brave l'écrit dans sa propre documentation, et en donne la raison : éviter d'être discriminé par les sites qui n'autorisent que Google à les explorer.

Deux conséquences pratiques en découlent.

**Vous ne pouvez pas l'autoriser nommément.** Il n'y a pas de ligne à ajouter dans votre `robots.txt` pour le laisser passer, puisqu'il n'y a pas de nom à cibler. Toute la logique d'autorisation par liste blanche, celle qui fonctionne pour GPTBot ou Google-Extended, ne s'applique pas.

**Vous pouvez le bloquer sans le savoir.** Un pare-feu applicatif agressif, un mode anti-robots activé par défaut chez votre hébergeur, une règle qui ne laisse passer que les robots identifiés : chacun de ces réglages peut vous retirer de l'index de Brave, donc des réponses de Mistral, sans produire la moindre alerte. Vous ne verrez ni erreur, ni baisse de trafic, puisque ce trafic n'existait pas encore.

C'est l'un des rares cas où une décision d'infrastructure, prise par quelqu'un qui n'a jamais entendu parler de GEO, décide seule de votre présence dans un moteur de réponse.

## Sur l'actualité, l'AFP passe avant vous

Mistral a signé un partenariat pluriannuel avec l'Agence France-Presse. Il donne à l'assistant l'accès au fil de dépêches de l'agence, dans six langues dont le français.

Pour une marque, l'implication est simple et vaut mieux qu'une longue stratégie. Sur les questions d'actualité, sur les sujets chauds, sur ce qui vient de se produire, vous n'avez à peu près aucune chance d'être la source citée : une agence de presse alimente le modèle en direct, et vous ne jouez pas dans la même catégorie.

Inutile d'y dépenser des efforts. Ce qui reste accessible, ce sont les questions durables : les explications, les comparaisons, les procédures, les sujets de métier. C'est là que votre expertise a une valeur qu'une dépêche n'a pas.

## Ce qui se travaille réellement

Une fois l'index vérifié, le reste rejoint les fondamentaux, avec deux nuances.

**Le français est un avantage, pas une formalité.** Les modèles de Mistral sont entraînés avec une attention particulière au français. Un contenu rédigé directement en français, dans la langue de votre métier, y est mieux exploité qu'une traduction approximative depuis l'anglais.

**La cohérence de l'entité compte plus qu'ailleurs.** L'index est plus petit que celui de Google, donc les sources sont moins nombreuses et chacune pèse davantage. Une organisation mal identifiée a d'autant moins de chances d'être retenue.

Pour le reste, les sept points décrits dans [être cité par les moteurs IA](/guide/etre-cite-par-les-moteurs-ia/) s'appliquent sans changement : une question par page, une réponse autonome en tête, des affirmations vérifiables et datées.

## Faut-il s'en occuper ?

Honnêtement, pas en premier. L'audience de l'assistant de Mistral reste très inférieure à celle de ChatGPT, et si vous devez choisir une seule surface, ce n'est pas celle-là.

Trois situations changent ce calcul. Si vous vendez au secteur public ou à des grands comptes soumis à des exigences de souveraineté, votre interlocuteur utilise probablement un outil français par obligation plus que par goût. Si votre marché est strictement francophone, la proportion d'utilisateurs concernés y est plus élevée que la moyenne. Et Mistral élargit sa distribution, notamment par un partenariat avec Mozilla pour amener son assistant dans Firefox, ce qui déplace la question du volume.

Dans tous les cas, la vérification de l'index coûte trente secondes et peut révéler un blocage que vous subissez depuis des mois. C'est le meilleur rapport entre l'effort et l'information de tout ce guide.

Pour savoir si vous y êtes déjà cité, et à quelle fréquence, la méthode de relevé est la même que pour les autres moteurs : elle est décrite dans [mesurer sa visibilité dans les réponses IA](/guide/mesurer-sa-visibilite-ia/). Et si vous n'apparaissez nulle part, [le tri des quatre causes possibles](/guide/pourquoi-chatgpt-ne-cite-pas-votre-site/) s'applique ici aussi.
