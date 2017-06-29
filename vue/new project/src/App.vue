<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click='test'>test</button>
    <button @click='changeshow'>change</button>
    <transition name='fade'>
      <router-view></router-view>
    </transition>

    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
  import router from './router'
  export default {
    name: 'app',
    data(){
      return {
        show:true,
        slide:'right',
      } 
    },
    methods:{
      test(){
        router.push('test')
      },
      changeshow(){
        this.show=!this.show
      },
    },
    created(){
      window.onpopstate=()=>{
        // console.log('history length',history.length)
      }
      document.onHistoryGo = function(){
        console.log('click this')
      }
      var detectBackOrForward = function(onBack, onForward) {
        // console.log('hashchange----------')
        var hashHistory = [window.location.hash];
        var historyLength = window.history.length;
            console.log('hashHistory',hashHistory)//hash history array

            console.log('historyLength',historyLength)//

        return function() {
        console.log('hashchange----------')

          var hash = window.location.hash, length = window.history.length;
            console.log('hashHistory',hashHistory)//hash history array
            console.log('hashHistory.length - 2',hashHistory.length - 2)
            console.log('hash',hash)//current hash
            console.log('length',length)//current hash
            console.log('historyLength',historyLength)//
            console.log('hashHistory[hashHistory.length - 2]',hashHistory[hashHistory.length - 2])
          if (hashHistory.length && historyLength == length) {//length不发生变化的hash变化是back || forward
            if (hashHistory[hashHistory.length - 2] == hash) {
              hashHistory = hashHistory.slice(0, -1);
              onBack();
            } else {
              hashHistory.push(hash);
              onForward();
            }
          } else {//if it is not back or forward, add this hash to history
            hashHistory.push(hash);
            historyLength = length;
          }
        }
      };
      var self_=this
      window.addEventListener("hashchange", detectBackOrForward(
        function() { console.log("back") ;self_.slide='left' },
        function() { console.log("forward"); self_.slide='right' }
        ));
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: block;
  }

  .fade-enter-active{
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }
  .right-enter-active, .right-leave-active {
    transition: transform .5s
  }
  .right-enter{
    transform: translateX(100%);
  } 
  .right-leave-to /* .fade-leave-active in <2.1.8 */ {
    transform: translateX(-100%);
  }
    .left-enter-active, .left-leave-active {
    transition: transform .5s
  }
  .left-enter{
    transform: translateX(-100%);
  } 
  .left-leave-to /* .fade-leave-active in <2.1.8 */ {
    transform: translateX(100%);
  }

</style>
