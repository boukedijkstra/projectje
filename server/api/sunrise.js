export default defineEventHandler(async (event) => {
    try {
        const url = 'https://api.sunrise-sunset.org/json?lat=53.020502303423&lng=5.7852261972654&formatted=0'
        const response = await $fetch(url)
        const set = new Date(response.results.sunset);
        const rise = new Date(response.results.sunrise);
        const sunset = `${set.getHours()}:${set.getMinutes()}`;
        const sunrise = `${rise.getHours()}:${rise.getMinutes()}`;
        return {sunset, sunrise}
    } catch (e) {
        console.log('Error wetterskip', e);
    }
})