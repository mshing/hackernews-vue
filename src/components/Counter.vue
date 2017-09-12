<template>
  <div class="container">
    <div class="notification">
      <h1 class="title" align="center">
        {{ count }}
      </h1>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" v-on:click="addCounter()">Add</button>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" v-on:click="subtractCounter()">Remove</button>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    count: 'getCount'
  }),
  methods: {
    ...mapActions([
      'incrementCount',
      'decrementCount'
    ]),
    addCounter () {
      this.incrementCount({amount: 20})
    },
    subtractCounter () {
      this.decrementCount({amount: 20})
    }
  }
}
</script>
