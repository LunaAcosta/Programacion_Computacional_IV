<template>
    <Paginate :page-count="pageCounter" v-model="currentPage" :page-range="3" :margin-pages="2" />
</template>

<script>
// npm install vuejs-paginate-next --save en la terminal para importar las dependencias de paginate 
// npm install bootstrap 
import Paginate from 'vuejs-paginate-next'
export default ({
    data() {
        return {
            pageCount: 0
        }
    },
    components: {
        Paginate
    },
    computed: {
        pageCounter() {
            this.pageCount = Math.ceil(this.$store.state.total/10);
            if (this.$store.state.currentPage > this.pageCount) {
                this.$store.state.currentPage = 1
            }
            return this.pageCount
        },
        currentPage: {
            get() {
                return this.$store.state.currentPage
            },
            set(value) {
                this.$store.commit("SET_CURRENTPAGE", value)
            }
        }
    }
})
</script>

<style lang="css">
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

.pagination {}

.page-item {}
</style>