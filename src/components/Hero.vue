
<template>
  <section
    id="home"
    class="relative flex min-h-screen items-center
           overflow-hidden px-6 pt-20"
  >
    <div
      class="pointer-events-none absolute right-[-12rem] top-20
             h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
    ></div>

    <div class="relative mx-auto w-full max-w-6xl py-20">
      <div
        class="mb-8 inline-flex rounded-full border
               border-cyan-500/20 bg-cyan-500/5
               px-4 py-2 font-mono text-sm text-cyan-400"
      >
        Hello, World! 👋
      </div>

      <h1
        class="max-w-4xl text-5xl font-bold
               leading-tight tracking-tight sm:text-7xl"
      >
        Building Better
        <span class="block text-cyan-400">Software.</span>
      </h1>

      <p class="mt-7 text-xl font-medium text-slate-200">
        Software Engineer · Full-Stack Development · System Integration
      </p>

      <p class="mt-6 max-w-2xl text-base leading-8 text-slate-400">
        專注於軟體開發、系統整合與問題解決。
        具備前後端開發、資料庫設計、身分驗證與雲端部署經驗，
        持續探索安全、穩定且易於維護的系統設計。
      </p>

      <div class="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          class="rounded-lg bg-cyan-400 px-7 py-3
                 font-semibold text-slate-950 transition
                 hover:bg-cyan-300"
        >
          Explore Projects →
        </a>

        <a
          href="#contact"
          class="rounded-lg border border-slate-700
                 px-7 py-3 text-slate-200 transition
                 hover:border-cyan-400"
        >
          Contact Me
        </a>
      </div>

      <div class="mt-16 flex flex-wrap gap-3">
        <span
          v-for="tech in ['Vue 3', 'C#', 'ASP.NET Core', 'SQL Server', 'Azure']"
          :key="tech"
          class="rounded-md border border-slate-800
                 bg-slate-900/60 px-3 py-2
                 font-mono text-xs text-slate-400"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </section>
</template>
