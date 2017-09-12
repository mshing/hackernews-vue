<template>
  <div class="pager">
    <a :class="page === 1 ? 'disabled' : ''" v-on:click="clickAction" data-page="prev">&lt; prev</a>
    <span>{{page}}/{{pageCount}}</span>
    <a :class="page === pageCount ? 'disabled' : ''" v-on:click="clickAction" data-page="next">more &gt;</a>
  </div>
</template>
<script>

export default {
  name: 'NewsPager',
  props: ['page', 'itemCount', 'itemsPerPage', 'clickAction'],
  computed: {
    pageCount: function () {
      return this.itemCount > 0 ? Math.ceil(this.itemCount / this.itemsPerPage) : 1
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
