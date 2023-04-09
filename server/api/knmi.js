export default defineEventHandler(async (event) => {
    try {
        const response = await $fetch('https://www.knmi.nl/nederland-nu/weer/verwachtingen')
        const tekst = response.split('<h2>Vandaag')[1]
        const tekst2 = tekst.split('(Bron: KNMI')[0];
        const tekst3 = `<h2>Vandaag${tekst2}</p>`
        return tekst3
    } catch(e) {
        console.log('ERRORRR',e);
    }
})