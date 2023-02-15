<template>
    <h1>Countries</h1>
    <!-- {{ data }} -->
    {{ loadData.map( r => r.region) }}
</template>

<script>
import requests from './requests';
export default ({
    data() {
        return {
            data: [],
            firtsIndex: 0,
            lastIndex: 0,
            sliceData: []
        };
    },
    methods: {
        async getAllCountries() {
            const response = await fetch(requests.getAllCountries);
            this.data = await response.json();
            this.total = this.data.length
        },
        async getByRegion() {
            const response = await feth(requests.getByRegion(this.$store.state.currentRegion));
            this.data = await response.json();
            this.total = this.data.length
        },
    },
    computed: {
        loadData() {
            if (this.$store.state.currentRegion == "All") {
             this.getAllCountries()
             this.lastIndex = this.$store.state.currentPage * 10;
             this.firtsIndex = this.lastIndex - 10;
             this.sliceData = this.data.slice(this.firtsIndex, this.lastIndex)
            } else {
             this.getByRegion()
             this.lastIndex = this.$store.state.currentPage * 10;
             this.firtsIndex = this.lastIndex - 10;
             this.sliceData = this.data.slice(this.firtsIndex, this.lastIndex)
            }
            return this.sliceData
        },
        total: {
            get() {
                return this.$store.state.total
            },
            set(value) {
                this.$store.commit("SET_TOTAL", value)
            }
        }
    }
});
</script>
