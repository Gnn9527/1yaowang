<template>
  <div>
    <div>
      <buyCartTopMod></buyCartTopMod>
    </div>
    <div>
      <buyCartMain></buyCartMain>
    </div>
    <div>
      <buyCartBottom></buyCartBottom>
    </div>
  </div>
</template>

<script>
import buyCartTopMod from './_buyCartTopMod.vue'
import buyCartMain from './_buyCartMain.vue'
import buyCartBottom from './_buyCartBottom.vue'
export default {
  name: 'buyCart',
  components: {
    buyCartTopMod,
    buyCartMain,
    buyCartBottom
  }
}
</script>

<style lang="scss" scoped>
</style>
