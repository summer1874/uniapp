<script>
  export default {
    onLaunch: function() {

      console.log('App Launch')
    },
    onShow: function() {
      console.log('App Show:', this)
      const token = uni.getStorageSync('token')
      if (!token) {
        uni.navigateTo({
          url: '/pages/login/index'
        })
      }
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style lang="scss">
  
  @import '~@/style/photoSite';
  @import '~@/style/iconfont';
  /*每个页面公共css */
  /*  性能过差 */
  /* :not(not){
    box-sizing: border-box;
    font-size: 14px;
  } */
  view, input, button {
    font-size: 14px;
  }
  button {
    background: #3cc51f !important;
  }
</style>
