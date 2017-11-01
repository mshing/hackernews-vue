<template>
  <div class="pager">
    <a class="pager__element" :class="page === 1 ? 'pager__element--disabled' : ''" v-on:click="clickAction" data-page="prev">&lt; prev</a>
    <span class="pager__element">{{page}}/{{pageCount}}</span>
    <a class="pager__element" :class="page === pageCount ? 'pager__element--disabled' : ''" v-on:click="clickAction" data-page="next">more &gt;</a>
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

<style>
</style>
