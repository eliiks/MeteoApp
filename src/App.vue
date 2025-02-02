<script setup>
  import { ref, onMounted} from 'vue';

  import SearchTownMeteo from '@/assets/utils/meteoApiService';
  import Footer from "@/components/Footer.vue";
  import DayForecastCard from '@/components/ForecastCard.vue';
  import TodayForecastCard from './components/TodayForecastCard.vue';

  const input = ref("")
  const cityName = ref("")
  const todayForecast = ref({})
  const twoWeeksForecast = ref([])
  const searchEnd = ref(false);


  const handleSubmit = async () => {
    let data = await SearchTownMeteo(input.value);
    cityName.value = data.cityName;
    todayForecast.value = data.todayForecast;
    twoWeeksForecast.value = data.twoWeeksForecasts;
    searchEnd.value = true;
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
              <img src="./assets/search.png" class="w-7 md:w-8"></img>
          </button>
      </form>

      <!-- Result -->
      <div v-show="searchEnd" class="mt-6 flex flex-col justify-center gap-16 items-center">
        <TodayForecastCard :cityName="cityName" :forecast="todayForecast"/>

        <div class="flex flex-col justify-center items-center gap-8">
          <h3 class="text-xl md:text-2xl font-bold text-center"> Prévisions météo des 8 prochains jours sur {{ cityName }} </h3>
          <div class="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <DayForecastCard v-for="day in twoWeeksForecast" :key="day.day" :forecast="day" />
          </div>
        </div>
      </div>
    </div>
  </main>

  <Footer class="mt-16"></Footer>

</template>