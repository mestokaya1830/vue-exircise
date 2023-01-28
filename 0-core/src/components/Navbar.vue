<template lang="">
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link :to="'/products/' + 1 ">Product Details</router-link></li>
      <!-- or call with name -->
      <!-- <li> <router-link :to="{ name: 'Home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'Products' }">Products</router-link></li> -->
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  
</style>
