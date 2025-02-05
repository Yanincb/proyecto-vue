import { defineStore } from "pinia";
import {ref} from 'vue';

export const useWeatherStore = defineStore('weather', () => {
    const temperatura = ref(0);
    const setTemperatura = (temp) => {
    }
    return {temperatura, setTemperatura };
});