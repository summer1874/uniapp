<template>
  <view
    :class="'icon-' + type"
    :style="{ color: color, 'font-size': size + 'px' }"
    class="uni-icon"
    @click="_onClick"
  />
</template>

<script>
export default {
  name: 'WmsIcons',
  props: {
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#333333'
    },
    size: {
      type: [Number, String],
      default: 16
    }
  },
  methods: {
    _onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>
@font-face {
	font-family: wmsicons;
	font-weight: normal;
	font-style: normal;
	src: url('https://at.alicdn.com/t/font_1436058_fqkpifs2ib.ttf?t=1569566747938') format('truetype');
}
.uni-icon-wrapper {
	line-height: 1;
}
.uni-icon {
	font-family: wmsicons;
	font-weight: normal;
	font-style: normal;
	line-height: 1;
	display: inline-block;
	text-decoration: none;
	-webkit-font-smoothing: antialiased;
}

.icon-language1:before {
  content: "\e60b";
}

</style>