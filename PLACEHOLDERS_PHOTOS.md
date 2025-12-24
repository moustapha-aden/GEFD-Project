# Emplacements pour les photos dans la documentation

Ce document liste tous les emplacements où des photos peuvent être ajoutées dans la documentation.

## Format des placeholders

Les placeholders sont ajoutés sous forme de commentaires HTML dans les fichiers MDX :
```html
<  TODO: Description de la photo -->
<  Image: nom-fichier.jpg -->
```

Pour ajouter une photo, remplacez le commentaire par :
```markdown
![Description de l'image](/images/nom-fichier.jpg)
```

## Liste des emplacements

###   1 : Création du compte

1. **Page d'accueil E-Campus France**
   - Fichier: `content/docs/etape-1-creation-compte.mdx`
   - Emplacement: Section "Accès à la plateforme"
   - Suggestion: Capture d'écran de la page d'accueil
   - Image: `ecampusfrance-accueil.jpg`

2. **Formulaire d'inscription**
   - Fichier: `content/docs/etape-1-creation-compte.mdx`
   - Emplacement: Section "Remplir le formulaire"
   - Suggestion: Capture d'écran du formulaire d'inscription
   - Image: `formulaire-inscription-ecampus.jpg`

###   2 : Recherche de formations

3. **Page de recherche de formations**
   - Fichier: `content/docs/etape-2-recherche-formations.mdx`
   - Emplacement: Section "Accéder à la recherche"
   - Suggestion: Capture d'écran de la page de recherche avec les filtres
   - Image: `recherche-formations-ecampus.jpg`

###   3 : Documents académiques

4. **Exemple de diplôme**
   - Fichier: `content/docs/etape-3-documents-academiques.mdx`
   - Emplacement: Section "Exemples de documents"
   - Suggestion: Exemple de diplôme (avec données masquées)
   - Image: `exemple-diplome-bac.jpg`

5. **Exemple de relevé de notes**
   - Fichier: `content/docs/etape-3-documents-academiques.mdx`
   - Emplacement: Section "Exemples de documents"
   - Suggestion: Exemple de relevé de notes (avec données masquées)
   - Image: `exemple-releve-notes.jpg`

###   4 : Documents administratifs

6. **Exemple de photo d'identité conforme**
   - Fichier: `content/docs/etape-4-documents-administratifs.mdx`
   - Emplacement: Section "Format requis" des photos
   - Suggestion: Exemple de photo d'identité au format 35x45mm
   - Image: `exemple-photo-identite.jpg`

###   6 : Soumission du dossier

7. **Page de soumission**
   - Fichier: `content/docs/etape-6-soumission.mdx`
   - Emplacement: Section "Soumettre le dossier"
   - Suggestion: Capture d'écran de la page de soumission avec le bouton
   - Image: `soumission-dossier-ecampus.jpg`

###   7 : Entretien Campus France

8. **Illustration de l'entretien**
   - Fichier: `content/docs/etape-7-entretien.mdx`
   - Emplacement: Section "Préparation à l'entretien"
   - Suggestion: Photo d'un entretien (avec autorisation) ou illustration
   - Image: `entretien-campus-france.jpg`

###   8 : Après l'admission

9. **Exemple de lettre d'admission**
   - Fichier: `content/docs/etape-8-apres-admission.mdx`
   - Emplacement: Section "Notification d'admission"
   - Suggestion: Exemple de lettre d'admission (avec données masquées)
   - Image: `lettre-admission-exemple.jpg`

10. **Processus de visa**
    - Fichier: `content/docs/etape-8-apres-admission.mdx`
    - Emplacement: Section "Processus de demande de visa"
    - Suggestion: Photo du consulat ou illustration du processus
    - Image: `consulat-visa-processus.jpg`

11. **Résidence étudiante CROUS**
    - Fichier: `content/docs/etape-8-apres-admission.mdx`
    - Emplacement: Section "Types de logement - Résidences étudiantes"
    - Suggestion: Photo d'une résidence étudiante CROUS
    - Image: `residence-etudiante-crous.jpg`

12. **Colocation étudiante**
    - Fichier: `content/docs/etape-8-apres-admission.mdx`
    - Emplacement: Section "Types de logement - Colocations"
    - Suggestion: Photo d'une colocation étudiante
    - Image: `colocation-etudiante.jpg`

13. **Studio étudiant**
    - Fichier: `content/docs/etape-8-apres-admission.mdx`
    - Emplacement: Section "Types de logement - Studios"
    - Suggestion: Photo d'un studio étudiant
    - Image: `studio-etudiant.jpg`

## Instructions pour ajouter les photos

### 1. Préparer les images

- **Format** : JPG ou PNG
- **Taille** : Optimisée pour le web (max 1-2 Mo)
- **Résolution** : 1200-1920px de largeur recommandée
- **Nommage** : Utilisez les noms suggérés ci-dessus

### 2. Placer les images

Créez un dossier `public/images/docs/` et placez-y toutes les images.

### 3. Remplacer les placeholders

Dans chaque fichier MDX, remplacez :
```html
<  TODO: Description -->
<  Image: nom-fichier.jpg -->
```

Par :
```markdown
![Description de l'image](/images/docs/nom-fichier.jpg)
```

### 4. Exemple complet

**Avant** :
```html
<  TODO: Ajouter une capture d'écran de la page d'accueil E-Campus France -->
<  Image: ecampusfrance-accueil.jpg -->
```

**Après** :
```markdown
![Page d'accueil E-Campus France](/images/docs/ecampusfrance-accueil.jpg)
```

## Notes importantes

- **Confidentialité** : Pour les exemples de documents (diplômes, relevés), masquez toutes les informations personnelles
- **Autorisations** : Pour les photos de personnes (entretiens), obtenez les autorisations nécessaires
- **Qualité** : Assurez-vous que les captures d'écran sont nettes et lisibles
- **Accessibilité** : Ajoutez toujours un texte alternatif descriptif dans les balises `![...]`

## Structure recommandée des dossiers

```
public/
└── images/
    └── docs/
        ├── ecampusfrance-accueil.jpg
        ├── formulaire-inscription-ecampus.jpg
        ├── recherche-formations-ecampus.jpg
        ├── exemple-diplome-bac.jpg
        ├── exemple-releve-notes.jpg
        ├── exemple-photo-identite.jpg
        ├── soumission-dossier-ecampus.jpg
        ├── entretien-campus-france.jpg
        ├── lettre-admission-exemple.jpg
        ├── consulat-visa-processus.jpg
        ├── residence-etudiante-crous.jpg
        ├── colocation-etudiante.jpg
        └── studio-etudiant.jpg
```




