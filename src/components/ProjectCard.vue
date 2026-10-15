<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="group flex h-full flex-col overflow-hidden rounded-2xl
           border border-slate-800 bg-[#0d1525]
           transition duration-300 hover:-translate-y-1
           hover:border-cyan-500/40">

    <!-- [修改] 依專案設定圖片呈現方式 -->
    <div class="relative aspect-video overflow-hidden bg-slate-900">
      <!-- 直式圖片使用模糊背景填補左右空間 -->
      <img v-if="project.image && project.imageFit === 'contain'" :src="project.image" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full scale-110
           object-cover opacity-20 blur-2xl" />

      <!-- 主要專案圖片 -->
      <img v-if="project.image" :src="project.image" :alt="`${project.name} 專案畫面`" loading="lazy" class="relative h-full w-full
           transition duration-500 group-hover:scale-105" :class="project.imageFit === 'contain'
              ? 'object-contain p-3'
              : 'object-cover'
            " />

      <!-- 尚未提供圖片時顯示替代畫面 -->
      <div v-else class="flex h-full items-center justify-center
           text-sm text-slate-500">
        Project Preview Coming Soon
      </div>
    </div>


    <div class="flex flex-1 flex-col p-6">
      <p class="font-mono text-xs text-cyan-400">
        {{ project.subtitle }}
      </p>

      <h3 class="mt-3 text-2xl font-bold">
        {{ project.name }}
      </h3>
      <span v-if="project.status" class="mt-3 inline-flex w-fit rounded-full border
         border-amber-500/30 bg-amber-500/10
         px-3 py-1 text-xs text-amber-300">
        {{ project.status }}
      </span>
      <p class="mt-2 text-sm text-slate-400">
        負責項目：{{ project.role }}
      </p>

      <p class="mt-5 leading-7 text-slate-400">
        {{ project.description }}
      </p>

      <div class="mt-6">
        <h4 class="mb-3 font-semibold">Technical Highlights</h4>

        <ul class="space-y-2 text-sm text-slate-400">
          <li v-for="item in project.challenges || []" :key="item.title">
            <span class="text-cyan-400">→</span>
            {{ item.title }}
            <p class="ml-5 mt-1 text-xs leading-6 text-slate-500">
              {{ item.detail }}
            </p>
          </li>
        </ul>
      </div>

      <div class="mt-7 flex flex-wrap gap-2">
        <span v-for="tech in project.technologies" :key="tech" class="rounded-md bg-slate-800 px-3 py-1
                 font-mono text-xs text-slate-300">
          {{ tech }}
        </span>
      </div>

      <div class="mt-auto flex gap-5 pt-8 text-sm">
        <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer"
          class="text-cyan-400 hover:underline">
          Source Code ↗
        </a>

        <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer"
          class="text-cyan-400 hover:underline">
          Live Demo ↗
        </a>
      </div>
    </div>
  </article>
</template>
