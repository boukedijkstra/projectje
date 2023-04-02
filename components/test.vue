<template>
    <div class="blok">
        <img src="https://cdn.knmi.nl/knmi/map/general/weather-map.gif" class="sneekermeer" />
    </div>
    <div class="blok">
        <img src="https://weerstation.kws-sneek.nl/daywindlarge.png" class="sneekermeer" />
    </div>
    <div class="blok">
        <iframe width="100%" height="390" src="https://embed.windy.com/embed2.html?lat=53.037&lon=5.757&detailLat=53.096&detailLon=5.836&width=375&height=400&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=kt&metricTemp=%C2%B0C&radarRange=-1" frameborder="0"></iframe>
    </div>
    <div class="blok container">
        <div v-html="knmi" />
    </div>
</template>

<script setup lang="ts">

const knmi = await $fetch('/api/knmi');

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