<template>
  <div class="container">
    this is products detail: {{ product.id }}
    <ProductDetail :product="product"/>
  </div>
</template>

<script setup>
const {id} = useRoute().params;
const url = 'https://fakestoreapi.com/products/'+id;

const {data: product} = await useFetch(url, {key: id})

if(!product.value){
  throw createError({statusCode: 404, message: 'Product not found zzz!'})
}
</script>

<style>

</style>