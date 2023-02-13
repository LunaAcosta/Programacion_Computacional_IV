<script>
import requests from "./requests";
export default {
    data() {
        return {
            data: [],
        };
    },
    methods: {
        async getAllCountries() {
            const response = await fetch (requests.getAllCountries);
            this.data = await response.json();
        },
        async getByRegion (){
            const response = await feth (requests.getByRegion ("All"));
            this.data = await response.json();
        },
    },
    created() {
        this.getAllCountries(), this.getByRegion;
    },
};
</script>
<template>
    <h1>Countries</h1>
    <!-- {{ data }} -->
    {{ data.map((d)=> d.region) }}
</template>