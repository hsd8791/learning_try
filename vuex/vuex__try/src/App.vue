<template>
  <div id="app">
    <router-view/>
    <input type="text" v-for='item in testArr' v-model='item.test' >

    <select v-model="item.selected" v-for='item in opts'>
      <option v-for="option in item.options"  >  
        {{ option.text }}  
      </option>  
    </select>
    <div class="wrapper">
      <date-picker v-model="date"></date-picker>
      <p>
        Month: {{date.month}}
        Year: {{date.year}}
      </p>
    </div>
  </div>
</template>

<script>
import DatePicker from './components/datePicker.vue'
export default {
  components: {
    DatePicker
  },

   data() {
    return {
      date: {
              month: 1,
              year: 2017
            },


      test:'11',
      selected:{test:''},
      testArr:[{
        test:'',
      },{
        test:'',
      }],
      opts: [
       {
         selected:'',
         options:[{
           text: 'One',
           value: 'A'
         }, {
           text: 'Two',
           value: 'B'
         }, {
           text: 'Three',
           value: 'C'
         }],
       },{
          selected: '',
          options: [{
            text: '1',
            value: 'A'
          }, {
            text: '2',
            value: 'B'
          }, {
            text: '3',
            value: 'C'
          }],
       },
        
      ],
     
    }
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
}
</style>
