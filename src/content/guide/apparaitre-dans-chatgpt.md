---
title: 'Comment apparaître dans ChatGPT'
shortTitle: 'ChatGPT'
description: "OpenAI n'a pas un robot mais trois, et ils ne servent pas à la même chose. Bloquer le mauvais vous retire des réponses sans rien protéger. Ce qui décide de votre présence dans ChatGPT."
chapter: 'Par moteur'
order: 4
updated: 2026-10-20
---

La question posée est presque toujours la même : comment faire pour que ChatGPT cite mon site. La réponse commence par un point technique que presque personne n'explique, et qui fait pourtant la différence entre être visible et avoir disparu sans le savoir.

## OpenAI n'a pas un robot, il en a trois

C'est le point de départ, et c'est là que se jouent la plupart des erreurs.

**GPTBot** collecte des pages qui peuvent servir à entraîner les modèles. Le bloquer protège votre contenu d'un usage d'entraînement.

**OAI-SearchBot** alimente l'index de recherche utilisé pour répondre avec des sources. C'est lui qui décide si vous êtes citable.

**ChatGPT-User** va chercher une page en direct, au moment où un utilisateur pose une question qui le déclenche.

La conséquence est directe. Beaucoup de sites ont ajouté `User-agent: GPTBot / Disallow: /` dans leur `robots.txt` en 2023, par réflexe de protection. C'était un choix légitime. Mais nombre d'entre eux ont ensuite bloqué l'ensemble des robots d'OpenAI sans distinguer, et se sont retirés des réponses sourcées sans jamais l'avoir voulu.

Avant toute autre chose, ouvrez votre `robots.txt` et regardez lequel des trois vous bloquez. C'est une vérification de deux minutes, et nous la trouvons mal réglée plus souvent qu'à son tour.

## Ce que ChatGPT affiche, et pourquoi ça compte

Quand ChatGPT répond en s'appuyant sur le web, il affiche ses sources. Pas toujours au même endroit ni avec la même visibilité selon le contexte, mais elles sont là, et elles sont cliquables.

Cela a une conséquence pratique : une citation n'est pas seulement un signal de notoriété, c'est un lien. Moins visible qu'une position dans la recherche classique, mais réel.

Cela a aussi une conséquence stratégique. Les réponses citent peu de sources, souvent trois ou quatre. Être la cinquième ne sert à rien. C'est un jeu beaucoup plus dur que le référencement classique, où la dixième position rapporte encore quelque chose.

## Ce qui augmente vos chances d'être repris

Rien de ce qui suit n'est spécifique à ChatGPT, mais ce moteur y est particulièrement sensible.

**La page doit répondre tôt.** Une réponse autonome dans les deux premières phrases est reprise. Une page qui pose le contexte pendant trois paragraphes ne l'est pas. C'est la règle qui produit le plus d'effet pour le moins d'effort.

**Le titre doit reprendre la question.** Pas le mot-clé, la question, telle qu'elle se pose. « Combien coûte un expert-comptable pour une TPE » plutôt que « Nos tarifs ».

**La date doit être visible.** Sur tout sujet qui bouge, un contenu non daté est moins repris, parce que rien n'indique s'il est encore valable.

**Il faut exister ailleurs.** C'est le levier le plus lent et le plus déterminant. Un modèle pondère ce qui ne vient pas de vous : une mention dans un média établi, une fiche à jour sur un référentiel professionnel, une discussion publique où votre nom revient.

Le détail de ces pratiques est dans [les sept pratiques qui font qu'un contenu est repris](/guide/etre-cite-par-les-moteurs-ia/).

## Les deux croyances qui coûtent le plus cher

**« Il suffit de publier beaucoup. »** Non. Le volume sans structure ne produit rien. Nous voyons régulièrement des sites avec deux cents articles et aucune citation, à côté de sites de vingt pages régulièrement repris. Ce qui compte est la correspondance entre une page et une question.

**« On peut payer pour être dans ChatGPT. »** Non plus. Il n'existe aucun levier de classement exposé, aucun espace achetable dans les réponses sourcées, et quiconque vous vend une position vous vend quelque chose qu'il ne contrôle pas.

## Mesurer, parce que l'impression ne suffit pas

Poser la question une fois et regarder la réponse ne vous apprend rien. Les réponses varient d'une session à l'autre, selon la formulation, selon l'historique, parfois sans raison apparente.

Ce qui fonctionne est un panel de questions fixe, rejoué dans les mêmes conditions, à intervalle régulier. On ne mesure pas une réponse, on mesure une fréquence d'apparition sur un ensemble de questions.

La méthode est détaillée dans [mesurer sa visibilité dans les réponses IA](/guide/mesurer-sa-visibilite-ia/).

## Et les autres moteurs

ChatGPT est le plus utilisé, il n'est pas le seul, et les mécaniques diffèrent. [Perplexity](/guide/apparaitre-dans-perplexity/) affiche ses sources de façon beaucoup plus visible. [Gemini](/guide/apparaitre-dans-gemini/) s'adosse à l'index de Google, ce qui change tout. [Les AI Overviews](/guide/apparaitre-dans-les-ai-overviews/) dépendent de ce qui est déjà classé. Et [Claude](/guide/apparaitre-dans-claude/) touche une audience plus professionnelle.

Travailler un seul moteur n'a pas de sens : les mêmes fondations servent partout, seuls les réglages changent.
