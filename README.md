# quoted.fr

Site statique construit avec [Astro](https://astro.build), hebergé sur GitHub Pages.

## Commandes

| Commande         | Action                                            |
| :--------------- | :------------------------------------------------ |
| `npm install`    | Installe les dependances                          |
| `npm run dev`    | Serveur de dev sur `localhost:4321`               |
| `npm run build`  | Build de production dans `./dist/`                |
| `npm run preview`| Previsualise le build local                       |
| `npm run check`  | Verification des types Astro/TypeScript           |

## Deploiement

Automatique : chaque `push` sur `main` declenche
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), qui build le site
et publie `dist/` sur GitHub Pages.

Pages est configure en mode **GitHub Actions** (`build_type: workflow`), pas en
mode branche. Le domaine personnalise vient de [`public/CNAME`](public/CNAME)
et de la config Pages du repo.

## DNS

Zone geree chez **Hetzner** (`api.hetzner.cloud/v1`, zone `1517934`).

| Type  | Nom   | Valeur                                                                       |
| :---- | :---- | :--------------------------------------------------------------------------- |
| A     | `@`   | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153           |
| AAAA  | `@`   | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 |
| CNAME | `www` | `geoffreymediapro-cyber.github.io.`                                          |

HTTPS force active cote GitHub Pages.

## A savoir

GitHub Pages sert uniquement du **statique** : pas de traitement de formulaire
cote serveur. Pour un formulaire de contact il faut un service externe
(Formspree, Web3Forms) ou un passage sur Cloudflare Pages + Workers.
