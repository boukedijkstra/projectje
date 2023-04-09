export default defineEventHandler(async (event) => {
        const now = new Date().toJSON();
        const before = new Date();
        before.setHours(before.getHours() - 1);
        const be = before.toJSON();
        try {
            const url = `https://gis.wetterskipfryslan.nl/portal/esb/opvragenMeetwaarden/1?filterId=watertemperatuur&startTime=${be}&endTime=${now}`;
            const response = await $fetch(url)
            const tekst = response.split('Terherne')[1];
            const tekst2 = tekst.split('</meetWaarde>')[0]
            const tekst3 = tekst2.split('<meetWaarde>')[1]
            return tekst3
        } catch (e) {
            console.log('Error wetterskip', e);
            return '?'
        }
})