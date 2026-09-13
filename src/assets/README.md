# Capture du hero

Déposez ici une **vraie capture** d'une réponse générée (AI Overview de Google,
Gemini, Perplexity, ChatGPT) sous le nom :

```
hero-answer.png     (ou .jpg / .jpeg / .webp / .avif)
```

Elle remplace automatiquement l'illustration du hero au prochain build, sans
aucune modification de code : [`src/components/AnswerPanel.astro`](../components/AnswerPanel.astro)
la détecte via `import.meta.glob` et la sert redimensionnée par Astro.

## Ce qu'il faut viser

- Une requête **représentative d'un client**, pas une requête de marque.
- Le bloc de réponse **avec ses sources visibles** : c'est le sujet du site.
- Largeur de capture d'au moins **1120 px** pour rester net sur écran Retina.
- Recadrer sur le bloc de réponse, sans la barre d'adresse du navigateur.

## Précautions

- Une capture montre des marques tierces et le contenu qu'un moteur a produit à
  un instant donné. Vérifiez qu'aucun concurrent ni aucune information gênante
  n'y apparaît avant de publier.
- Une réponse générée **change avec le temps** : la capture vieillit. Prévoyez
  de la refaire, ou datez-la dans la légende.
- Ne retouchez pas le contenu de la réponse pour y faire figurer une marque :
  ce serait un faux document.
