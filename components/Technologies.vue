<template>
  <!-- ====== Services Section Start -->
  <section class="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-slate-800 dark:text-white">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
            <!-- <span class="text-primary mb-2 block text-lg font-semibold">
                technology I use
            </span> -->
            <h2
              class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
            >
            Experienced
            </h2>
            <p class="text-body-color text-base">
                Here are some technologies that I often use in my projects.
            </p>
          </div>
        </div>
      </div>
      <div class="-mx-4 flex flex-wrap">
        <div
          class="w-full px-4 md:w-1/2 lg:w-1/3"
          v-for="(item, index) in list"
          :key="index"
        >
          <div
            class="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 dark:bg-slate-700 dark:text-white"
          >
            <div
              class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
            >
              <img :src="item.image" alt="" class="" />
            </div>
            <h4 class="text-dark mb-3 text-xl font-semibold">
              {{ item.title }}
            </h4>
            <!-- <p class="text-body-color">
              We dejoy working with discerning clients, people for whom qualuty,
              service, integrity & aesthetics.
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Services Section End -->
</template>

<script setup>
import logo_vue from "../assets/images/vuelogo.png";
import logo_react from "../assets/images/React-icon.svg.png";
import logo_nuxt from "../assets/images/nuxt-logo.png";
import logo_ts from "../assets/images/tslogo.png";
import logo_js from "../assets/images/JavaScript-logo.png";
import logo_express from "../assets/images/express-logo.png";
import logo_scss from "../assets/images/sass.png";
import logo_tailwind from "../assets/images/Tailwind_CSS_Logo.svg.png";
import logo_mongo from "../assets/images/mongo.jpeg";

const list = ref([
  {
    title: "Vue",
    description: "",
    image: logo_vue,
  },
  {
    title: "React",
    description: "",
    image: logo_react,
  },
  {
    title: "Nuxt",
    description: "",
    image: logo_nuxt,
  },
  {
    title: "TypeScript",
    description: "",
    image: logo_ts,
  },
  {
    title: "JavaScript",
    description: "",
    image: logo_js,
  },
  {
    title: "Tailwindcss",
    description: "",
    image: logo_tailwind,
  },
  {
    title: "SCSS",
    description: "",
    image: logo_scss,
  },
  {
    title: "ExpressJS",
    description: "",
    image: logo_express,
  },
  {
    title: "MongoDB",
    description: "",
    image: logo_mongo,
  },
  
]);
</script>
