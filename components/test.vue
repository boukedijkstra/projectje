<template>
    <div>
        <iframe width="100%" height="400" src="https://embed.windy.com/embed2.html?lat=53.037&lon=5.757&detailLat=53.096&detailLon=5.836&width=375&height=400&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=kt&metricTemp=%C2%B0C&radarRange=-1" frameborder="0"></iframe>
    </div>
    <div class="container">
        <div v-html="test" />
    </div>
</template>

<script setup lang="ts">

const test = await $fetch('/api/knmi');

</script>

<style lang="scss" scoped>
.container {
    margin: 0 10px;   
}
</style>