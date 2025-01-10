var weatherDict = {
    "0": {"name" : "Soleil", "icon_class" : "wi-day-sunny"},
    "1": {"name" : "Peu nuageux", "icon_class" : "wi-day-cloudy"},
    "2": {"name" : "Ciel voilé", "icon_class" : "wi-day-cloudy"},
    "3": {"name" : "Nuageux", "icon_class" : "wi-day-cloudy"},
    "4": {"name" : "Très nuageux", "icon_class" : "wi-cloudy"},
    "5": {"name" : "Couvert", "icon_class": "wi-day-sunny-overcast"},
    "6": {"name" : "Brouillard", "icon_class":"wi-day-fog"},
    "7": {"name":"Brouillard givrant", "icon_class":"wi-day-fog"},
    
    "10": {"name":"Pluie faible", "icon_class":"wi-day-rain"},
    "11": {"name":"Pluie modérée", "icon_class":"wi-day-rain"},
    "12": {"name":"Pluie forte", "icon_class":"wi-day-rain"},
    "13": {"name":"Pluie faible verglaçante", "icon_class":"wi-rain"},
    "14":{"name":"Pluie modérée verglaçante", "icon_class":"wi-rain"},
    "15": {"name":"Pluie forte verglaçante", "icon_class":"wi-rain"},
    "16": {"name":"Bruine", "icon_class":"wi-day-sprinkle"},
    
    "20": {"name":"Neige faible", "icon_class":"wi-day-snow"},
    "21": {"name":"Neige modérée", "icon_class":"wi-day-snow"},
    "22":{"name":"Neige forte", "icon_class":"wi-day-snow"},
    
    "30":{"name":"Pluie et neige mêlées faibles", "icon_class":"wi-day-sleet"},
    "31": {"name":"Pluie et neige mêlées modérées", "icon_class":"wi-day-sleet"},
    "32": {"name":"Pluie et neige mêlées fortes", "icon_class":"wi-day-sleet"},

    "40": { "name": "Averses de pluie locales et faibles", "icon_class": "wi-day-rain" },
    "41": { "name": "Averses de pluie locales", "icon_class": "wi-day-rain" },
    "42": { "name": "Averses locales et fortes", "icon_class": "wi-day-rain" },
    "43": { "name": "Averses de pluie faibles", "icon_class": "wi-day-rain" },
    "44": { "name": "Averses de pluie", "icon_class": "wi-day-rain" },
    "45": { "name": "Averses de pluie fortes", "icon_class": "wi-day-rain" },
    "46": { "name": "Averses de pluie faibles et fréquentes", "icon_class": "wi-day-rain" },
    "47": { "name": "Averses de pluie fréquentes", "icon_class": "wi-day-rain" },
    "48": { "name": "Averses de pluie fortes et fréquentes", "icon_class": "wi-day-rain" },

    "60": { "name": "Averses de neige localisées et faibles", "icon_class": "wi-day-snow" },
    "61": { "name": "Averses de neige localisées", "icon_class": "wi-day-snow" },
    "62": { "name": "Averses de neige localisées et fortes", "icon_class": "wi-day-snow" },
    "63": { "name": "Averses de neige faibles", "icon_class": "wi-day-snow" },
    "64": { "name": "Averses de neige", "icon_class": "wi-day-snow" },
    "65": { "name": "Averses de neige fortes", "icon_class": "wi-day-snow" },
    "66": { "name": "Averses de neige faibles et fréquentes", "icon_class": "wi-day-snow" },
    "67": { "name": "Averses de neige fréquentes", "icon_class": "wi-day-snow" },
    "68": { "name": "Averses de neige fortes et fréquentes", "icon_class": "wi-day-snow" },

    "70": { "name": "Averses de pluie et neige mêlées localisées et faibles", "icon_class": "wi-day-sleet" },
    "71": { "name": "Averses de pluie et neige mêlées localisées", "icon_class": "wi-day-sleet" },
    "72": { "name": "Averses de pluie et neige mêlées localisées et fortes", "icon_class": "wi-day-sleet" },
    "73": { "name": "Averses de pluie et neige mêlées faibles", "icon_class": "wi-day-sleet" },
    "74": { "name": "Averses de pluie et neige mêlées", "icon_class": "wi-day-sleet" },
    "75": { "name": "Averses de pluie et neige mêlées fortes", "icon_class": "wi-day-sleet" },
    "76": { "name": "Averses de pluie et neige mêlées faibles et nombreuses", "icon_class": "wi-day-sleet" },
    "77": { "name": "Averses de pluie et neige mêlées fréquentes", "icon_class": "wi-day-sleet" },
    "78": { "name": "Averses de pluie et neige mêlées fortes et fréquentes", "icon_class": "wi-day-sleet" },

    "100": { "name": "Orages faibles et locaux", "icon_class": "wi-day-lightning" },
    "101": { "name": "Orages locaux", "icon_class": "wi-day-lightning" },
    "102": { "name": "Orages fort et locaux", "icon_class": "wi-lightning" },
    "103": { "name": "Orages faibles", "icon_class": "wi-day-lightning" },
    "104": { "name": "Orages", "icon_class": "wi-day-lightning" },
    "105": { "name": "Orages forts", "icon_class": "wi-lightning" },
    "106": { "name": "Orages faibles et fréquents", "icon_class": "wi-day-lightning" },
    "107": { "name": "Orages fréquents", "icon_class": "wi-day-lightning" },
    "108": { "name": "Orages forts et fréquents", "icon_class": "wi-lightning" },
    
    "120": { "name": "Orages faibles et locaux de neige ou grésil", "icon_class": "wi-day-snow-thunderstorm" },
    "121": { "name": "Orages locaux de neige ou grésil", "icon_class": "wi-day-snow-thunderstorm" },
    "122": { "name": "Orages locaux de neige ou grésil", "icon_class": "wi-day-snow-thunderstorm" },
    "123": { "name": "Orages faibles de neige ou grésil", "icon_class": "wi-day-snow-thunderstorm" },
    "124": { "name": "Orages de neige ou grésil", "icon_class": "wi-day-snow-thunderstorm" },
    "125": { "name": "Orages de neige ou grésil", "icon_class": "wi-day-snow-thunderstorm" },
    "126": { "name": "Orages faibles et fréquents de neige ou grésil", "icon_class": "wi-day-snow-thunderstorm" },
    "127": { "name": "Orages fréquents de neige ou grésil", "icon_class": "wi-day-snow-thunderstorm" },
    "128": { "name": "Orages fréquents de neige ou grésil", "icon_class": "wi-day-snow-thunderstorm" },

    "130": { "name": "Orages faibles et locaux de pluie et neige mêlées ou grésil", "icon_class": "wi-day-sleet-storm" },
    "131": { "name": "Orages locaux de pluie et neige mêlées ou grésil", "icon_class": "wi-day-sleet-storm" },
    "132": { "name": "Orages fort et locaux de pluie et neige mêlées ou grésil", "icon_class": "wi-day-sleet-storm" },
    "133": { "name": "Orages faibles de pluie et neige mêlées ou grésil", "icon_class": "wi-day-sleet-storm" },
    "134": { "name": "Orages de pluie et neige mêlées ou grésil", "icon_class": "wi-day-sleet-storm" },
    "135": { "name": "Orages forts de pluie et neige mêlées ou grésil", "icon_class": "wi-day-sleet-storm" },
    "136": { "name": "Orages faibles et fréquents de pluie et neige mêlées ou grésil", "icon_class": "wi-day-sleet-storm" },
    "137": { "name": "Orages fréquents de pluie et neige mêlées ou grésil", "icon_class": "wi-day-sleet-storm" },
    "138": { "name": "Orages forts et fréquents de pluie et neige mêlées ou grésil", "icon_class": "wi-day-sleet-storm" },
    
    "140": {"name":"Pluies orageuses", "icon_class":"wi-day-thunderstorm"},
    "141": {"name":"Pluie et neige mêlées à caractère orageux", "icon_class":"wi-day-sleet-storm"},
    "142": {"name":"Neige à caractère orageux","icon_class":"wi-day-snow-thunderstorm"},

    "210": {"name":"Pluie faible intermittente","icon_class":"wi-day-rain"},
    "211": {"name":"Pluie modérée intermittente","icon_class":"wi-day-rain"},
    "212": {"name":"Pluie forte intermittente","icon_class":"wi-day-rain"},

    "220": {"name":"Neige faible intermittente","icon_class":"wi-day-snow"},
    "221": {"name":"Neige modérée intermittente","icon_class":"wi-day-snow"},
    "222": {"name":"Neige forte intermittente","icon_class":"wi-day-snow"},

    "230": {"name":"Pluie et neige mêlées","icon_class":"wi-day-sleet"},
    "231": {"name":"Pluie et neige mêlées","icon_class":"wi-day-sleet"},
    "232": {"name":"Pluie et neige mêlées","icon_class":"wi-day-sleet"},

    "235": {"name":"Averses de grêle", "icon_class":"wi-day-hail"}
}

export default weatherDict