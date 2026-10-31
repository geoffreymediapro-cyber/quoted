---
title: "llms.txt : à quoi il sert vraiment, et qui devrait en poser un"
shortTitle: 'llms.txt'
description: "Le débat porte sur la mauvaise question. llms.txt n'est pas un fichier de référencement, c'est un fichier de documentation pour agents. Ce que ça change pour votre décision."
chapter: 'Pratique'
order: 11
updated: 2026-10-31
---

La question posée partout est « faut-il poser un llms.txt sur son site ». Elle produit depuis deux ans la même réponse, de plus en plus argumentée : non, aucun grand moteur ne l'exploite.

C'est exact, et c'est à côté du sujet. Ce fichier n'a jamais été conçu pour le référencement. Il a été conçu pour que des agents lisent de la documentation technique, et la plupart des discussions qui l'entourent sont le résultat de cette confusion de départ.

## Ce que dit la proposition, dans ses propres mots

La spécification, qui en est à sa version 2, s'ouvre sur l'usage visé : un agent de code va chercher la documentation d'une bibliothèque pour écrire correctement un appel d'API.

Le problème qu'elle cherche à résoudre est un problème de coût, pas de visibilité. Une page HTML enveloppe son information dans de la navigation, de la publicité et du JavaScript. La reconvertir en texte propre est imprécis, et chaque jeton gaspillé coûte du temps et de l'argent. L'idée est donc de proposer, à un emplacement conventionnel, une version markdown courte et structurée de ce qu'il faut savoir.

Remarquez ce qui n'y figure pas : nulle part il n'est question d'être cité dans une réponse, ni de peser sur un classement. Le fichier s'adresse à un agent qui sait déjà qu'il veut vous lire, pas à un moteur qui choisit qui citer.

Toute la différence est là, et elle décide du reste.

## Ce que Google en dit, et la contradiction apparente

La position de Google Search est documentée et constante. En juillet 2025, lors d'un Search Central Live, Gary Illyes a indiqué que Google ne prend pas en charge llms.txt et ne prévoit pas de le faire. John Mueller, de son côté, a comparé son utilité à celle de la balise meta keywords, formule qui a beaucoup circulé.

Précisons-la, parce qu'elle est souvent déformée : il ne disait pas que le fichier fonctionne techniquement comme l'ancienne balise, mais qu'il relève de la même catégorie, une déclaration que l'on fait sur soi-même et que personne n'est tenu de croire.

Et puis il y a ce qui brouille tout. Les audits « Agentic Browsing » de Lighthouse, dans Chrome, vérifient désormais la présence d'un fichier llms.txt. Un outil de Google contrôle donc quelque chose que la recherche de Google annonce ne pas utiliser.

Ce n'est pas contradictoire si l'on garde en tête la distinction du début. Lighthouse audite la qualité d'un site pour des agents qui le parcourent, pas sa probabilité d'être cité dans une réponse générée. Qu'un outil vérifie un point ne prouve pas que ce point pèse sur votre visibilité.

Pour le reste, aucun fournisseur majeur n'a confirmé s'en servir. Des relevés de journaux montrent parfois des accès au fichier. Un robot qui télécharge un fichier ne dit rien de ce qu'il en fait, et confondre exploration et utilisation est la principale source de faux espoirs sur ce sujet.

## Vous en avez peut-être déjà un

C'est le point le plus pratique de cet article, et le plus rarement mentionné.

Plusieurs outils très répandus génèrent ce fichier automatiquement, sans que personne l'ait décidé. La spécification elle-même liste parmi ses intégrations **Yoast SEO** et **AIOSEO** pour WordPress, **Wix** pour chaque site qu'il héberge, ainsi que les plateformes de documentation **Mintlify** et **GitBook**.

Autrement dit, une partie des sites qui en possèdent un ne l'ont jamais choisi. Avant de vous demander s'il faut en créer un, allez voir : ouvrez `votresite.fr/llms.txt`. Si quelque chose s'affiche, la vraie question devient ce qu'il contient, et s'il décrit correctement votre activité ou s'il liste trois pages au hasard.

Un fichier généré par défaut et jamais relu est le seul cas où ce sujet peut réellement vous desservir.

## À qui il sert aujourd'hui

À ceux dont le produit est de la documentation lue par des machines.

Si vous éditez un logiciel avec une API, une bibliothèque, une plateforme technique, vos utilisateurs posent des questions à un assistant de code plutôt que de parcourir votre sommaire. Un llms.txt bien tenu réduit alors le risque qu'un agent invente une signature de fonction ou recopie un exemple obsolète. L'effet ne se mesure pas en citations, il se mesure en tickets de support qui n'arrivent pas.

C'est aussi la raison pour laquelle Mintlify et GitBook le génèrent nativement : leurs clients sont précisément ceux pour qui le fichier a été pensé.

## À qui il ne sert à rien

À peu près tout le reste. Un site vitrine, un site de services, un commerce en ligne, un média.

Dans ces cas, personne ne cherche à ingérer votre documentation, et ce qui décide un moteur à vous citer se joue ailleurs : dans ce que vos pages affirment, dans la façon dont la réponse est formulée en tête, et dans ce que des tiers disent de vous. Les sept points qui comptent réellement sont décrits dans [être cité par les moteurs IA](/guide/etre-cite-par-les-moteurs-ia/), et aucun ne passe par un fichier déclaratif.

Il faut dire les choses simplement : poser un llms.txt sur un site de services est à peu près sans effet, mais c'est surtout sans risque. Le vrai coût n'est pas le fichier, c'est l'heure passée dessus au lieu de corriger trois pages qui répondent mal.

## Si vous en posez un quand même

Il y a des raisons légitimes de le faire : vous voulez être prêt si l'adoption vient, ou votre outil le génère déjà et vous préférez qu'il soit juste. Dans ce cas, trois règles suffisent.

**Qu'il soit court et exact.** Un titre, une phrase de contexte, une liste de liens vers ce qui compte vraiment. Un fichier qui recopie tout le site passe à côté de sa seule utilité, qui est de trier.

**Qu'il soit maintenu ou supprimé.** Un fichier figé depuis dix-huit mois qui annonce une offre que vous ne vendez plus est pire que pas de fichier du tout.

**Qu'il ne soit pas indexé.** Ce n'est pas une page de votre site, et le voir ressortir dans les résultats de recherche n'a aucun intérêt.

Et surtout, ne le comptez pas comme une action de visibilité dans un plan. Ce n'en est pas une.

## Ce qu'il faut retenir

Le débat « pour ou contre » dure parce que les deux camps parlent de choses différentes. Ceux qui le défendent pensent documentation technique et ont raison. Ceux qui le rejettent pensent référencement et ont raison aussi.

La bonne question n'est donc pas de savoir si le fichier marche, mais si vous êtes dans le cas pour lequel il a été écrit. Si votre produit est une documentation, posez-en un. Sinon, retenez simplement l'adresse, vérifiez qu'un outil ne vous en a pas fabriqué un dans votre dos, et retournez travailler ce qui se mesure : ce que les moteurs répondent déjà sur vos sujets, et qui ils citent à votre place. La méthode est dans [mesurer sa visibilité dans les réponses IA](/guide/mesurer-sa-visibilite-ia/).
