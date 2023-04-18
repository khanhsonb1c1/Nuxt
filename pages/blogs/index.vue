<template>
  <!-- ====== Blog Section Start -->
  <section
    class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-slate-800 dark:text-white min-h-screen"
    style="margin-top: 50px"
  >
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap justify-center">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span class="text-primary mb-2 block text-lg font-semibold">
              Our Blogs
            </span>
            <h2
              class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
            >
              Our Recent News
            </h2>
            <p class="text-body-color text-base">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div class="-mx-4 flex flex-wrap">
        <BlogCard v-for="(blog, index) in items.data" :key="index" :blog="blog" />
      </div>
    </div>
  </section>
  <!-- ====== Blog Section End -->
</template>

<script setup>
const { data: items } = await useFetch(
  "https://blogger-8e4f.onrender.com/api/blogs"
);

// const {data: blogs} = await useFetch('https://fakestoreapi.com/products')
</script>
