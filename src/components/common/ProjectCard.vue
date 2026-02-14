<template>
  <a
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: delay } }"
    :href="repo.html_url"
    target="_blank"
    rel="noopener noreferrer"
    class="glass rounded-2xl p-6 h-full flex flex-col relative overflow-hidden
           transition-all duration-300 group
           border border-slate-200/10 dark:border-slate-700/30
           hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1"
  >
    <!-- Header -->
    <div class="flex items-start justify-between gap-3 mb-3">
      <h3 class="font-semibold text-base leading-tight
                 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
        {{ repo.name }}
      </h3>
      <ArrowUpRight
        class="w-4 h-4 flex-shrink-0 text-slate-400 dark:text-slate-500
               opacity-0 group-hover:opacity-100
               translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0
               transition-all duration-300"
      />
    </div>

    <!-- Description -->
    <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 flex-grow leading-relaxed">
      {{ repo.description || 'Pas de description' }}
    </p>

    <!-- Footer -->
    <div class="mt-4 pt-4 border-t border-slate-200/20 dark:border-slate-700/20
                flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
      <span v-if="repo.language" class="inline-flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full" :class="langDotColor" />
        {{ repo.language }}
      </span>
      <span v-else />
      <span>{{ formatDate(repo.pushed_at) }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  pushed_at: string
}

const props = defineProps<{
  repo: GitHubRepo
  delay?: number
  formatDate: (date: string) => string
}>()

const langDotColors: Record<string, string> = {
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-emerald-500',
  PowerShell: 'bg-indigo-500',
  HCL: 'bg-violet-500',
  HTML: 'bg-orange-500',
}

const langDotColor = computed(() => langDotColors[props.repo.language ?? ''] ?? 'bg-slate-400')
</script>
