<template>
    <div class="container">
        <div class="blok knmi">
            <img src="https://cdn.knmi.nl/knmi/map/general/weather-map.gif" />
        </div>
        <div class="blok sneekermeer">
            <img src="https://www.windfinder.com/wind-cgi/stationsgif.pl?STATIONSNR=nl451&UNIT_WIND=kts&UNIT_TEMPERATURE=c" border="0" />
        </div>
        <div class="blok" id="windfinder"></div>
        <div class="blok">
            <iframe width="100%" height="390" src="https://embed.windy.com/embed2.html?lat=53.037&lon=5.757&detailLat=53.096&detailLon=5.836&width=375&height=400&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=kt&metricTemp=%C2%B0C&radarRange=-1" frameborder="0"></iframe>
        </div>
        <div class="blok">
            <h2>Watertemperatuur Terherne</h2>
            <h2>{{ wetterskip }}°C</h2>
        </div>
        <div class="blok knmi-text">
            <div v-html="knmi" />
        </div>
    </div>
</template>

<script setup lang="ts">
const knmi = await $fetch('/api/knmi');
const wetterskip = await $fetch('/api/wetterskip');

onMounted(() => {
    const windfinder = document.createElement('script')
    windfinder.setAttribute('src', 'https://www.windfinder.com/widget/forecast/js/snitser_mar?unit_wave=m&unit_rain=mm&unit_temperature=c&unit_wind=kts&unit_pressure=hPa&days=4&show_day=1&show_waves=0')
    const el = document.getElementById('windfinder')
    el?.appendChild(windfinder);
})
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.blok {
    margin: 0 5px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: black 1px solid;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

#windfinder {
    height: 400px;
}
.knmi {
    padding: unset;
    img {
        width: 100%;
        border-radius: 10px;
    }
}

.knmi-text {
    padding: 10px 10px;
}
.sneekermeer {
    img {
        width: 100%;
    }
}
.buienradar {
    display: flex;
    justify-content: center;
}
</style>