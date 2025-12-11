const fs = require('fs');
const path = require('path');

// Créer des fichiers image placeholder réels (1x1 pixel PNG converti en JPG conceptuel)
// Pour l'instant, créons des fichiers SVG qui seront utilisés comme placeholders

const imagesDir = path.join(__dirname, '..', 'public', 'images', 'docs');

// Liste des images manquantes
const images = [
  { name: 'exemple-photo-identite.jpg', title: 'Photo d\'identité', subtitle: 'Format 35x45mm' },
  { name: 'formulaire-inscription-ecampus.jpg', title: 'Formulaire d\'inscription', subtitle: 'E-Campus France' },
  { name: 'recherche-formations-ecampus.jpg', title: 'Recherche de formations', subtitle: 'E-Campus France' },
  { name: 'soumission-dossier-ecampus.jpg', title: 'Soumission du dossier', subtitle: 'E-Campus France' },
  { name: 'lettre-admission-exemple.jpg', title: 'Lettre d\'admission', subtitle: 'Exemple' },
];

// Créer un fichier image placeholder minimal (data URI base64 d'une image 1x1 transparente)
// En réalité, on va créer un fichier SVG qui sera servi comme image
images.forEach(({ name, title, subtitle }) => {
  const filePath = path.join(imagesDir, name);
  
  // Créer un SVG simple qui servira de placeholder
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#f9fafb" stroke="#e5e7eb" stroke-width="2"/>
  <text x="400" y="280" font-family="Arial, sans-serif" font-size="28" fill="#374151" text-anchor="middle" font-weight="600">${title}</text>
  <text x="400" y="320" font-family="Arial, sans-serif" font-size="18" fill="#6b7280" text-anchor="middle">${subtitle}</text>
  <text x="400" y="360" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af" text-anchor="middle">Placeholder - À remplacer</text>
</svg>`;

  // Écrire le SVG
  const svgPath = filePath.replace('.jpg', '.svg');
  if (!fs.existsSync(svgPath)) {
    fs.writeFileSync(svgPath, svgContent);
  }
  
  // Pour le .jpg, créer un fichier minimal (sera remplacé par l'utilisateur)
  // On crée un fichier texte qui indique que c'est un placeholder
  if (!fs.existsSync(filePath) || fs.statSync(filePath).size === 0) {
    // Créer un fichier SVG renommé en .jpg (temporaire, à remplacer)
    fs.writeFileSync(filePath, svgContent);
    console.log(`✓ Created placeholder: ${name}`);
  }
});

console.log('\n✅ Tous les placeholders ont été créés!');
console.log('⚠️  Remplacez ces fichiers par de vraies images quand vous les aurez.');

