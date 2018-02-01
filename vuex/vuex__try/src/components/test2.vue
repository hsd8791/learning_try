<template>
  
</template>

<script>
import { mapGetters ,mapState,mapActions,mapMutation} from 'vuex'
export default {
  components: {},
  data() {
    return {
    }
  },
  methods:{
    ...mapActions([
      // 'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
      // `mapActions` 也支持载荷：
      // 'incrementBy' ,// 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
      // add: 'increment', // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    ]),
    ...mapMutations([
      // 'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      // `mapMutations` 也支持载荷：
      // 'incrementBy', // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
      // add: 'increment', // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    ]),
  },
  events: {},
  computed:{
    ...mapGetters([
      // 映射 `this.doneCount` 为 `store.getters.doneTodosCount`
      // doneCount: 'doneTodosCount'
      // 'getter'
      //..
      ]),
    ...mapState([
      // a:s=>s.a,
      // b:'b',
      // count:state=>state.count,
      // 'count1',//should be best but can't work
      // count2:'count2',//best?
      // msg_(state){
      //   return state.count3+this.msg
      // }
      ]),
  },
}
</script>

<style lang='scss' scoped>

</style>
