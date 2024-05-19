<script setup></script>

<template>
  <div
    class="border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center"
  >
    <h2 class="text-gray-700 text-2xl md:text-4xl font-bold m-4">
      My <br />
      Tech <br />
      Stack <br />
    </h2>
    <div class="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
      <img src="/src/assets/img/html.png" alt="html" />
      <p class="mt-2">HTML</p>
    </div>

    <div class="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
      <img
        src="/src/assets/img/javascript.png"
        alt="javascript"
        width="{100}"
        height="{100}"
      />
      <p class="mt-2">Javascript</p>
    </div>
    <div class="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
      <img
        src="/src/assets/img/git.png"
        alt="git"
        width="{100}"
        height="{100}"
      />
      <p class="mt-2">Git</p>
    </div>
    <div class="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
      <img
        src="/src/assets/img/tailwind.png"
        alt="tailwind"
        width="{100}"
        height="{100}"
      />
      <p class="mt-2">Tailwind</p>
    </div>
    <div class="flex flex-col items-center m-4 sm:my-0 w-[65px] md:w-[150px]">
      <img
        src="/src/assets/img/laravel.png"
        alt="laravel"
        width="{200}"
        height="{200}"
      />
      <p class="mt-2">Laravel</p>
    </div>
    <div class="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
      <img
        src="/src/assets/img/vue.png"
        alt="vue"
        width="{100}"
        height="{100}"
      />
      <p class="mt-2">Vue</p>
    </div>
  </div>
</template>
