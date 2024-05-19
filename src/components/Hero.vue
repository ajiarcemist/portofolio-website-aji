<template>
  <div
    class="grid grid-cols-1 ssm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black"
  >
    <!-- Hero Avatar -->
    <div class="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
      <img src="/src/assets/img/aji2.png" alt="hero image" />
    </div>
    <!-- end hero avatar -->
    <!-- content word -->
    <div class="col-span-2 flex flex-col justify-center px-5">
      <h1 class="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-left">
        <span class="primary-color"> I'm a </span>
        <br />
      </h1>
      <h2
        class="text-white text-3xl sm:text-6xl lg:text-7xl font-extrabold text-left"
      >
        <!-- Span for the typing effect -->
        <span
          id="typingEffect"
          class="typing-effect"
          style="height: 40px; display: inline-block"
        >
          Fullstack Engineer
        </span>
        <!-- Reserve space for the longest word -->
      </h2>
      <p class="text-white sm:text-lg my-6 lg:text-xl text-left">
        Namaku adalah
        <span class="primary-color font-bold">Kusumo Aji Suryo Hamijoyo </span>
        dan aku merupakan Fullstack Developer yang berfokus di web development.
      </p>
      <div
        class="text-center my-8 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4"
      >
        <div
          class="px-6 py-3 w-full rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white cursor-pointer"
        >
          <span>Download CV</span>
        </div>
        <div
          @click="scrollTo('Contact')"
          class="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none cursor-pointer"
        >
          <span>Contact</span>
        </div>
        <div
          class="text-white col-span-2 md:col-span-1 flex justify-center items-center gap-5 mt-6 md:mt-0 lg:mt-0 pl-5"
        >
          <a href="https://www.linkedin.com/in/ajiesur/" target="_blank">
            <img
              class="w-[70px]"
              src="/src/assets/img/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/ajiarcemist" target="_blank">
            <img
              class="w-[120px]"
              src="/src/assets/img/github.png"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
    <!-- end content word -->
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    typeEffect() {
      const words = ["Fullstack Engineer", "Web Developer"];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      const typingElement = document.getElementById("typingEffect");

      function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
          typingElement.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;

          if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 1250);
          } else {
            setTimeout(type, 50);
          }
        } else {
          typingElement.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;

          if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1250);
          } else {
            setTimeout(type, 70);
          }
        }
      }

      type();
    },
  },
  mounted() {
    this.typeEffect();
  },
};
</script>

<style scoped>
.typing-effect {
}
</style>
