export default defineEventHandler(async (event) => {
    try {
        const response = await $fetch('https://www.knmi.nl/nederland-nu/weer/verwachtingen')
        const tekst = response.split('<strong>Vanavond</strong>')[1]
        const tekst2 = tekst.split('<p>(Bron: KNMI)')[0];
        return `<p><strong>Vanavond</strong> ${tekst2}`
    } catch(e) {
        console.log('ERRORRR',e);
    }
})