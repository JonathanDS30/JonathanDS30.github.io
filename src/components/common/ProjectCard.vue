<template>
  <a
    v-motion
    :initial="{ opacity: 0, y: 20 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: delay } }"
    :href="repo.html_url"
    target="_blank"
    rel="noopener noreferrer"
    class="relative flex flex-col h-full p-6 md:p-8 rounded-3xl overflow-hidden group
           bg-slate-900/40 backdrop-blur-xl border border-white/10
           transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/50"
    :class="[isFeatured ? 'md:col-span-2' : '']"
  >
    <!-- Effet Glow au survol -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-transparent"></div>
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-brand-500/20 rounded-full blur-3xl"></div>
    </div>

    <!-- Header -->
    <div class="relative z-10 flex items-start justify-between gap-4 mb-4">
      <div class="space-y-1">
        <div v-if="isFeatured" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-3">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
          Dernier projet
        </div>
        <h3 class="font-bold leading-tight text-white group-hover:text-brand-400 transition-colors"
            :class="isFeatured ? 'text-xl md:text-2xl' : 'text-lg'">
          {{ repo.name }}
        </h3>
      </div>
      <div class="p-2 rounded-full bg-white/5 text-slate-400 group-hover:bg-brand-500/20 group-hover:text-brand-400 transition-colors">
        <ArrowUpRight class="w-4 h-4 md:w-5 md:h-5" />
      </div>
    </div>

    <!-- Description -->
    <p class="text-slate-400 flex-grow leading-relaxed relative z-10"
       :class="[isFeatured ? 'text-base line-clamp-3' : 'text-sm line-clamp-2']">
      {{ repo.description || 'Pas de description' }}
    </p>

    <!-- Footer -->
    <div class="relative z-10 mt-6 pt-4 border-t border-white/10
                flex items-center justify-between text-xs font-medium text-slate-500">
      <span v-if="repo.language" class="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
        <span class="w-2 h-2 rounded-full" :class="langDotColor" />
        <span class="text-slate-300">{{ repo.language }}</span>
      </span>
      <span v-else />
      <span class="text-slate-400">{{ formatDate(repo.pushed_at) }}</span>
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
  isFeatured?: boolean
  formatDate: (date: string) => string
}>()

const langDotColors: Record<string, string> = {
  TypeScript: 'bg-blue-400',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-emerald-400',
  PowerShell: 'bg-indigo-400',
  HCL: 'bg-violet-400',
  HTML: 'bg-orange-400',
  Vue: 'bg-emerald-500',
  CSS: 'bg-blue-300',
  Shell: 'bg-green-400',
  Go: 'bg-cyan-400',
  Rust: 'bg-orange-500',
}

const langDotColor = computed(() => langDotColors[props.repo.language ?? ''] ?? 'bg-slate-400')
</script>
