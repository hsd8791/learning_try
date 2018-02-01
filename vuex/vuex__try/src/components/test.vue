<template>
  <div>
    <input type="text" v-model='test'>
    <select>
      <option value ="volvo">Volvo</option>
      <option value ="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        test:'',
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  },
  methods:{},
  events: {},
  components: {}
}
</script>

<style>

</style>
