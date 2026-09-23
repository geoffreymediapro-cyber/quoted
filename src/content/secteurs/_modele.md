---
# Gabarit de page secteur. Dupliquer, renommer sans le prefixe `_`, remplir.
# Le nom du fichier devient l'URL : mon-secteur.md donne
# /secteurs/mon-secteur/

nom: 'nom de la profession, au singulier'
pluriel: 'la meme au pluriel, pour les tournures « les X »'

title: "Référencement IA <secteur> : <ce que la page promet>"
# H1 affiche, court. Le title complet tient mal en capitales.
h1: 'Référencement IA pour <secteur>'
description: "Deux phrases maximum. Elle sert de meta description et doit se tenir hors contexte."
intro: "Une phrase qui situe le marche, affichee en chapeau sous le H1."

# 4 a 6 questions REELLEMENT posees par les clients de ce secteur avant
# d'acheter. C'est le coeur de la page : elles doivent venir d'un releve,
# pas d'une supposition. Les formuler comme on les tape.
prompts:
  - "..."
  - "..."
  - "..."
  - "..."

# Au moins 3 familles de sources que les moteurs reprennent dans CE secteur.
# `pourquoi` explique le mecanisme, il ne repete pas le nom.
sources:
  - nom: '...'
    pourquoi: '...'

# Au moins 2 freins propres au secteur : cadre reglementaire, habitudes du
# secteur, structure des sites existants. C'est ce qui empeche la page
# d'etre interchangeable avec une autre.
freins:
  - '...'

# Au moins 3 questions. Au moins une doit porter sur ce qui n'est PAS
# garanti : aucune page ne doit laisser croire a un resultat promis.
faq:
  - q: '...'
    a: '...'

updated: 2026-09-22
draft: true
---

Le premier paragraphe repond tout de suite a la question implicite du titre.

## Un intertitre

Le corps developpe ce que le frontmatter structure. Il ne le repete pas.

## Rappels

- Aucun chiffre de resultat, aucune reference client sans accord ecrit.
- Aucun tiret cadratin.
- Vouvoiement.
- Ne jamais ecrire qu'une citation est garantie.
