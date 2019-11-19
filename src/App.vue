<template>
  <div id="app">
    <h1>Filter & Mixins</h1>
    <p>{{ msg |toUpperCase |to-lowercase}}</p>
    <hr>
    <button @click="fruits.push('lichi')">Add new Items</button>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filterFruits">{{ fruit }}</li>
    </ul>
    <hr>
    <app-list></app-list>
    </div>
</template>

<script>
  import List from './List.vue';
  import { fruitMixin } from './fruitMixin';
export default {
  mixins:[fruitMixin],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fruits:['apple','banana','chikkoo','mango','mausambi'],
      filterText:''
    }
  },
  filters:{
    toUpperCase(value){
      return value.toUpperCase();
    }
  },
  computed:{
   filterFruits(){
     return this.fruits.filter((element)=>
     {
       return element.match(this.filterText);
     });
   }
  },
  components:{
    appList:List
  }
} 
</script>

<style>

</style>
