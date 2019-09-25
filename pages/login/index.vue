<template>
  <view class="login-contenr" >
    <input class="login-input" type="text" value="" placeholder="账号" />
    <input class="login-input" type="password" value="" placeholder="密码" />
    <button class="login-button" type="primary"  :loading="true" hover-class="none" disabled>登录</button>
  </view>
</template>

<script> 
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
 @import '~@/style/photoSite';
 
  .login-contenr { 
    box-sizing: border-box;
    width: 100%;
    background-image: url($loginBackground);
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    padding: 200px 20px 0px 20px;
    .login-input {
      border-radius: 45px;
      height: 45px;
      box-shadow: 0 0 8px 2px #bdb1b1;
      margin-bottom: 16px;
      padding: 0px 20px;
    }
    .login-button{
        width: 100%;
    }
  }
</style>
 