<template>
  <view class="login-contenr" >
    <input type="text" value="" placeholder="账号" />
    <input type="password" value="" placeholder="密码" />
    <button type="primary">登录</button>
  </view>
</template>

<script> 
export default {
  data() {
    return {
      // uni-app除H5外，css无法加载本地图片
      loginPhoto: '/static/images/home.png'
    }
  }
}
</script>

<style lang="scss">
 @import '~@/style/photoSite';
 
  .login-contenr { 
    width: 100%;
    background-image: url($loginBackground);
    background-size: 100%;
    background-repeat: no-repeat;
    padding-top: 240px;
  }
</style>
 