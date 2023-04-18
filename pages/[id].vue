<template>
  <div class="container">
    <ProductDetail :product="product"/>
  </div>
</template>

<script setup>
const {id} = useRoute().params;
const url = 'https://blogger-8e4f.onrender.com/api/blogs/'+id;

const {data: product} = await useFetch(url, {key: id})

if(!product.value){
  throw createError({statusCode: 404, message: 'Product not found zzz!'})
}
</script>