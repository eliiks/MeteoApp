<script setup>
    import Forecast from "@/assets/utils/Forecast.js"

    defineProps({
        cityName : {
            type: String,
            default: ""
        },
        forecast : {
            type: Object,
            default : new Forecast()
        }
    })
</script>

<template>
    <div class="mt-6 flex flex-col items-center">
        <h3 class="text-xl md:text-2xl font-bold text-center"> Prévision météo du {{ forecast.date }} à {{ cityName }} </h3>
        <div class="mt-6 flex items-center">
        <p class="text-5xl pl-3 pr-3 md:text-6xl"> {{ forecast.temperature }}°C</p>
        <i :class="`wi ${forecast.weatherIcon} text-5xl pt-1 pl-3 pr-3 md:text-6xl`"></i>
        </div>
        <p class="mt-2 text-xl md:text-2xl"> {{ forecast.weatherName }} </p>
    </div>
</template>