<template>
  <div class="w-full px-4 md:w-1/2 lg:w-1/3">
    <div class="mx-auto mb-10 max-w-[370px]">
      <div class="mb-8 overflow-hidden rounded">
        <img :src="blog.image_url" alt="image" class="w-full" />
      </div>
      <div>
        <span
          class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
        >
          <TextTime :timestamp="blog.created_at" :date-only="false"/>
        </span>
        <h3>
          <NuxtLink
          :to="`/blogs/${blog.id}`"
            class="truncate-2 text-dark hover:text-primary mb-4 text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl min-h-14 cursor-pointer"
            >{{ blog.title }}</NuxtLink
          >
        </h3>
        <p class="text-body-color text-base truncate-2">
          {{ blog.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { blog } = defineProps(["blog"]);
</script>
