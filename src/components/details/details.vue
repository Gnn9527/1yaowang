<template>
    <div class="detail">
        <detailsHeader></detailsHeader>
        <detailsList></detailsList>
    </div>
</template>

<script>
import detailsHeader from './detailsData/detailsHeader.vue'
import detailsList from './detailsData/detailsList.vue'
export default {
    name:'detail',
    components:{
        detailsHeader,
        detailsList
    },
    mounted(){
    }
}
</script>

<style lang="scss" scoped>

</style>
