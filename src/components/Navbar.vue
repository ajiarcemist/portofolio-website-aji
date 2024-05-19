<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollTo = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div
    class="border border-gray-600 bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center"
  >
    <h1 class="text-3xl font-bold primary-color ml-4 cursor-default">AJI</h1>
    <ul class="hidden md:flex ml-auto space-x-5 mr-4 z-30">
      <li @click="scrollTo('About')" class="p-5 cursor-pointer">About</li>
      <li @click="scrollTo('Work')" class="p-5 cursor-pointer">Work</li>
      <li @click="scrollTo('Contact')" class="p-5 cursor-pointer">Contact</li>
    </ul>

    <div
      @click="toggleMenu"
      class="h-[100px] flex items-center cursor-pointer z-10"
    >
      <img
        v-if="!isMenuOpen"
        class="h-[40%] block md:hidden pr-5"
        src="/src/assets/img/bar.svg"
        alt="Menu"
      />
    </div>
    <div
      :class="
        isMenuOpen
          ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
          : 'fixed -left-[100%]'
      "
    >
      <h1 class="text-3xl primary-color m-4">AJI</h1>
      <ul class="p-8 text-2xl">
        <li @click="scrollTo('About')" class="p-2 cursor-pointer">About</li>
        <li @click="scrollTo('Work')" class="p-2 cursor-pointer">Work</li>
        <li @click="scrollTo('Contact')" class="p-2 cursor-pointer">Contact</li>
      </ul>
    </div>
    <div
      v-if="isMenuOpen"
      @click="toggleMenu"
      class="fixed top-0 right-0 m-4 z-20 cursor-pointer"
    >
      <img
        class="h-[60px] w-[60px] pt-4"
        src="/src/assets/img/whiteX.svg"
        alt="Close"
      />
    </div>
  </div>
</template>

<style scoped>
/* Additional styles if necessary */
</style>
