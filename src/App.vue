
<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="min-h-screen bg-[#080d19] text-slate-100">
    <Navbar />

    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>

    <footer
      class="border-t border-slate-800 px-6 py-8
             text-center text-sm text-slate-500"
    >
      © {{ new Date().getFullYear() }} Portfolio.
      Built with Vue 3 + Tailwind CSS.
    </footer>
  </div>
</template>
