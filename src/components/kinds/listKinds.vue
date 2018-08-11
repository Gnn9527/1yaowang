<template>
    <div class="kind">
        <midHeader></midHeader>
        <kindsPage></kindsPage>
        <navLists></navLists>
    </div>    
</template>

<script>
import midHeader from '../commons/seek.vue'
import kindsPage from './kindsPage/kindsPage.vue'
import navLists from '../commons/footer.vue'

export default {
    name:'kind',
    components:{
        midHeader,
        kindsPage,
        navLists
    }
}
</script>

<style lang="scss" scoped>
    .kind{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
