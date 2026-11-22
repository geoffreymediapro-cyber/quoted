---
title: "AEO, GEO, LLMO : ce que recouvrent ces sigles, et lequel repose sur un protocole"
shortTitle: 'AEO, GEO, LLMO'
description: "Quatre sigles pour une même préoccupation, et un seul dont la définition se vérifie : le GEO vient d'un papier publié à KDD 2024. Ce qu'il a réellement mesuré, et le résultat qui devrait décider de votre investissement."
chapter: 'Fondamentaux'
order: 2
updated: 2026-11-22
faq:
  - q: "Quelle est la différence entre le GEO et l'AEO ?"
    a: "Sur le fond, aucune : les deux désignent le fait de rendre un contenu citable par un moteur qui rédige sa réponse. La seule différence vérifiable est documentaire. Le GEO renvoie à un article de recherche publié à la conférence KDD 2024, qui a introduit le terme, un banc d'essai et des résultats mesurés. L'AEO ne renvoie à aucun texte fondateur, et son périmètre change d'un auteur à l'autre."
  - q: "Qui a inventé le terme GEO ?"
    a: "Six chercheurs : Pranjal Aggarwal, Vishvak Murahari, Tanmay Rajpurohit, Ashwin Kalyan, Karthik Narasimhan et Ameet Deshpande. Leur article, intitulé GEO: Generative Engine Optimization, a été déposé en novembre 2023 et publié à la conférence ACM SIGKDD de 2024, à Barcelone. Il propose le terme, un jeu de tests appelé GEO-bench, et la mesure de neuf façons de réécrire une page."
  - q: "Faut-il choisir entre le SEO et le GEO ?"
    a: "Non, et la question est mal posée. Les moteurs de réponse s'appuient sur des index de recherche : une page introuvable ou mal indexée ne sera pas citée davantage qu'elle n'était classée. Les fondamentaux techniques du référencement restent un prérequis, ils ont simplement cessé d'être suffisants."
  - q: "Le bourrage de mots-clés fonctionne-t-il sur les moteurs d'IA ?"
    a: "Non. Dans l'étude fondatrice, sur neuf méthodes de réécriture testées, le bourrage de mots-clés est la seule qui fasse baisser la visibilité de la page. Les auteurs le mesurent à 10 pour cent en dessous de la page laissée telle quelle lorsque le moteur utilisé est Perplexity. Ce qui fonctionne, ce sont les citations attribuées, les chiffres et les sources."
  - q: "Le GEO sert-il à quelque chose si mon site est déjà premier sur Google ?"
    a: "Beaucoup moins, et c'est mesuré. Les auteurs de l'étude fondatrice ont ventilé les gains selon la position de départ dans les résultats de recherche. Le site en cinquième position gagne jusqu'à 115 pour cent de visibilité, tandis que celle du site déjà premier recule de 30 pour cent en moyenne. Pour un leader installé, l'enjeu n'est donc pas d'augmenter sa reprise mais de surveiller qu'elle ne se déplace pas vers un concurrent."
  - q: "Que vaut le sigle LLMO ?"
    a: "C'est du vocabulaire. Le LLMO, pour Large Language Model Optimization, décrit le même travail que le GEO en se plaçant du point de vue du modèle plutôt que du moteur. Il ne renvoie à aucun protocole, aucun jeu de tests et aucune mesure publiée. Son apparition n'oblige personne à changer de méthode."
---

Depuis deux ans, le même besoin se vend sous quatre noms : **AEO** (*Answer Engine Optimization*), **GEO** (*Generative Engine Optimization*), **LLMO** (*Large Language Model Optimization*) et **AIO** (*AI Optimization*, parfois *AI SEO*). On croise aussi AISO, LLM SEO et quelques variantes propres à leur auteur.

La tentation est de chercher la frontière entre ces disciplines. Il n'y en a pas : elles recouvrent toutes la même préoccupation, [celle que décrit le GEO](/guide/qu-est-ce-que-le-geo/), être présent au moment où un moteur rédige la réponse au lieu d'afficher une liste de liens.

Il existe en revanche une différence réelle entre ces sigles, et ce n'est pas celle qu'on vous présentera. **Un seul des quatre renvoie à un protocole publié, avec un jeu de tests, des mesures et des résultats que vous pouvez aller lire.** Les trois autres sont du vocabulaire. Et ce protocole n'est cité dans presque aucune des pages françaises qui comparent les sigles, alors qu'il contient le résultat le plus utile du lot.

## Ce que chaque sigle désigne

Avant d'entrer dans le détail, voici les quatre termes mis à plat. La dernière colonne est celle qui compte, et c'est aussi la seule qu'on ne trouve nulle part ailleurs.

<div class="table-scroll" tabindex="0" role="region" aria-label="Comparatif des quatre sigles">

| Sigle | Ce qu'il désigne en pratique | Texte fondateur |
|---|---|---|
| **GEO** | Être cité dans une réponse rédigée par un moteur : ChatGPT, Perplexity, Gemini, Claude | **Oui** : article publié à KDD 2024, avec banc d'essai et résultats mesurés |
| **AEO** | Le même objet, avec un héritage des extraits de réponse de Google et des assistants vocaux | Aucun |
| **LLMO** | Le même objet, formulé du point de vue du modèle plutôt que du moteur | Aucun |
| **AIO** | Terme parapluie, dont le périmètre change selon l'auteur | Aucun |

</div>

Trois lignes sur quatre portent la même mention. C'est tout le sujet de cet article.

## Le test des cinq définitions

Avant d'aller plus loin, une vérification que vous pouvez faire en trois minutes.

Ouvrez cinq pages qui définissent l'AEO et comparez les périmètres. Vous obtiendrez cinq découpages différents : chez l'un l'AEO couvre les assistants vocaux et les extraits de réponse de Google, chez l'autre il désigne exactement ce que le voisin appelle GEO, chez un troisième il englobe le tout. Aucune ne renvoie à un texte fondateur, pour une raison simple : il n'y en a pas.

Faites le même exercice avec le GEO, et vous tombez au bout du fil sur une référence unique.

## Le GEO a une origine datée

Le sigle vient d'un article de recherche intitulé *GEO: Generative Engine Optimization*, signé Pranjal Aggarwal, Vishvak Murahari, Tanmay Rajpurohit, Ashwin Kalyan, Karthik Narasimhan et Ameet Deshpande, déposé en novembre 2023 et publié à **KDD 2024**, la conférence ACM SIGKDD, à Barcelone.

Les auteurs y font trois choses. Ils proposent le terme. Ils construisent **GEO-bench**, un jeu de questions issues de plusieurs domaines, accompagnées des sources web correspondantes. Et ils testent neuf façons de réécrire une page pour voir laquelle augmente sa reprise dans une réponse générée. Le résumé annonce un gain de visibilité pouvant atteindre **40 %**.

Autrement dit, le GEO n'est pas né dans un billet de blog d'agence, et ses premières recettes ont été mesurées avant d'être vendues. C'est la seule raison sérieuse de préférer ce sigle aux autres.

## Les trois résultats que les comparatifs ne reprennent pas

### Les réflexes du SEO ne se transposent pas

Sur les neuf méthodes testées, le **bourrage de mots-clés** est la seule qui fasse baisser la visibilité dans l'expérience principale. Sur une réplication menée avec Perplexity comme moteur, les auteurs la mesurent **10 % en dessous** de la page laissée telle quelle.

C'est contre-intuitif, et c'est pourtant la conclusion la plus robuste du papier : ce qui servait à se classer ne sert pas à se faire citer. [Les quatre cas à ne pas confondre](/guide/pourquoi-chatgpt-ne-cite-pas-votre-site/) partent du même constat.

### Ce qui fonctionne, ce sont les preuves

Trois méthodes sortent nettement du lot, et ce sont les trois mêmes : **ajouter des citations attribuées, des chiffres et des sources**. Les auteurs leur attribuent 30 à 40 % d'amélioration sur leur métrique principale, et 15 à 30 % sur la seconde.

Ce n'est pas une surprise quand on a compris ce que fait un moteur de réponse : il doit étayer ce qu'il avance, donc il va chercher ce qui est étayé. Mais il est utile de savoir que la hiérarchie des tactiques a été mesurée, et pas seulement devinée. Elle recoupe [les sept pratiques observées](/guide/etre-cite-par-les-moteurs-ia/).

### Le résultat qui devrait décider de votre investissement

C'est celui que personne ne reprend, et c'est le plus actionnable des trois.

Les auteurs ont ventilé les gains **selon la position du site dans les résultats de recherche de départ**. Le constat est net : ce sont les sites les moins bien classés qui gagnent le plus. Pour le site en cinquième position, l'ajout de sources fait progresser la visibilité de **115 %**. Pour le site déjà premier, la même opération la fait **reculer de 30 % en moyenne**.

Lisez bien la seconde moitié. Dans ce dispositif, celui qui domine déjà la recherche classique ne gagne rien à travailler sa page, puisqu'il occupe déjà la citation, et il perd quand les autres s'y mettent. **Le GEO est un levier d'outsider.** Un autre jeu de mesures va dans le même sens sur un terrain différent : à l'arrivée des encadrés de réponse de Google, c'est également la première position qui perd le plus de clics, comme le montre [l'impact des AI Overviews sur le trafic](/guide/impact-des-ai-overviews-sur-le-trafic/).

Si vous êtes challenger sur vos requêtes, c'est l'argument le plus solide pour vous y mettre, et il est plus parlant que n'importe quel discours sur l'avenir de la recherche. Si vous êtes la référence installée de votre marché, votre sujet n'est pas d'augmenter votre reprise mais de surveiller qu'elle ne se déplace pas, ce qui est un travail de [mesure](/guide/mesurer-sa-visibilite-ia/) avant d'être un travail de production.

## Ce que ce papier ne prouve pas

Un prestataire qui vous citerait ces chiffres comme une promesse se tromperait, et autant savoir pourquoi.

**Le moteur testé n'est pas celui que vous utilisez.** L'expérience principale repose sur un dispositif monté par les auteurs : les cinq premiers résultats Google passés à `gpt-3.5-turbo`. Les moteurs de 2026 n'ont ni ce modèle, ni cette façon de choisir leurs sources.

**La visibilité mesurée n'est pas du trafic.** La métrique principale compte la part de votre texte reprise dans la réponse, pondérée par l'endroit où elle apparaît. La seconde est une appréciation produite par un modèle de langage. Ce sont des indicateurs de reprise, faits pour comparer des méthodes entre elles ; ils ne disent rien de vos clics ni de votre chiffre d'affaires.

**Les ordres de grandeur ont deux ans.** Novembre 2023, c'est avant la généralisation des réponses générées dans Google et avant les modes de raisonnement.

Ce qui survit à ces réserves, c'est la **direction** et la **hiérarchie** : les preuves vérifiables fonctionnent, les ficelles du référencement ne se transposent pas, et le gain dépend d'où vous partez. Ce sont des conclusions de méthode, pas des garanties de résultat, et c'est exactement pour cette raison qu'un chiffre annoncé à l'avance sur votre cas n'a aucune valeur.

## Pourquoi la querelle de sigles continue

Parce qu'un sigle neuf justifie une ligne budgétaire neuve.

Présenter l'AEO et le GEO comme deux disciplines distinctes permet de vendre deux prestations, puis une troisième le jour où le LLMO s'installe. C'est un argument commercial, pas une distinction technique, et il vous coûte quelque chose : il déplace la discussion loin du seul terrain où elle vous serait utile.

## Les deux questions qui remplacent le sigle

On lit souvent qu'il faut « combiner le SEO, l'AEO et le GEO » dans une stratégie unifiée. La formule est rassurante et ne dit rien : on ne combine pas trois noms du même travail. Ce qui s'articule réellement, c'est d'un côté le référencement classique, qui conditionne l'accès à l'index, de l'autre le travail d'extractibilité et de preuve, qui conditionne la reprise.

Il n'y a donc pas à choisir entre quatre disciplines. Il y a deux questions à poser, et aucune ne contient d'acronyme.

**Quel moteur ?** Parce qu'ils ne consultent pas les mêmes index et ne citent pas les mêmes sources. L'assistant de Mistral, par exemple, [interroge l'index de Brave](/guide/apparaitre-dans-mistral/) et pas celui de Google : une page absente de l'un peut être parfaitement visible dans l'autre.

**Quel verrou ?** Parce qu'entre votre page et une citation il y a [quatre obstacles successifs](/guide/delai-resultats-geo/), et que trois d'entre eux ne se lèvent pas en écrivant du contenu.

Un prestataire qui répond à ces deux questions sait de quoi il parle, quel que soit le mot qu'il inscrit sur la facture. Un prestataire qui vous explique longuement la différence entre l'AEO et le GEO ne vous a encore rien dit sur votre site.
