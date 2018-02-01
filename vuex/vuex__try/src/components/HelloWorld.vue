<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msg2}}</h1>
    <h1>{{ msg_ }}</h1>
    <p>{{count}}</p>
    <!-- <p>{{count1}}</p> -->
    <p>{{count2}}</p>
    -------
    <p>{{test}}</p>
    <p>{{testLength}}</p>
    <p>{{doneTodos}}</p>
    <button @click='handleClick'>test</button>
    <button @click='handleClick2'>test2</button>
    -------
    <p>a:{{a}}</p>
    <p>b:{{b}}</p>
    <p>a+b:{{sum}}</p>
    <!-- <p>{{square}}</p> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
// import store from './../store.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    handleClick(){
      this.$store.commit('increment')
      this.aIncrement()
    },
    handleClick2(){
      this.bIncrement({step:2})
    },
    ...mapMutations({
      add: 'increment', 
      addBy: 'incrementBy',
      increment:'increment', 
      aIncrement:'aIncrement',
      bIncrement:'bIncrement',
    })
  },
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  computed:
  // mapState({
  //       count:state=>state.count,
  //       'count1',
  //       count2:'count2',
  //       msg_(state){
  //         return state.count3+this.msg
  //       }
  //     })

  {
    // square(){
    //   return this.$store.state.getters.square
    // },
    msg2(){
      return 'msgmsg'
    },
    test(){
       return this.$store.getters.doneTodos
    },
    testLength(){
      return this.$store.getters.doneTodosCount
    },
    ...mapState({
        a:s=>s.a,
        b:'b',
        count:state=>state.count,
        // count1,//should be best but can't work
        count2:'count2',//best
        msg_(state){
          return state.count3+this.msg
        }
      }),
    ...mapGetters({
      doneTodos:'doneTodos',
      sum:'sum',
    }),

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
