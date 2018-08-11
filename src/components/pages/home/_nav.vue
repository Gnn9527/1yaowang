<template>
  <div>
    <div class="homeNav pb10">
      <div class="disF fw-w">
        <a href="javascript:;" v-for="(item, i) in data" :key="i" class="mtop10">
          <div><img :src="item.adPic" :alt="item.adTitle"></div>
          <p>{{ item.adTitle }}</p>
        </a>
      </div>
    </div>
    <div class="activity_model mb10">
      <div>
        <a href="javascript:;"><img :src="homeNavSrc.adPic" alt=""></a>
      </div>
    </div>
    <div class="news_model">
      <div class="news_model_box">
        <div class="news_model_text">
          <a href="javascript:;">{{ homeNewsModel[0].title }}</a>
        </div>
      </div>
    </div>
    <div>
      <div class="video_model">
        <a href="javascript:;">
          <img v-lazy="'https://p3.maiyaole.com/img/mobile/20186/1532921126550123.jpg'">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeNav',
  props: ['data', 'homeNavSrc', 'homeNewsModel'],
  created() {},
  mounted() {},
  updata() {}
}
</script>

<style lang="scss">
.homeNav {
  width: 100%;
  background: #fff;
  height: 1.7rem;
  div {
    font-size: 0.2rem;
    a {
      width: 20%;
      // height: 50%;
      img {
        width: 0.44rem;
        // heighr: 44rem;
      }
    }
  }
}
.activity_model {
  div {
    img {
      width: 100%;
      height: 1.065rem;
    }
  }
}
.news_model {
  background: url('../../../assets/yaowang_news.png') no-repeat 0.64rem #fff;
  background-position: left;
  background-size: 0.64rem auto;
  height: 0.64rem;
  padding: 0.08rem 0.15rem 0.08rem 0.88rem;
  .news_model_box {
    .news_model_text {
      a {
        display: block;
        text-align: left;
        text-indent: 0.1rem;
        line-height: 0.53rem;
        padding-left: 0.24rem;
      }
      a:nth-of-type(1) {
        background: url('../../../assets/icon_notice.png') no-repeat 0;
        background-size: 18px auto;
      }
      a:nth-of-type(2) {
        background: url('../../../assets/icon_news.png') no-repeat 0;
        background-size: 18px auto;
      }
    }
  }
}
.video_model {
  margin: 0.1rem 0;
  a {
    img {
      width: 100%;
      height: 1.2rem;
    }
  }
}
</style>
