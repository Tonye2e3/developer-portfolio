
<template>
  <section id="about" class="scroll-mt-20 px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <div class="mb-12">
        <p class="mb-3 font-mono text-sm text-cyan-400">01 / About</p>
        <h2 class="text-4xl font-bold">About Me</h2>
      </div>

      <div class="grid gap-12 md:grid-cols-2">
        <div class="space-y-5 leading-8 text-slate-400">
          <p>
            我是一名以軟體開發為主要發展方向的工程師，
            具備前後端網站開發、資料庫與系統維護相關經驗。
          </p>

          <p>
            曾參與全端電商專題開發，負責會員系統、
            身分驗證、權限管理與雲端部署等工作，
            並透過 Git 與 GitHub 進行團隊協作。
          </p>

          <p>
            除了軟體開發，也具有設備維護、
            系統安裝與異常分析經驗，
            重視問題追蹤、系統穩定性及持續學習。
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="item in [
              { title: 'Development', text: '前後端系統開發' },
              { title: 'Security', text: '驗證與權限管理' },
              { title: 'Infrastructure', text: '雲端部署與版本控制' },
              { title: 'Troubleshooting', text: '系統維護與問題分析' },
            ]"
            :key="item.title"
            class="rounded-xl border border-slate-800
                   bg-slate-900/50 p-6"
          >
            <h3 class="mb-3 font-semibold text-cyan-400">
              {{ item.title }}
            </h3>
            <p class="text-sm text-slate-400">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
