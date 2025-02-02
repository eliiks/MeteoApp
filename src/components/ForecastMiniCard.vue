<script setup>
    const props = defineProps({
        forecast : {
            type: Object,
            default: {
              date: "Lundi 1 janvier 2025",
              weatherName: "Soleil",
              weatherIcon: "wi-day-sunny",
              temperature: 0,
            }
        },
    })
</script>

<template>
    <div class="flex-1 flex-shrink-0 flex flex-col bg-white shadow-xl rounded-xl p-3">
        <div class="text-base font-bold">{{ forecast.date }}</div>
        <div class="mt-2 h-[80%] text-xl mb-8">{{ forecast.weatherName }}</div>
        <div class="flex items-center justify-between">
            <div class="text-xl">{{ forecast.temperature }}°C</div>
            <i :class="`wi ${forecast.weatherIcon} text-2xl pt-1`"></i>
        </div>
    </div>
</template>