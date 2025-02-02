<script setup>
  import { ref } from 'vue';

  import SearchCityMeteo from '@/assets/utils/meteoApiService';
  import Footer from "@/components/Footer.vue";
  import NextDaysForecasts from '@/components/NextDaysForecasts.vue';
  import TodayForecastCard from '@/components/TodayForecastCard.vue';

  const input = ref("")
  const cityName = ref("")
  const todayForecast = ref({})
  const nextDaysForecasts = ref([])
  const searchEnd = ref(false);
  const searchError = ref(false);

  const handleSubmit = async () => {
    try{
      let data = await SearchCityMeteo(input.value);
      cityName.value = data.cityName;
      todayForecast.value = data.todayForecast;
      nextDaysForecasts.value = data.nextDaysForecasts;
      
      searchError.value = false;
      searchEnd.value = true;
    }catch(error){
      searchError.value = true;
    }
  }

</script>

<template>
  <main class="min-h-screen pl-[10%] pr-[10%]">
    <div class="mt-16 flex flex-col justify-center items-center">
      <h1 class="text-5xl md:text-6xl font-bold"> METEOAPP </h1>
        
      <!-- Form -->
      <form class="flex items-center justify-center mt-5" @submit.prevent="handleSubmit">
          <input type="text" v-model="input" placeholder="Rechercher une ville" class="bg-white rounded-full pl-3 pr-10 pt-2 pb-2 text-lg md:text-xl"/>
          <button type="submit" class="rounded-full ml-1 md:ml-3 p-2" style="background-color: #EAD637;"> 
              <img src="./assets/imgs/search.png" class="w-7 md:w-8"></img>
          </button>
      </form>

      <!-- Result -->
      <div v-if="searchEnd && !searchError" class="mt-6 flex flex-col justify-center gap-16 items-center">
        <TodayForecastCard :cityName="cityName" :forecast="todayForecast"/>

        <NextDaysForecasts :cityName="cityName" :nextDaysForecasts="nextDaysForecasts" />
      </div>

      <!-- Error -->
      <div v-else-if="searchError" class="mt-12">
        <p class="text-xl md:text-2xl font-bold text-center"> La ville saisie n'existe pas, veuillez réessayer. </p>
      </div>
    </div>
  </main>

  <Footer class="mt-16"></Footer>

</template>