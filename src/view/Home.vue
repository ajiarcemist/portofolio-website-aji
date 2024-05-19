<!-- Home.vue -->
<script setup>
import Hero from "../components/Hero.vue";
import Navbar from "../components/Navbar.vue";
import Skill from "../components/Skill.vue";
import Work from "../components/Work.vue";
import Contact from "../components/Contact.vue";
import Foot from "../components/Foot.vue";
import About from "../components/About.vue";
</script>

<template>
  <div class="font-nunito">
    <Navbar />
    <div>
      <section id="Hero">
        <Hero />
      </section>
    </div>
    <div>
      <section id="Skill">
        <Skill />
      </section>
    </div>
    <div>
      <section id="About">
        <About />
      </section>
    </div>
    <div>
      <section id="Work">
        <Work />
      </section>
    </div>
    <div>
      <section id="Contact">
        <Contact />
      </section>
    </div>
    <Foot />
  </div>
</template>
