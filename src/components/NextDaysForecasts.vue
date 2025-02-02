<script setup>
    import ForecastMiniCard from "@/components/ForecastMiniCard.vue"

    defineProps({
        cityName : {
            type:String,
            default:""
        },

        nextDaysForecasts : {
            type: Object,
            default:[]
        }
    })
</script>

<template>
    <div class="flex flex-col justify-center items-center gap-8">
        <p class="text-xl md:text-2xl font-bold text-center"> Prévisions météo des 8 prochains jours sur {{ cityName }} </p>
        <div class="grid auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ForecastMiniCard v-for="forecast in nextDaysForecasts" :key="forecast.day" :forecast="forecast" />
        </div>
    </div>
</template>