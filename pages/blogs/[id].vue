<template>
  <div class="min-h-screen mt-12 blog-detail dark:bg-slate-900 dark:text-white" style="margin-top: 100px">
    <div class="flex flex-wrap justify-center">
      <div class="w-full px-4 md:w-full lg:w-3/4">
        <div class="title-blog mt-20">
          <h2 class="uppercase">
            {{ blog.title }}
          </h2>
        </div>
        <div class="image">
          <img :src="blog.image_url" alt="" />
        </div>
        <div class="infomation-blog mt-6">
          <div class="time text-gray-700 dark:text-gray-400">
            <TextTime :timestamp="blog.created_at" />
          </div>

          <div class="description mt-6">
            <p>
              {{ blog.description }}
            </p>
          </div>
        </div>

        <div class="content mt-6" v-html="blog.content"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextTime from "~~/components/TextTime.vue";

const { id } = useRoute().params;

const url = "https://blogger-8e4f.onrender.com/api/blogs/" + id;

const { data: blog } = await useFetch(url, { key: id });

if (!blog.value) {
  throw createError({ statusCode: 404, message: "Blog not found !" });
}
</script>
