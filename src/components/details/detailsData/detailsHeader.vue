<template>
  <div class="detailsHeader">
    <span @click="$router.push('listKinds')">
      <icon name="angle-left"></icon>
    </span>
    <router-link to="detailsSearch">
      <span>
        <icon name="search"></icon>
      </span>
    </router-link>
    <icon name="shopping-cart"></icon>
  </div>
</template>

<script>
export default {
  name: 'detailsHeader',
  props: []
}
</script>

<style lang="scss" scoped>
.detailsHeader {
  z-index: 500;
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.42rem;
  padding: 0 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f6f6f6;
  svg {
    width: 0.2rem;
    height: 0.2rem;
    color: #505050;
  }
  > svg:nth-of-type(1) {
    width: 0.25rem;
    height: 0.25rem;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 0.1rem;
    width: 75%;
    height: 0.3rem;
    border-radius: 0.2rem;
    background: #eaeafa;
    svg {
      width: 0.16rem;
      height: 0.16rem;
    }
    span {
    }
  }
}
</style>
