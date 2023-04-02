<template>
    <div class="blok">
        <img src="https://cdn.knmi.nl/knmi/map/general/weather-map.gif" class="sneekermeer" />
    </div>
    <div class="blok">
        <img src="https://www.windfinder.com/wind-cgi/stationsgif.pl?STATIONSNR=nl451&UNIT_WIND=kts&UNIT_TEMPERATURE=c" class="sneekermeer" border="0" />
    </div>
    <div class="blok" id="windfinder"></div>
    <div class="blok">
        <iframe width="100%" height="390" src="https://embed.windy.com/embed2.html?lat=53.037&lon=5.757&detailLat=53.096&detailLon=5.836&width=375&height=400&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=kt&metricTemp=%C2%B0C&radarRange=-1" frameborder="0"></iframe>
    </div>
    <div class="blok container">
        <div v-html="knmi" />
    </div>
</template>

<script setup lang="ts">

const knmi = await $fetch('/api/knmi');

onMounted(() => {
    const windfinder = document.createElement('script')
    windfinder.setAttribute('src', 'https://www.windfinder.com/widget/forecast/js/snitser_mar?unit_wave=m&unit_rain=mm&unit_temperature=c&unit_wind=kts&unit_pressure=hPa&days=4&show_day=1&show_waves=0')
    const el = document.getElementById('windfinder')
    el?.appendChild(windfinder);
})
</script>

<style lang="scss" scoped>
.blok {
    margin-bottom: 20px;
}
.container {
    margin: 0 10px;   
}
.buienradar {
    display: flex;
    justify-content: center;
}
.sneekermeer {
    width: 100%;
}
</style>