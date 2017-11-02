<template>
  <transition-group name="fade" tag="div">
    <img v-show="currentSrc === loResSrc" :src="loResSrc" key="lo-res"/>
    <img v-show="currentSrc === hiResSrc" :src="hiResSrc" key="hi-res"/>
  </transition-group>
</template>


<script>
  export default {
    props: [
      'hiResSrc',
      'loResSrc'
    ],
    data: function () {
      return {
        currentSrc: null // setting the attribute to null to display the placeholder
      }
    },
    mounted: function () {
      var loResImg, hiResImg, that
      loResImg = new Image()
      hiResImg = new Image()
      that = this

      loResImg.onload = function () {
        that.currentSrc = that.loResSrc // setting the attribute to loResSrc to display the lo-res image
      }
      hiResImg.onload = function () {
        that.currentSrc = that.hiResSrc // setting the attribute to hiResSrc to display the hi-res image
      }

      loResImg.src = that.loResSrc // loading the lo-res image
      hiResImg.src = that.hiResSrc // loading the hi-res image
    }
  }
</script>