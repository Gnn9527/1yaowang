<template>
    <div class="users" >
        <login_reg></login_reg>
        <ft></ft>
    </div> 
</template>

<script>
import login_reg from "./minePages/login_reg.vue";
import ft from "../commons/footer.vue";
export default {
  components: {
    login_reg,
    ft
  }
};
</script>

<style lang="scss" scoped>
    .users{
        .mid-footer{
            position: fixed;
            bottom: 0;
            left: 0;
            border-top: 1px solid #d1d1d1;
        }
    }
</style>

