<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    test(){
      var MIN=60000
      var HOUR=3600000
      var DAY=86400000
      var MONTH=2592000000
      var YEAR=31536000000
      return class TimeUitl {
        /**
         * [getTimeString description]
         * @param  {Date.getTime()} AdDate  [description]
         * @param  {int} AiStart [description]
         * @param  {int} AiEnd   [description]
         * @param  {object} cfg     connectorDate,connectorTime,
         * @return {String}         [description]
         */
        static getTimeString(AdDate, AiStart=0, AiEnd=19, cfg={}) {
          function fToTwo(aNum) {
            return aNum >= 10 ? aNum : "0" + aNum;
          };
          if (AdDate === undefined) {
            var dNow = new Date();
          } else {
            var dNow = new Date(AdDate);
          }
          if(cfg.connectorDate===undefined){
            cfg.connectorDate='/'
          }
          if(cfg.connectorTime===undefined){
            cfg.connectorTime=':'
          }
          var iH = fToTwo(dNow.getHours());
          var iM = fToTwo(dNow.getMinutes());
          var iS = fToTwo(dNow.getSeconds());
          var iD = fToTwo(dNow.getDate())
          var iMonth = fToTwo(dNow.getMonth() + 1)
          var iY = dNow.getFullYear()
          var sNow
          if(cfg.connectorDate==='char'){
            sNow = iY + '年' + iMonth + '月' + iD + "日 " 
            + iH + cfg.connectorTime+ iM + cfg.connectorTime+ iS;
          }else{
            sNow = iY + cfg.connectorDate + iMonth + cfg.connectorDate + iD + " " 
            + iH + cfg.connectorTime+ iM + cfg.connectorTime+ iS;
          }
          return sNow.slice(AiStart, AiEnd);
        };
        getRemainTime(ms){
          return (ms/3600000).toFixed(1)+'小时'
        }

        static test(ms){
          return (ms/3600000).toFixed(1)+'小时'
        }
        static topicListWithinMonth(ms){
          let rslt='undefined'
          if(ms<HOUR){
            return Math.floor(ms/MIN)+'分钟前'
          }else if(ms<DAY){
            return Math.floor(ms/HOUR)+'小时前'
          }else if(ms<DAY*2){
            return '昨天' 
          }else if(ms<MONTH){
            return Math.floor(ms/DAY)+'天前'
          }
          return rslt
        }
        static topicList(timeMS){
          let nowMS=(new Date()).getTime()
          let passedMS=nowMS-timeMS
          if(passedMS<MONTH){
            return this.topicListWithinMonth(passedMS)
          }else if(passedMS<YEAR){
            return this.getTimeString(passedMS,5,11,{connectorDate:'char'})
          }else {
            return this.getTimeString(passedMS,0,11,{connectorDate:'char'})
          }
        }
        static topicDetailWithinMonth(){//

        }
        static TopicListDetail(){

        }
        static actList(startTime,endTime){
          let duration=endTime-startTime,start,end
          if(duration<DAY){
            return this.getTimeString(startTime,5,11)
          }

          else if(duration<YEAR){
            start=this.getTimeString(startTime,5,16)
            end=this.getTimeString(endTime,5,16)
            return start+'-'+end
          }else{
            start=this.getTimeString(startTime,0,16)
            end=this.getTimeString(endTime,0,16)
            return start+'-'+end
          }
        }
        static actDetail(startTime,endTime){
          let duration=endTime-startTime,start,end
          if(duration<YEAR){

            start=this.getTimeString(startTime,5,16)
            end=this.getTimeString(endTime,5,16)
            return start+'-'+end
          }else{
            start=this.getTimeString(startTime,0,16)
            end=this.getTimeString(endTime,0,16)
            return start+'-'+end
          }
        }
        static visitor(){

        }
      }
    }
  },
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
