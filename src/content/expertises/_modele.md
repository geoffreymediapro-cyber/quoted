---
# Gabarit d'une page d'expertise. Le motif du loader est `**/[^_]*.md` :
# ce fichier commence par un souligne, il ne sort donc jamais au build.
#
# ⚠️ Une LP d'expertise ne se justifie que pour une prestation REELLEMENT
# vendue, sur une requete commerciale. Un sujet de fond va dans /guide/.
# Trois LP ont ete produites puis retirees le 28/10 pour cette raison.

# Doit contenir les 12 premiers caracteres du libelle correspondant dans
# EXPERTISES (site.ts), sinon la prestation apparait deux fois sur le hub :
# une carte ici, et une ligne dans « egalement au perimetre ».
nom: 'Libelle exact de la prestation'

# Long, porte les mots-cles. Le h1 reste court.
title: "Le titre de la page, formule sur la requete visee"
h1: 'Titre court'

description: "Meta description. Elle doit se tenir seule, hors contexte."
intro: "Une a deux phrases sous le h1. Ce qu'on fait et pourquoi ca compte."
resume: "Une ligne, affichee sur la carte du hub /expertises/."

# Minimum 3. Ce que le client recoit concretement, pas des promesses.
livrables:
  - t: 'Nom du livrable'
    d: "Ce qu'il contient et a quoi il sert."

# Minimum 2, et c'est le coeur de la page : sur ce marche le vocabulaire
# est brouille, lever la confusion vaut mieux que de decrire une offre.
pasCeQue:
  - t: "Ce n'est pas X"
    d: "Pourquoi la confusion existe, et ce qui distingue reellement les deux."

# Minimum 3.
faq:
  - q: 'La question telle qu''elle se pose'
    a: "La reponse, autonome, sans renvoyer au reste de la page."

# Maillage. Ancre liee au SUJET de la cible, jamais generique.
liens:
  - href: '/audit-geo/'
    label: 'Audit GEO'
    note: "Pourquoi cette page-la interesse quelqu'un qui lit celle-ci."

updated: 2026-01-01
draft: true
---

Le corps en markdown. Il s'affiche entre le bloc des livrables et celui
des confusions a lever.

⚠️ Toute valeur de frontmatter contenant une apostrophe passe en quotes
doubles : une apostrophe dans une chaine entre quotes simples ferme la
chaine et casse le build avec « bad indentation of a mapping entry », un
message qui ne dit rien de la cause.

⚠️ Jamais de tiret cadratin ni demi-cadratin dans le texte publie.
