# Portfolio — Théophile Kibonge Ndobo

Site statique bilingue (français / anglais), conçu en HTML, CSS et JavaScript sans dépendance de build.

## Aperçu local

Ouvrir `index.html` dans un navigateur. Pour un aperçu plus fidèle, lancer un serveur local depuis ce dossier :

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Publication GitHub Pages

1. Créer un dépôt public nommé `portfolio` sur le compte `REASPER-243`.
2. Décompresser ce dossier et envoyer **tout son contenu** à la racine du dépôt (y compris `.github/workflows/deploy.yml`).
3. Dans GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
4. La workflow publiera le site à chaque push sur `main`.
5. URL attendue si le dépôt s'appelle `portfolio` : `https://reasper-243.github.io/portfolio/`.

## Référencement Google après publication

1. Vérifier l'URL publique dans Google Search Console.
2. Utiliser l'inspection d'URL pour demander l'indexation de la page d'accueil.
3. Ajouter un sitemap.xml une fois l'URL publique définitive connue.
4. Vérifier les données structurées Person / ProfilePage avec l'outil de test de résultats enrichis.

L'indexation et l'apparition en tête des résultats ne sont pas garanties. Le balisage structuré aide les moteurs à comprendre la page mais ne garantit aucun panneau de connaissance.

## Informations à vérifier avant publication

- Confirmer que le lien LinkedIn avec le caractère accentué correspond bien à l'URL publique du profil.
- Vérifier le numéro de téléphone affiché.
- Confirmer les intitulés, dates et descriptions des formations et certifications.
- Le lien du dépôt ShopFlow est volontairement laissé en attente : le chemin GitHub exact doit être confirmé avant publication.
