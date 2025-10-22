#!/bin/bash

# Script de déploiement Vercel
# Pour exécuter : bash DEPLOY-NOW.sh

echo "🚀 Déploiement du simulateur sur Vercel..."
echo ""

# Correction des permissions npm (si nécessaire)
echo "📦 Vérification des permissions npm..."
sudo chown -R 501:20 "/Users/keziah/.npm" 2>/dev/null

# Build du projet
echo "🔨 Build du projet..."
npm run build

# Déploiement sur Vercel
echo "☁️  Déploiement sur Vercel..."
npx vercel --prod

echo ""
echo "✅ Déploiement terminé !"
echo "📋 Copiez l'URL fournie par Vercel pour l'intégrer dans WordPress"

