<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";



const btnClicker = ref(null);
const weatherData = ref([]);
const forecasts = ref([]);


const selectedCity = ref("Lagos");
const cities = ref(["Abia", "Abuja", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"]);

function fetchWeatherData(city) {
    axios
        .get(`https://goweather.herokuapp.com/weather/${city}`)
        .then((response) => {
            weatherData.value = response.data
            console.log(response.data)
            forecasts.value = response.data.forecast
        })
        .catch((error) => console.error(error))
}

onMounted(() => {
    fetchWeatherData(selectedCity.value);
})


// Watch for changes in the selected city and fetch new weather data
watch(selectedCity, (newCity) => {
    fetchWeatherData(newCity);
});


// Modal Function
const forecast = ref([]);

function modal(day) {
    console.log(day)
    const forecastDay = forecasts.value.find(x => x.day === day);
    forecast.value = forecastDay;
    btnClicker.value.click()
}
</script>

<template>
    <div class="bg-info-subtle">
        <div class="container">
            <div class="min-vh-100 row justify-content-center align-items-center">
                <div class="row justify-content-center">
                    <div class="col-lg-8">


                        <div class="text-center mb-4">
                            <!-- Dropdown for selecting city -->
                            <select v-model="selectedCity" class="form-select form-select-lg mb-3">
                                <option v-for="city in cities" :key="city" :value="city">
                                    {{ city }}
                                </option>
                            </select>
                        </div>

                        <div class="card" style="min-height: 300px;">
                            <div class="card-header">
                                <h4 class="float-start fw-bold">
                                    Weather Info for {{ selectedCity }}
                                </h4>
                                <div class="float-end" v-for="x in [...forecasts].reverse()" :key="x.day">
                                    <a class="me-3" @click="modal(x.day)">Day {{ x.day }}</a>
                                </div>
                            </div>

                            <div class="card-body d-flex flex-column justify-content-around">
                                <p><span class="fw-bold">Temperature:</span> {{ weatherData.temperature }} </p>
                                <p><span class="fw-bold">Wind:</span> {{ weatherData.wind }} </p>
                                <p><span class="fw-bold">Description:</span> {{ weatherData.description }}</p><br>
                                <p class="fw-bold">Check forecast for other cities in the dropdown above</p>
                            </div>
                        </div>


                    </div>
                </div>
                <!-- Modal trigger button -->
                <button ref="btnClicker" type="button" class="btn btn-primary btn-lg d-none" data-bs-toggle="modal"
                    data-bs-target="#modalId">
                    Launch
                </button>

                <!-- Modal Body -->
                <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
                <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
                    role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalTitleId">
                                    Forecast for day {{ forecast.day }}
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div>
                                <div class="modal-body">
                                    <p><span class="fw-bold"> Temparature:</span> {{ forecast.temperature }} </p>
                                    <p><span class="fw-bold"> Wind:</span> {{ forecast.wind }} </p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>
