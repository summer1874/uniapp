<template>
  <view class="receiving-content">
    我是收货页面
    <button type="primary" @click="navigationToDetails">详情</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      navigationToDetails() {
        uni.navigateTo({
          url: '/pages/receiving/details/index'
        })
      }
    }
  }
</script>

<style>
</style>
