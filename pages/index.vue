<template>
  <div class="container mx-auto">
    <div class="home-page">
      <div class="card" v-for="(product, index) in products" :key="index">
        <h1>{{product.title}}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>

const {data: products} = await useFetch('https://fakestoreapi.com/products') 

</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  background: #3333;
}
</style>
