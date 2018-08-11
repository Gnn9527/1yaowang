<template>
  <div class="user">
    <div class="user_top">
      <!-- <div class="photo"><img src="http://www.free-icons-download.net/images/user-icon-27998.png"></div>  -->
      <div class="loginUserIcon">
        <icon name="user"></icon>
      </div>
      <div class="login" @click="$router.push('/login')">
        <span>登录</span> &nbsp;/&nbsp;
        <span>注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: 2rem;
  background: #ff6d55;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .user_top {
    .login {
      color: #fff;
      font-size: 0.2rem;

      span {
      }
    }
    .loginUserIcon {
      svg {
        width: 50px;
        height: 50px;
        color: #fff;
      }
    }
  }
}
</style>

