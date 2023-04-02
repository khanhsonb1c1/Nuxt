<template>
    <div class="w-full px-4 md:w-1/2 xl:w-1/3 card">
      <div class="mb-10 overflow-hidden rounded-lg bg-white">
        <img :src="product.image" alt="image" class="w-full" />
        <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href="javascript:void(0)"
              class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] truncate ..."
            >
              {{product.title}}
            </a>
          </h3>
          <p class="text-body-color mb-7 text-base leading-relaxe truncate-2">
            {{ product.description }}
          </p>
          <a
            href="javascript:void(0)"
            class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const { product } = defineProps(["product"]);
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  