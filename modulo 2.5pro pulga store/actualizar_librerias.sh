#!/usr/bin/env bash
# Script para automatizar la descarga/actualización de jQuery y Fancybox en el proyecto Pulga Store
# Descarga las versiones minificadas oficiales y las coloca en las carpetas correspondientes

set -e

# Crear carpetas si no existen
mkdir -p js css

# Descargar jQuery 3.7.1 minificado
echo "Descargando jQuery 3.7.1..."
curl -L -o js/jquery.min.js https://code.jquery.com/jquery-3.7.1.min.js

# Descargar Fancybox 3.5.7 JS minificado
echo "Descargando Fancybox 3.5.7 JS..."
curl -L -o js/jquery.fancybox.min.js https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js

# Descargar Fancybox 3.5.7 CSS minificado
echo "Descargando Fancybox 3.5.7 CSS..."
curl -L -o css/jquery.fancybox.min.css https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css

echo "¡Librerías actualizadas correctamente!"
