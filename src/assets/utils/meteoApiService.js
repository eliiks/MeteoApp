import weatherCodeDict from './weatherCodeDict.js';

const HandleForecastData = (forecastData) => {
    let dateTime = new Date(forecastData.datetime);
    let date = dateTime.toLocaleString("default",  {day:"numeric", weekday: "long", month: "long", year:"numeric"});
    date = date.charAt(0).toUpperCase() + date.slice(1); //Upper the first letter

    return {
        date : date,
        weatherName : weatherCodeDict[forecastData.weather].name,
        weatherIcon : weatherCodeDict[forecastData.weather].icon_class,
        temperature : forecastData.tmax
    }
}

const SearchTownMeteo = async (input) => {
    let API_token = import.meta.env.VITE_WEATHER_API
    if(input.trim() !== ""){
        try{
            //Searching for INSEE code of the searched town
            const citiesResponse = await fetch("https://api.meteo-concept.com/api/location/cities?token="+API_token+"&search=" + input);
            const citiesData = await citiesResponse.json();
            const townINSEECode = citiesData.cities[0].insee;
            const cityName = citiesData.cities[0].name;
            
            //Searching for city's 14 next days weather forecast
            const forecastResponse = await fetch("https://api.meteo-concept.com/api/forecast/daily?token="+API_token+"&insee=" + townINSEECode);
            const forecastData = await forecastResponse.json();
            
            // Today city's weather
            const todayForecast = HandleForecastData(forecastData.forecast[0]);

            // 14 next days weather of the city
            const twoWeeksForecasts = [];
            forecastData.forecast.slice(1,9).forEach(dayForecast => {
                twoWeeksForecasts.push(HandleForecastData(dayForecast))
            })

            console

            return {
                cityName : cityName,
                todayForecast : todayForecast,
                twoWeeksForecasts : twoWeeksForecasts
            }
        }catch(error){
            console.error("Error on fetching API : " + error);
            return {
                cityName : "",
                todayForecast : {},
                twoWeeksForecasts : []
            }
        }
    }
}

export default SearchTownMeteo;