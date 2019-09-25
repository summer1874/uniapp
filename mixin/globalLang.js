export default {
  methods: {
    $f(key) {
      return this.$t(key)
    }
  },
  onLoad() {
    const route = this.$mp.page.route.split('/')
    // 获取page title 对应的下标 
    const pageTitle = route[route.length - 2]
    uni.setNavigationBarTitle({
      title: this.$f(`${pageTitle}.title`)
    })
  }
}