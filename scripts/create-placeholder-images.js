const fs = require('fs');
const path = require('path');

// Liste des images manquantes à créer
const images = [
  'exemple-photo-identite.jpg',
  'formulaire-inscription-ecampus.jpg',
  'recherche-formations-ecampus.jpg',
  'soumission-dossier-ecampus.jpg',
  'lettre-admission-exemple.jpg',
];

const imagesDir = path.join(__dirname, '..', 'public', 'images', 'docs');

// Créer un fichier SVG minimaliste comme placeholder
const createPlaceholderSVG = (name) => {
  const svgContent = `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#f3f4f6"/>
  <text x="50%" y="45%" font-family="Arial, sans-serif" font-size="24" fill="#6b7280" text-anchor="middle" dy=".3em">${name.replace('.jpg', '').replace(/-/g, ' ')}</text>
  <text x="50%" y="55%" font-family="Arial, sans-serif" font-size="16" fill="#9ca3af" text-anchor="middle" dy=".3em">Image placeholder</text>
</svg>`;
  return svgContent;
};

// Créer les fichiers placeholder
images.forEach(imageName => {
  const filePath = path.join(imagesDir, imageName);
  if (!fs.existsSync(filePath)) {
    // Créer un fichier SVG comme placeholder temporaire
    const svgPath = filePath.replace('.jpg', '.svg');
    const svgContent = createPlaceholderSVG(imageName);
    fs.writeFileSync(svgPath, svgContent);
    console.log(`Created placeholder: ${imageName.replace('.jpg', '.svg')}`);
    
    // Créer aussi un fichier .jpg vide (sera remplacé plus tard)
    fs.writeFileSync(filePath, '');
    console.log(`Created placeholder file: ${imageName}`);
  }
});

console.log('Placeholder images created!');

