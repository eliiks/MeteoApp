<script setup>
  import { ref, watch, onMounted } from 'vue';
  import weatherString from './assets/weather_code';
  import token from "../token";

  const townInput = ref("")
  const townINSEECode = ref("")
  const townTodayWeatherCode = ref("")
  const townTodayWeatherString = ref("")
  const searchEnd = ref(false);

  watch(townInput, () => {
    searchEnd.value = false;
  })

  const SearchTownMeteo = async () => {
    if(townInput.value.trim() !== ""){
      try{
        //Searching for INSEE code of the searched town
        const citiesResponse = await fetch("https://api.meteo-concept.com/api/location/cities?token="+token+"&search=" + townInput.value);
        const citiesData = await citiesResponse.json();
        townINSEECode.value = citiesData.cities[0].insee;
        
        //Searching for city's weather forecast of today
        const forecastResponse = await fetch("https://api.meteo-concept.com/api/forecast/daily/0?token="+token+"&insee=" + townINSEECode.value);
        const forecastData = await forecastResponse.json();
        townTodayWeatherCode.value = forecastData.forecast.weather;
        townTodayWeatherString.value = weatherString[townTodayWeatherCode.value];
        searchEnd.value = true;
      }catch(error){
        console.error("Error" + error);
      }
    };
  }
</script>

<template>
  <div class="menu">
    <h1> METEOAPP </h1>
    <div class="menu-search">
      <form @submit.prevent="SearchTownMeteo">
        <label for="townInput">Search a city</label> 
        <input type="text" id="townInput" name="townInput" v-model="townInput"/>
        <button type="submit"> Submit </button>
      </form>
    </div>
    <div>
      <p v-if="searchEnd"> Météo à {{ townInput }} : {{ townTodayWeatherString }} </p>
    </div>
  </div>
</template>

<style scoped>
  .menu{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
