<template>
    <filters />
    <countries />
</template>

<script>
import countries from "/src/components/countries/countries.vue";
import filters from "/src/components/countries/filter.vue";

export default  {
    components: {
        countries,
        filters,
    },
};
</script>