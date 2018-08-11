<template>
    <div class="mid-header">
        <div class="map">
            <div class="logo"></div>
            <div class="place">广东</div>
        </div>
        <div class="search">
            <a href="javascript:"><icon name="search"></icon>输入商品名称</a>
        </div>
        <div class="advisory">
            <icon name="envelope"></icon>
            <span>咨询药师</span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.mid-header {
  width: 100%;
  box-sizing: border-box;
  height: 0.38rem;
  padding: 0 0.08rem;
  display: flex;
  display: -webkit-box;
  justify-content: space-between;
  align-items: center;
  background: #333;
  color: #fff;
  .map {
    display: flex;
    .logo {
      width: 0.42rem;
      height: 0.38rem;
      background: url("https://s.maiyaole.com/images/wap/img/favicon.ico")
        no-repeat center center;
      background-size: cover;
    }
    .place {
      display: flex;
      align-items: center;
      margin-left: 0.05rem;
      font-size: 0.16rem;
    }
  }
  .search {
    width: 1.88rem;
    height: 0.24rem;
    text-align: left;
    border-radius: 10px;
    background: hsla(0, 0%, 100%, 0.9);
    color: #898989;
    padding-left: 0.08rem;
    line-height: 0.24rem;
    display: flex;
    align-items: center;
    a {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      svg {
        width: 0.16rem;
        height: 0.16rem;
      }
    }
  }
  .advisory {
    display: flex;
    align-items: center;
    span {
      display: flex;
      margin-left: 5px;
    }
  }
}
</style>
