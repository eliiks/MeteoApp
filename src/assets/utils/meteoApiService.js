
import Forecast from './Forecast.js';

const SearchCityMeteo = async (input) => {
    let API_token = import.meta.env.VITE_WEATHER_API
    
    if(input.trim() !== ""){
        try{
            //Searching for INSEE code of the searched City
            const citiesResponse = await fetch("https://api.meteo-concept.com/api/location/cities?token="+API_token+"&search=" + input);
            const citiesData = await citiesResponse.json();

            if(citiesData.cities.length > 0){
                const cityINSEECode = citiesData.cities[0].insee;
                const cityName = citiesData.cities[0].name;
                
                //Searching for city's 14 next days weather forecast
                const forecastResponse = await fetch("https://api.meteo-concept.com/api/forecast/daily?token="+API_token+"&insee=" + cityINSEECode);
                const forecastsData = await forecastResponse.json();

                // Today city's weather
                const todayForecast = new Forecast()
                todayForecast.SetData(cityName, forecastsData.forecast[0])
    
                // 14 next days weather of the city
                const nextDaysForecasts = [];
                forecastsData.forecast.slice(1,9).forEach(dayForecast => {
                    let f = new Forecast();
                    f.SetData(cityName, dayForecast);
                    nextDaysForecasts.push(f);
                })
    
                return {
                    cityName : cityName,
                    todayForecast : todayForecast,
                    nextDaysForecasts : nextDaysForecasts
                }
            }else{
                throw new Error("Ville non trouvée");
            }
        }catch(error){
            console.error(error);
        }
    }
}

export default SearchCityMeteo;