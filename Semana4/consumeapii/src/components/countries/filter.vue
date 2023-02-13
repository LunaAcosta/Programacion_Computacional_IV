<script>
export default {
    data() {
        return {
            allRegions: [
                "All",
                "Europe",
                "Asia",
                "Africa",
                "Americas",
                "Oceania",
                "Antarctic",
            ], 
        };
    },
};
</script>

<template>
    <h3> Filtros Por Region</h3>
    <div v-for="region in allRegions" :key="region.id">
        <input type="radio" name="selectRegion" :value="region" />
        {{ region }}
    </div>
</template>