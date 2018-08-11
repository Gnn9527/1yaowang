<template>
    <div class="quick">
        <div class="top_title">
          <span @click="$router.replace('/login')">
            <icon name="angle-left"></icon>
          </span>
            <h1>快速登录</h1>
        </div>
        <div class="login-page">
            <div class="phone">
                <input type="text" v-model="phone" @focus = "regPhone">
                <span class="times" v-if="isPhone" @click="deletes"><icon name="times"></icon></span>
                <span class="circle" v-if="isOk"><icon name="check-circle"></icon></span>
            </div>
            <div>
                <input type="text" v-model="imgReg" placeholder="图片验证码">
                <img :src="('data:image/jpg;base64,' + this.imgsrc)" class="reg-img">
                <span class="change" @click="changeOne">换一张</span>
            </div>
                <div>
            <input type="text"  v-model="msg" placeholder="获取验证码">
            <span class="reg-msg" 
            :class="{'active' : regMsg}"
            @click="getReg"> 获取验证码</span>
        </div>
        <p class="reg_error">{{regError}}</p>
        <div class="login_btn">
          <span :class="{'login_active' : login}" @click="loginBtn">登录</span>
        </div>
        </div>
    </div>
</template>

<script>
import http from "../../../lib/httpclient";
import md5 from "js-md5";
export default {
  data() {
    return {
      phone: this.$route.query.phone,
      isPhone: false,
      isOk: true,
      imgsrc: "",
      imgReg: "",
      regMsg: false,
      identity: "",
      msg: "",
      login: false,
      regError: "",
    };
  },
  watch: {
    imgReg: {
      handler(val) {
        if (val.length > 0 && val.length < 5) {
          this.regMsg = true;
        } else if (val > 5) {
          this.regMsg = false;
        }
      }
    }
  },
  methods: {
    regPhone() {
      if (!this.phone) {
        this.isPhone = false;
      } else {
        this.isPhone = true;
        this.isOk = true;
      }
    },
    deletes() {
      this.isPhone = false;
      this.phone = "";
      this.isOk = false;
    },
    changeOne() {
      this.imgReg = "";
      http
        .get(
          "xpassport/getPicCode?token=&demandcartkey=d8d1e905a747283026c31578bd82d411&cartkey=d8d1e905a747283026c31578bd82d411&provinceid=20&province=20&provincename=%E5%B9%BF%E4%B8%9C&tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533566680873&signature=****&siteid=9"
        )
        .then(res => {
          this.imgsrc = res.data.imgsrc;
          this.identity = res.data.identity;
          // console.log(res)
        });
    },
    getReg() {
      if (this.regMsg) {
        console.log(666);
        http
          .post(
            "xpassport/sendSmsV1?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533604354939&signature=****&siteid=9",
            {
              mobile: this.phone,
              code: this.imgReg,
              identity: this.identity,
              type: 0
            }
          )
          .then(res => {
            console.log(res);
            if (res.rtn_code == 0 && res.rtn_ftype == 0) {
              this.regError = "";
            } else if (res.rtn_ftype == "") {
              this.regError = res.rtn_msg;
            }
          });
      }
    },
    loginBtn() {
      if (this.login && this.regError == "") {
        http
          .post(
            "xpassport/regist?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533610489923&signature=****&siteid=9",
            {
              mobile: this.phone,
              smscode: this.msg
            }
          )
          .then(res => {
            console.log(666, res);
            if (res.rtn_msg != "") {
              this.regError = res.rtn_msg;
            } else {
              this.regError = "";
              this.$router.push({
                name: "setPassword"
              });
            }
          });
      } else {
        console.log(888);
      }
    }
  },
  created() {
    http
      .get(
        "xpassport/getPicCode?token=&demandcartkey=d8d1e905a747283026c31578bd82d411&cartkey=d8d1e905a747283026c31578bd82d411&provinceid=20&province=20&provincename=%E5%B9%BF%E4%B8%9C&tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1533566680873&signature=****&siteid=9"
      )
      .then(res => {
        this.imgsrc = res.data.imgsrc;
        this.identity = res.data.identity;
        // console.log(res)
      });
  },
  updated() {
    if (this.imgReg.length > 0 && this.msg.length > 0) {
      this.login = true;
    } else {
      this.login = false;
    }
  }
};
</script>


<style lang="scss" scoped>
.quick {
  .active {
    color: #f66 !important;
  }
  .login_active {
    background: #f66 !important;
    color: #fff !important;
  }
  p {
    color: #f66;
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
  .login-page {
    padding: 0.4rem 0;
    div {
      width: 80%;
      height: 0.7rem;
      margin: 0 auto;
      position: relative;
      display: flex;
      align-items: center;
      // background: red;
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
    input {
      width: 100%;
      height: 0.5rem;
      border-bottom: 1px solid #ccc;
      font-size: 0.16rem;
      color: #333;
    }
    .phone {
      position: relative;
    }
    .reg-img {
      width: 0.9rem;
      position: absolute;
      top: 50%;
      right: 0.6rem;
      transform: translateY(-50%);
    }
    .change {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0.1rem;
    }
    .reg-msg {
      display: flex;
      width: 0.8rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      color: #bbb;
    }
    .login_btn {
      margin: 0.2rem auto;
      width: 80%;
      height: 0.5rem;
      span {
        width: 100%;
        height: 100%;
        background: #eee;
        color: #bcbcbc;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.16rem;
      }
    }
  }
}
</style>
