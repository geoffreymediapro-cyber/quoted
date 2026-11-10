---
title: "Comment savoir si votre marque est citée par les IA"
shortTitle: 'Savoir si vous êtes cité'
description: "Quatre méthodes pour le vérifier vous-même, ce que chacune prouve réellement, et le piège qui donne un faux positif à presque tout le monde dès la première tentative."
chapter: 'Pratique'
order: 14
updated: 2026-11-10
---

La première chose que fait une entreprise qui se pose la question, c'est ouvrir ChatGPT et demander si elle est connue.

C'est la méthode la plus répandue, et c'est aussi celle qui ment le plus. Voici les quatre façons de vérifier, ce que chacune prouve réellement, et pourquoi la plus évidente vous donnera presque toujours une réponse fausse.

## Méthode 1 : poser la question, mais pas depuis votre compte

Le piège est simple. Vous êtes connecté, vous avez déjà parlé de votre entreprise au modèle, la mémoire est active, votre historique est plein de votre secteur. Vous demandez « connais-tu telle marque », et le modèle vous répond aimablement que oui.

Cela ne prouve rien du tout. Vous avez interrogé une session qui vous connaît.

Trois corrections suffisent à rendre le test valable.

**Déconnectez-vous, ou ouvrez une fenêtre privée.** Mieux, désactivez la mémoire. Vous cherchez ce que voit un inconnu, pas ce que voit votre historique.

**Posez la question du client, pas celle de la marque.** « Connais-tu Dupont Conseil » est une question que personne ne tape. « Quel cabinet pour accompagner une reprise d'entreprise en Bretagne » est une vraie question, et c'est celle qui décide d'un contrat.

**Recommencez plusieurs fois.** Une réponse générée n'est pas déterministe, et l'écart est considérable : une étude Semrush sur les modes de raisonnement de ChatGPT relève que seulement 25,6 % des domaines cités sont communs entre le mode minimal et le mode élevé. Sur la même question, près de trois sources sur quatre changent. Apparaître une fois sur cinq et cinq fois sur cinq, ce n'est pas la même situation.

## Méthode 2 : vos logs serveur, la preuve que personne ne peut maquiller

C'est la méthode la plus fiable, et la moins utilisée. Les robots passent chez vous et laissent une trace.

Encore faut-il savoir lequel regarder, parce qu'ils ne servent pas à la même chose. C'est le point que presque tous les articles sur le sujet passent sous silence.

| Robot | À quoi il sert | Ce que sa présence prouve |
|---|---|---|
| `GPTBot` | Entraînement des modèles OpenAI | Rien sur votre citabilité |
| `OAI-SearchBot` | Index de recherche de ChatGPT | Vous êtes candidat à être cité |
| `ChatGPT-User` | Lecture en direct suite à une question | Quelqu'un a posé une question qui a mené à vous |
| `PerplexityBot` | Index de recherche de Perplexity | Vous êtes candidat chez Perplexity |
| `Perplexity-User` | Lecture en direct suite à une question | Une réponse est allée vous chercher |
| `ClaudeBot` | Entraînement des modèles Anthropic | Rien sur votre citabilité |
| `Claude-SearchBot` | Index de recherche de Claude | Vous êtes candidat chez Claude |
| `Claude-User` | Lecture en direct suite à une question | Une réponse est allée vous chercher |

Retenez la distinction, elle change l'interprétation du tout au tout. Voir `GPTBot` ou `ClaudeBot` signifie seulement que votre contenu a pu servir à l'entraînement. Voir `OAI-SearchBot` signifie que vous êtes dans l'index qui alimente les réponses. Et voir `ChatGPT-User` ou `Perplexity-User` est le signal le plus direct qui existe : une personne a posé une question, et le moteur est venu lire votre page pour y répondre.

Deux précautions avant de conclure.

**Filtrez sur le préfixe, pas sur la chaîne complète.** Les numéros de version changent. Cherchez `GPTBot/` ou `PerplexityBot/`, pas la chaîne entière.

**Un user-agent se falsifie.** N'importe qui peut se présenter comme `ChatGPT-User`. OpenAI, Perplexity et Anthropic publient les plages d'adresses IP officielles de leurs robots : si le volume compte pour vous, recoupez.

## Méthode 3 : le trafic de référence

Dans votre outil de mesure d'audience, regardez les sources de trafic. Les visites venues de `chatgpt.com`, `perplexity.ai` ou des autres assistants y apparaissent comme n'importe quelle autre référence.

Ce que cela prouve est précis et limité : quelqu'un a vu votre lien dans une réponse et a cliqué dessus.

Ce que cela rate est énorme. Une bonne partie des réponses générées ne produit aucun clic, par construction : l'utilisateur obtient son information et s'arrête là. Un trafic de référence nul ne veut donc pas dire que vous n'êtes pas cité. Il veut dire que vous ne pouvez pas le mesurer par là.

C'est un indicateur de complément, jamais un verdict.

## Méthode 4 : les outils gratuits

Plusieurs éditeurs proposent des vérificateurs de visibilité IA gratuits, et ils occupent d'ailleurs les premières places sur cette requête. Ils ont leur utilité : ils donnent un ordre de grandeur en quelques secondes, sans rien installer.

Deux limites, à connaître avant de s'appuyer dessus.

**Ils rendent un score, pas les réponses.** Un chiffre que vous ne pouvez pas auditer ne vous apprend rien sur ce qui est dit de vous, ni sur qui est cité à votre place. Or c'est exactement l'information qui sert à décider quoi faire.

**Ils interrogent une fois.** Compte tenu de la variance rappelée plus haut, un relevé unique transformé en note sur cent donne une fausse impression de précision.

Utilisez-les pour un premier coup d'œil. Ne construisez pas un plan dessus.

## Ce que chaque méthode prouve

Résumé utile avant de s'y mettre.

- **Demander soi-même** dit ce qu'un utilisateur verrait, à condition de le faire hors de son compte et plusieurs fois.
- **Les logs** disent si vous êtes exploré, et par quel type de robot. C'est la seule preuve technique.
- **Le trafic de référence** dit que des gens cliquent, et sous-estime toujours la réalité.
- **Les outils** donnent un ordre de grandeur, sans le détail qui permet d'agir.

Aucune ne suffit seule. Prises ensemble, elles répondent à la question en une demi-journée de travail.

## Et ensuite

Une vérification ponctuelle répond à « est-ce que j'y suis ». Elle ne répond pas à « est-ce que ça progresse », qui demande un panel de questions stable rejoué dans les mêmes conditions. La méthode est décrite dans [mesurer sa visibilité dans les réponses IA](/guide/mesurer-sa-visibilite-ia/).

Et si le constat est que vous n'apparaissez nulle part, ne concluez pas trop vite à un problème de contenu : [quatre causes très différentes](/guide/pourquoi-chatgpt-ne-cite-pas-votre-site/) produisent le même symptôme, et trois d'entre elles ne se corrigent pas en écrivant des pages.

Si vous préférez que ce soit fait pour vous, c'est précisément ce que nous renvoyons dans le relevé gratuit : vos questions rejouées sur cinq moteurs, et les réponses brutes, pas un score.
