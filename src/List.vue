<template>
  <div>
    <h1>Filter & Mixins</h1>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filterFruits">{{ fruit }}</li>
    </ul>
    </div>
</template>

<script> 
import { fruitMixin } from './fruitMixin';
export default {
  mixins:[fruitMixin]
} 
</script>

<style>

</style>
