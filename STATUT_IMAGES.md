# Statut des images dans la documentation

## 📁 Dossier : `public/images/docs/`

## ❌ Aucune image valide actuellement

**Situation actuelle** : Le dossier contient des fichiers `.jpg` mais ils sont probablement vides ou invalides.

## 📸 Images nécessaires pour la documentation

Voici la liste complète des **13 images** nécessaires :

###   1 : Création du compte
1. **ecampusfrance-accueil.jpg** - Capture d'écran de la page d'accueil E-Campus France
2. **formulaire-inscription-ecampus.jpg** - Capture d'écran du formulaire d'inscription

###   2 : Recherche de formations
3. **recherche-formations-ecampus.jpg** - Capture d'écran de la page de recherche avec les filtres

###   3 : Documents académiques
4. **exemple-diplome-bac.jpg** - Exemple de diplôme (⚠️ masquer toutes les données personnelles)
5. **exemple-releve-notes.jpg** - Exemple de relevé de notes (⚠️ masquer toutes les données personnelles)

###   4 : Documents administratifs
6. **exemple-photo-identite.jpg** - Exemple de photo d'identité conforme (format 35x45mm)

###   6 : Soumission
7. **soumission-dossier-ecampus.jpg** - Capture d'écran de la page de soumission avec le bouton "Soumettre"

###   7 : Entretien
8. **entretien-campus-france.jpg** - Photo d'entretien ou illustration (⚠️ autorisation nécessaire si photo réelle)

###   8 : Après l'admission
9. **lettre-admission-exemple.jpg** - Exemple de lettre d'admission (⚠️ masquer toutes les données personnelles)
10. **consulat-visa-processus.jpg** - Photo du consulat ou illustration du processus de visa
11. **residence-etudiante-crous.jpg** - Photo d'une résidence étudiante CROUS
12. **colocation-etudiante.jpg** - Photo d'une colocation étudiante
13. **studio-etudiant.jpg** - Photo d'un studio étudiant

##  Bonne nouvelle

**Aucune erreur de build** : Toutes les références aux images ont été retirées des fichiers MDX. Le projet compile sans erreur, même sans les images.

##  Comment ajouter les images

### 1. Préparer vos images
- **Format** : JPG ou PNG
- **Taille** : Optimisée pour le web (max 1-2 Mo par image)
- **Résolution** : 1200-1920px de largeur recommandée
- **Nommage** : Utilisez exactement les noms listés ci-dessus

### 2. Placer les images
Copiez vos images dans le dossier :
```
public/images/docs/
```

### 3. Ajouter dans les fichiers MDX
Une fois les images ajoutées, vous pouvez les référencer dans les fichiers MDX :

**Exemple** :
```markdown
![Page d'accueil E-Campus France](/images/docs/ecampusfrance-accueil.jpg)
```

## 📍 Emplacements dans les fichiers MDX

Quand vous ajouterez les images, voici où les placer dans les fichiers :

- **etape-1-creation-compte.mdx** :
  - Après "Rendez-vous sur le site officiel : **www.ecampusfrance.org**"
  - Dans la section "Remplir le formulaire"

- **etape-2-recherche-formations.mdx** :
  - Après "Vous accéderez à l'outil de recherche"

- **etape-3-documents-academiques.mdx** :
  - Dans la section "Exemples de documents"

- **etape-4-documents-administratifs.mdx** :
  - Dans "Format requis" des photos d'identité

- **etape-6-soumission.mdx** :
  - Dans "Soumettre le dossier"

- **etape-7-entretien.mdx** :
  - Dans "Préparation à l'entretien"

- **etape-8-apres-admission.mdx** :
  - Dans "Notification d'admission" (lettre)
  - Dans "Processus de demande de visa"
  - Dans "Types de logement disponibles" (3 images)

## ⚠️ Important : Confidentialité

Pour les images contenant des informations personnelles :
- **Diplômes** : Masquez le nom, prénom, date de naissance, numéro d'étudiant
- **Relevés de notes** : Masquez le nom, prénom, notes personnelles
- **Lettres d'admission** : Masquez le nom, prénom, informations personnelles
- **Photos d'identité** : Utilisez une photo d'exemple générique, pas une vraie photo

---

**Total** : **0 images valides** / **13 images nécessaires** = **13 images à ajouter**
