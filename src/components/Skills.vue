
<script setup>
import { skillGroups } from '../data/skills'
</script>

<template>
  <section
    id="skills"
    class="scroll-mt-20 border-y border-slate-800/60
           bg-slate-900/20 px-6 py-24"
  >
    <div class="mx-auto max-w-6xl">
      <p class="mb-3 font-mono text-sm text-cyan-400">02 / Skills</p>
      <h2 class="mb-12 text-4xl font-bold">Tech Stack</h2>

      <div class="grid gap-5 md:grid-cols-2">
        <article
          v-for="group in skillGroups"
          :key="group.title"
          class="rounded-xl border border-slate-800
                 bg-[#0d1525] p-7 transition
                 hover:border-cyan-500/40"
        >
          <h3 class="text-xl font-semibold">{{ group.title }}</h3>
          <p class="mt-1 text-sm text-slate-500">
            {{ group.description }}
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="rounded-md border border-slate-700/70
                     bg-slate-800/60 px-3 py-2
                     text-sm text-slate-300"
            >
              {{ skill }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
