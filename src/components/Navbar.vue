
<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b
           border-white/10 bg-[#080d19]/90 backdrop-blur-xl"
  >
    <nav
      class="mx-auto flex h-18 max-w-6xl
             items-center justify-between px-6"
    >
      <a href="#home" class="font-mono text-xl font-bold text-white">
        &lt;Portfolio<span class="text-cyan-400"> /</span>&gt;
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm text-slate-400 transition hover:text-cyan-400"
        >
          {{ link.label }}
        </a>
      </div>

      <button
        class="rounded-lg border border-slate-700
               px-3 py-2 text-sm md:hidden"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        aria-label="切換導覽選單"
        @click="isMenuOpen = !isMenuOpen"
      >
        {{ isMenuOpen ? 'Close' : 'Menu' }}
      </button>
    </nav>

    <div
      v-if="isMenuOpen"
      id="mobile-navigation"
      class="border-t border-slate-800 bg-[#080d19] px-6 py-4 md:hidden"
    >
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="block py-3 text-sm text-slate-300"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
    </div>
  </header>
</template>
