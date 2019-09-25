<template>
  <view class="content">
    <view class="">
      
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
        tableData: [{}]
      }
    },
    onLoad(options) {
      setTimeout(() => {
        console.log('start pulldown');
      }, 1000);
      uni.startPullDownRefresh();
    },
    onPullDownRefresh() {
      console.log('refresh');
      setTimeout(function() {
        uni.stopPullDownRefresh();
      }, 1000);
    },
    methods: {
      handleTest() {
        console.log(this.$_language)
        uni.setNavigationBarTitle({
          title: '新的标题'
        })
        uni.navigateTo({
          url: '/pages/receiving/index'
        })
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
