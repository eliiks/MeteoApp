import weatherCodeDict from './weatherCodeDict.js';

export default class Forecast{
    constructor(){
        this.cityName = ""
        this.date = ""
        this.weatherName = ""
        this.weatherIcon = ""
        this.temperature = 0
    }

    SetData(cityName, forecastData) {
        this.cityName = cityName

        let dateTime = new Date(forecastData.datetime);
        this.date = dateTime.toLocaleString("fr-FR",  {day:"numeric", weekday: "long", month: "long", year:"numeric"});
        this.date = this.date.charAt(0).toUpperCase() + this.date.slice(1); //Upper the first letter

        this.weatherName = weatherCodeDict[forecastData.weather].name
        this.weatherIcon = weatherCodeDict[forecastData.weather].icon_class

        this.temperature = forecastData.tmax;
    }
}