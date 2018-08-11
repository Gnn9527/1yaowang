<template>
    <div class="setPassword">
        <div class="top_title">
            <span @click="$router.replace('/hasLogin')">
            <icon name="angle-left"></icon>
            </span>
            <h1>设置密码</h1>
        </div>
        <p>为了您的账号安全请设置登录密码</p>
        <div class="psd">
            <div class="setOne">
                <input type="text" v-model="psd" @focus="deletes" placeholder="请输入密码">
                 <span class="times" v-if="isok.err"  
                 @click="psd = '';isok.ok = false;isok.err = false"><icon name="times"></icon></span>
                <span class="circle" v-if="isok.ok"><icon name="check-circle"></icon></span>
            </div>
            <div class="setAgain">
                <input type="text" v-model="psdAgain" @focus="deletes2" placeholder="请再次输入密码">
                <span class="times" v-if="isAgainOk.err" 
                @click="psdAgain = '';isAgainOk.ok = false;isAgainOk.err = false"><icon name="times"></icon></span>
                <span class="circle" v-if="isAgainOk.ok"><icon name="check-circle"></icon></span>
            </div>
            <p class="reg">6-20位字符，含字母、数字和符号两种以上组合</p>
            <div class="ok-btn" :class="{'active' : login}" @click="logins">
                <span>确认</span>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      psd: "",
      psdAgain: "",
      isok: {
        ok: false,
        err: false
      },
      isAgainOk: {
        ok: false,
        err: false
      },
      login: false
    };
  },
  methods: {
    deletes() {
      if (this.psd) {
        this.isok.err = true;
      }
    },
    deletes2() {
      if (this.psdAgain) {
        this.isAgainOk.err = true;
      }
    },
    logins() {
      if (this.login) {
        Toast("还没接口！")
        this.$router.push({
            name:'index'
        })
      }
    }
  },
  watch: {
    psd: {
      handler(val) {
        let reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
        if (reg.test(this.psd)) {
          this.isok.ok = true;
        } else {
          this.login = false;
          console.log(555);
        }
        if (reg.test(this.psd) && this.psd == this.psdAgain) {
          this.login = true;
          this.isAgainOk.ok = true;
        } else {
          this.login = false;
        }
      }
    },
    psdAgain: {
      handler(val) {
        let reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
        if (reg.test(this.psd) && this.psd == this.psdAgain) {
          this.login = true;
          this.isAgainOk.ok = true;
        } else {
          this.login = false;
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.setPassword {
  .active {
    background: #f66 !important;
    color: #fff !important;
  }
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
  p {
    font-size: 0.16rem;
    margin-top: 0.5rem;
  }
  .setOne,
  .setAgain {
    height: 0.5rem;
    display: flex;
    //   justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0.2rem auto 0;
    border-bottom: 1px solid #ddd;
    position: relative;
  }
  .times {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
  }
  .circle {
    position: absolute;
    top: 50%;
    right: 0.1rem;
    transform: translateY(-50%);
    svg {
      color: #58bc58;
    }
  }
  .reg {
    color: #ccc;
    margin-top: 0.3rem;
  }
  .ok-btn {
    width: 80%;
    height: 0.5rem;
    color: #bcbcbc;
    background: #eee;
    margin: 0.2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
