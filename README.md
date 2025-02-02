# MeteoApp

## Informations
[MeteoApp](https://eliiks.github.io/MeteoApp/) est une simple application de prévisions météo pour une ville spécifique.  
Elle affiche les conditions météorologiques et les températures prévues pour la journée en cours ainsi que les huit jours suivants.

## Détails techniques
Le site a été réalisé en JavaScript avec le framework Vue.js.  
Les données météorologiques sont collectées depuis l'API de [Météo Concept](https://api.meteo-concept.com/) grâce à l'API Fetch.

Chaque type de temps (soleil, pluie, neige, etc.) est associé à un code, répertorié dans le fichier [weatherCodeDict.js](https://github.com/eliiks/MeteoApp/blob/main/src/assets/utils/weatherCodeDict.js).  
Un pictogramme est également attribué à chaque type de temps, fourni par [Weather Icons](https://erikflowers.github.io/weather-icons/).

## Crédits
Données météorologiques fournies par [Météo Concept](https://api.meteo-concept.com/)  
Pictogrammes fournis par [Weather Icons](https://erikflowers.github.io/weather-icons/)