<template>
    <div class="login">
        <div class="top_title">
          <span @click="$router.replace('/mine')">
            <icon name="angle-left"></icon>            
          </span>
            <h1>快速登录</h1>
        </div>
        <div class="login-one">
            <input type="text" v-model="phone" placeholder="手机号"/>
            <span class="next" :class="{'active' : isShow}" @click="next">下一步</span>
        </div>
       
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      phone: "",
      isShow: false
    };
  },
  watch: {
    phone() {
      let reg = /^1[3|4|5|7|8][0-9]{9}$/;
      if (reg.test(this.phone)) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  },
  methods: {
    next() {
      if (this.isShow) {
        this.$router.push({
            name:'hasLogin',
            query:{
                phone:this.phone
            }
        })
      } else {
        return false;
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.login {
  .top_title {
    height: 0.5rem;
    position: relative;
    background: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.16rem;
    border-bottom: 1px solid #ccc;
    span {
      position: absolute;
      top: 50%;
      left: 0.2rem;
      transform: translateY(-50%);
      width: 0.18rem;
      height: 0.18rem;
    }
  }
  input {
    border-bottom: 1px solid #ccc;
    height: 0.5rem;
    width: 80%;
    margin-top: 0.5rem;
    padding-left: 0.1rem;
  }
  .next {
    width: 80%;
    height: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.16rem;
    background: #eee;
    color: #bcbcbc;
    margin: 0.2rem auto;
  }
  .active {
    background: #f66;
    color: #fff;
  }
}
</style>
