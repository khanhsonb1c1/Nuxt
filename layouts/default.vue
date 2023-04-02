<template>
  <div :class="{'dark': dark_mode}">
    <header
      x-data="
        {
          navbarOpen: false,
        }
      "
      class="absolute left-0 top-0 z-50 w-full dark:bg-slate-800 dark:text-white"
    >
      <div class="container mx-auto ">
        <div class="relative -mx-4 flex items-center justify-between">
          <div class="w-60 max-w-full px-4">
            <a href="javascript:void(0)" class="block w-full py-5">
              <img src="../assets/images/logo.png" alt="logo" class="w-full" />
            </a>
          </div>
          <div class="flex w-full items-center justify-between px-4">
            <div>
              <button
                @click="navbarOpen = !navbarOpen"
                :class="navbarOpen && 'navbarTogglerActive'"
                id="navbarToggler"
                class="ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
              >
                <span
                  class="bg-body-color relative my-[6px] block h-[2px] w-[30px]"
                ></span>
                <span
                  class="bg-body-color relative my-[6px] block h-[2px] w-[30px]"
                ></span>
                <span
                  class="bg-body-color relative my-[6px] block h-[2px] w-[30px]"
                ></span>
              </button>
              <nav
                x-transition
                :class="!navbarOpen && 'hidden'"
                id="navbarCollapse"
                class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none dark:bg-slate-800"
              >
                <ul class="block lg:flex">
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      About me
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      My projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="dark_mode"
                class="sr-only peer"
                @click="changeMode"
              />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span
                class="ml-3 text-sm font-medium text-gray-900 dark:text-white"
                >{{ dark_mode == true ? "Dark Mode" : "Light Mode" }}</span
              >
            </label>
          </div>
        </div>
      </div>
    </header>
    <!-- ====== Navbar Section End -->

    <slot></slot>
    <Footer />
  </div>
</template>

<script setup>
const dark_mode = ref(false);

const changeMode = () => {
  console.log(dark_mode.value);
  dark_mode.value = !dark_mode.value;
};
</script>
