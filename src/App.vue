<script setup>
  import { ref, watch, onMounted } from 'vue';
  import weatherString from './assets/weather_code';

  const API_token = ref("")
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
        const citiesResponse = await fetch("https://api.meteo-concept.com/api/location/cities?token="+API_token.value+"&search=" + townInput.value);
        const citiesData = await citiesResponse.json();
        townINSEECode.value = citiesData.cities[0].insee;
        
        //Searching for city's weather forecast of today
        const forecastResponse = await fetch("https://api.meteo-concept.com/api/forecast/daily/0?token="+API_token.value+"&insee=" + townINSEECode.value);
        const forecastData = await forecastResponse.json();
        townTodayWeatherCode.value = forecastData.forecast.weather;
        townTodayWeatherString.value = weatherString[townTodayWeatherCode.value];
        searchEnd.value = true;
      }catch(error){
        console.error("Error" + error);
      }
    };
  }

  onMounted(async () => {
    const res = await fetch("../token.txt")
    API_token.value = await res.text()
  })
</script>

<template>
  <main class="bg-teal-400">
    <div class="flex flex-col justify-center items-center h-screen">
      <div class="m-auto text-center">
        <h1 class="text-6xl font-bold mt-5 mb-5"> METEOAPP </h1>
        <form class="flex flex-row items-center justify-center" @submit.prevent="SearchTownMeteo">
            <label for="townInput" class="mr-4 text-2xl">Search a city</label> 
            <input type="text" id="townInput" name="townInput" v-model="townInput" class="bg-white pl-3 pr-10 pt-2 pb-2 rounded-full text-xl"/>
            <button type="submit" class="ml-3 bg-blue-400 rounded-full p-2"> 
                <img src="./assets/search.png" width="30px"></img>
            </button>
        </form>
        <p v-show="searchEnd" class="mt-5 text-2xl"> Météo à {{ townInput }} : {{ townTodayWeatherString }} </p>
      </div>
    </div>
  </main>
</template>