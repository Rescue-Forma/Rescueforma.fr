# Site rescueforma.fr

Site statique HTML/CSS/JS vanilla — hébergement GitHub Pages.

## Structure

```
index.html          Accueil
formations.html     Catalogue complet (filtres par thème)
formation.html      Fiche détail (dynamique : formation.html?id=sst)
secteurs.html       Spécialités : santé/médico-social, restauration, entreprises
contact.html        Formulaire de devis (mailto contact@rescueforma.fr)
css/style.css       Charte graphique
js/formations-data.js   BASE DES FORMATIONS — c'est ici qu'on modifie le catalogue
js/common.js        Header/footer communs
assets/img/         Images des formations
assets/fiches/      Fiches programme PDF
```

## Ajouter / modifier une formation

Tout se passe dans `js/formations-data.js` :
1. Copier un bloc formation existant `{ ... }`
2. Changer `id` (unique, sans espace), `code`, `theme` et le contenu
3. Commit — la formation apparaît automatiquement dans le catalogue,
   les secteurs, le formulaire de contact et sa page détail.

## Ajouter une image à une formation

1. Déposer l'image dans `assets/img/` (ex : `sst.jpg`)
2. Dans `js/formations-data.js`, renseigner `image: "sst.jpg"` sur la formation
3. L'image s'affiche en haut de la fiche détail.

## Ajouter une fiche programme PDF

1. Déposer le PDF dans `assets/fiches/` (ex : `sst.pdf`)
2. Dans `js/formations-data.js`, renseigner `fiche: "sst.pdf"`
3. Le bouton « Télécharger la fiche programme (PDF) » apparaît sur la fiche détail.

## Thèmes

SEC Secourisme · INC Incendie & évacuation · SUR Sûreté & sécurité des personnes
PRE Prévention & santé au travail · ELE Habilitations électriques
HYG Restauration & hygiène · SAN Établissements de santé & médico-social
