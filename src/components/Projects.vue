
<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.vue'

const filters = [
  'All',
  'Full Stack',
  'Backend',
  'Security',
  'System',
  'Tools',
]

const activeFilter = ref('All')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects

  return projects.filter((project) =>
    project.categories.includes(activeFilter.value)
  )
})
</script>

<template>
  <section id="projects" class="scroll-mt-20 px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <p class="mb-3 font-mono text-sm text-cyan-400">
        03 / Projects
      </p>

      <h2 class="text-4xl font-bold">
        Featured Projects
      </h2>

      <p class="mt-4 text-slate-400">
        從全端開發到系統自動化，探索實際專案中的技術應用。
      </p>

      <!-- 專案分類篩選 -->
      <div class="mt-10 flex flex-wrap gap-2">
        <button
          v-for="filter in filters"
          :key="filter"
          type="button"
          :aria-pressed="activeFilter === filter"
          class="rounded-lg border px-4 py-2 text-sm transition"
          :class="
            activeFilter === filter
              ? 'border-cyan-400 bg-cyan-400 text-slate-950'
              : 'border-slate-700 text-slate-400 hover:text-white'
          "
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <!-- [修改] 移除重複的 Grid 容器 -->
      <div class="mt-8 grid gap-6 md:grid-cols-3 ">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>

      <!-- 無符合條件的專案 -->
      <p
        v-if="filteredProjects.length === 0"
        class="mt-10 text-slate-400"
      >
        目前沒有符合此分類的專案。
      </p>
    </div>
  </section>
</template>
