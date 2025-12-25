# Configuration Google AdSense

Ce guide explique comment configurer Google AdSense sur le site GEFD Project.

## Prérequis

1. Avoir un compte Google AdSense approuvé
2. Obtenir votre Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`)

## Configuration

### 1. Variables d'environnement

Créez un fichier `.env.local` à la racine du projet et ajoutez :

```env
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX
```

Remplacez `ca-pub-XXXXXXXXXXXXXXXX` par votre Publisher ID réel.

### 2. Vérification

Le script AdSense est automatiquement chargé dans `src/app/layout.tsx` si la variable d'environnement est définie.

## Utilisation

### Composants disponibles

Le projet inclut plusieurs composants AdSense prêts à l'emploi :

#### AdSenseBanner
Pour les annonces horizontales (bannières) :

```tsx
import { AdSenseBanner } from '@/components/AdSense';

export default function MyPage() {
  return (
    <div>
      <h1>Mon contenu</h1>
      <AdSenseBanner />
      <p>Plus de contenu...</p>
    </div>
  );
}
```

#### AdSenseSidebar
Pour les annonces verticales (sidebar) :

```tsx
import { AdSenseSidebar } from '@/components/AdSense';

export default function MyPage() {
  return (
    <div>
      <aside>
        <AdSenseSidebar />
      </aside>
    </div>
  );
}
```

#### AdSenseInline
Pour les annonces rectangulaires dans le contenu :

```tsx
import { AdSenseInline } from '@/components/AdSense';

export default function MyPage() {
  return (
    <div>
      <p>Premier paragraphe</p>
      <AdSenseInline />
      <p>Deuxième paragraphe</p>
    </div>
  );
}
```

#### AdSense (composant de base)
Pour une utilisation personnalisée :

```tsx
import { AdSense } from '@/components/AdSense';

export default function MyPage() {
  return (
    <AdSense
      adSlot="1234567890"
      adFormat="rectangle"
      fullWidthResponsive={true}
    />
  );
}
```

## Emplacements recommandés

### Pages de documentation
- En haut de la page (bannière)
- Entre les sections de contenu (inline)
- Dans la sidebar (si disponible)

### Pages statiques
- En bas de la page (bannière)
- Entre les sections principales (inline)

## Politique AdSense

Assurez-vous de respecter les [politiques AdSense](https://support.google.com/adsense/answer/48182) :

- Ne pas cliquer sur vos propres annonces
- Ne pas encourager les visiteurs à cliquer
- Respecter les limites d'annonces par page
- Avoir un contenu de qualité et original

## Dépannage

### Les annonces ne s'affichent pas

1. Vérifiez que `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` est correctement défini
2. Vérifiez la console du navigateur pour les erreurs
3. Assurez-vous que votre site est approuvé par AdSense
4. Vérifiez que vous n'avez pas de bloqueur de publicité activé

### Erreurs dans la console

Si vous voyez des erreurs AdSense :
- Vérifiez que le Publisher ID est au bon format
- Assurez-vous que le site est en production (AdSense peut ne pas fonctionner en développement local)
- Vérifiez les restrictions géographiques dans votre compte AdSense

## Notes importantes

- Les annonces peuvent prendre quelques heures à apparaître après l'approbation
- AdSense peut ne pas afficher d'annonces si le trafic est trop faible
- Respectez les limites d'annonces par page (généralement 3 annonces display par page)

