
<script setup>
import { site } from '../data/site'
</script>

<template>
  <section id="contact" class="scroll-mt-20 px-6 py-28">
    <div class="mx-auto max-w-3xl text-center">
      <p class="mb-4 font-mono text-sm text-cyan-400">
        04 / Contact
      </p>

      <h2 class="text-4xl font-bold sm:text-5xl">
        Let's Build Something Great.
      </h2>

      <p class="mx-auto mt-6 max-w-xl leading-8 text-slate-400">
        歡迎交流軟體開發、系統整合及技術相關工作機會。
        期待將技術應用於實際問題，創造更好的解決方案。
      </p>

      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <a
          v-if="site.email"
          :href="`mailto:${site.email}`"
          class="rounded-lg bg-cyan-400 px-6 py-3
                 font-semibold text-slate-950
                 transition hover:bg-cyan-300"
        >
          Email Me ↗
        </a>

        <a
          v-if="site.github"
          :href="site.github"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg border border-slate-700
                 px-6 py-3 hover:border-cyan-400"
        >
          GitHub ↗
        </a>

        <a
          v-if="site.linkedin"
          :href="site.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg border border-slate-700
                 px-6 py-3 hover:border-cyan-400"
        >
          LinkedIn ↗
        </a>

        <a
          v-if="site.resume"
          :href="site.resume"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-lg border border-slate-700
                 px-6 py-3 hover:border-cyan-400"
        >
          View Resume ↗
        </a>
      </div>
    </div>
  </section>
</template>
