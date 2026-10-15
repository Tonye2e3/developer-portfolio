
<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-2xl
           border border-slate-800 bg-[#0d1525]
           transition duration-300 hover:-translate-y-1
           hover:border-cyan-500/40"
  >
    <div class="aspect-video overflow-hidden bg-slate-900">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="`${project.name} 專案畫面`"
        loading="lazy"
        class="h-full w-full object-cover
               transition duration-500 group-hover:scale-105"
      />
    </div>

    <div class="flex flex-1 flex-col p-6">
      <p class="font-mono text-xs text-cyan-400">
        {{ project.subtitle }}
      </p>

      <h3 class="mt-3 text-2xl font-bold">
        {{ project.name }}
      </h3>

      <p class="mt-2 text-sm text-slate-400">
        負責項目：{{ project.role }}
      </p>

      <p class="mt-5 leading-7 text-slate-400">
        {{ project.description }}
      </p>

      <div class="mt-6">
        <h4 class="mb-3 font-semibold">Technical Highlights</h4>

        <ul class="space-y-2 text-sm text-slate-400">
          <li
            v-for="item in project.challenges || []"
            :key="item.title"
          >
            <span class="text-cyan-400">→</span>
            {{ item.title }}
            <p class="ml-5 mt-1 text-xs leading-6 text-slate-500">
              {{ item.detail }}
            </p>
          </li>
        </ul>
      </div>

      <div class="mt-7 flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-md bg-slate-800 px-3 py-1
                 font-mono text-xs text-slate-300"
        >
          {{ tech }}
        </span>
      </div>

      <div class="mt-auto flex gap-5 pt-8 text-sm">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="text-cyan-400 hover:underline"
        >
          Source Code ↗
        </a>

        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="text-cyan-400 hover:underline"
        >
          Live Demo ↗
        </a>
      </div>
    </div>
  </article>
</template>
