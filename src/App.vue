<script setup>
  import { ref, watch, onMounted } from 'vue';
  import weatherDict from './assets/weather_dict.js';
  import Footer from "@/components/Footer.vue";

  const API_token = ref("")
  const townInput = ref("")
  const townINSEECode = ref("")
  const townName = ref("")
  const townTodayWeatherCode = ref("")
  const townTodayWeatherName = ref("")
  const townTodayWeatherIcon = ref("")
  const townTodayWeatherTemperature = ref("")
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
        townName.value = citiesData.cities[0].name;
        
        //Searching for city's weather forecast of today
        const forecastResponse = await fetch("https://api.meteo-concept.com/api/forecast/daily/0?token="+API_token.value+"&insee=" + townINSEECode.value);
        const forecastData = await forecastResponse.json();
        townTodayWeatherCode.value = forecastData.forecast.weather;
        townTodayWeatherTemperature.value = forecastData.forecast.tmax;
        townTodayWeatherName.value = weatherDict[townTodayWeatherCode.value].name;
        townTodayWeatherIcon.value = weatherDict[townTodayWeatherCode.value].icon_class;
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
        <h1 class="text-5xl md:text-6xl font-bold"> METEOAPP </h1>
        
        <!-- Form -->
        <form class="flex items-center justify-center mt-5" @submit.prevent="SearchTownMeteo">
            <input type="text" v-model="townInput" placeholder="Rechercher une ville" class="bg-white rounded-full pl-3 pr-10 pt-2 pb-2 text-lg md:text-xl"/>
            <button type="submit" class="rounded-full ml-1 md:ml-3 p-2" style="background-color: #EAD637;"> 
                <img src="./assets/search.png" class="w-7 md:w-8"></img>
            </button>
        </form>

        <!-- Result -->
        <div v-show="searchEnd" class="mt-10 flex flex-col gap-3 justify-center items-center">
          <div class="flex items-center">
            <p class="pr-3 text-5xl md:text-6xl"> {{ townTodayWeatherTemperature }}°C</p>
            <i :class="`wi ${townTodayWeatherIcon} pr-3 text-5xl md:text-6xl`"></i>
          </div>
          <p class="mt-1 text-xl md:text-2xl ml-4 mr-4"> Prévision aujourd'hui à {{ townName }} : {{ townTodayWeatherName }} </p>
        </div>

      </div>
    </div>
  </main>

  <Footer />

</template>