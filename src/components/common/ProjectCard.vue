<template>
  <article
    v-motion
    :initial="{ opacity: 0, scale: 0.95 }"
    :visible-once="{ opacity: 1, scale: 1, transition: { duration: 400, delay: delay } }"
  >
    <div
      class="project-card glass rounded-2xl p-6 h-full flex flex-col relative overflow-hidden
             transition-all duration-300 group cursor-default
             border-l-4 hover:shadow-xl hover:-translate-y-1"
      :class="[languageColor.border, languageColor.hoverShadow]"
    >
      <!-- Gradient de fond subtil au hover -->
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        :class="languageColor.gradient"
      />

      <!-- Header -->
      <div class="flex items-start justify-between gap-3 mb-3 relative z-10">
        <h3 class="font-bold text-lg leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {{ repo.name }}
        </h3>
        <div
          class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
          :class="languageColor.iconBg"
        >
          <GitBranch class="w-4 h-4 text-white" />
        </div>
      </div>

      <!-- Description -->
      <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 flex-grow relative z-10">
        {{ repo.description || 'Pas de description' }}
      </p>

      <!-- Footer -->
      <div class="mt-auto pt-4 relative z-10">
        <!-- Badges -->
        <div class="flex flex-wrap gap-2 text-xs">
          <span
            v-if="repo.language"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium
                   border transition-all duration-200"
            :class="languageColor.badge"
          >
            <Code class="w-3 h-3" />
            {{ repo.language }}
          </span>
          <span
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium
                   bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400
                   border border-slate-200/50 dark:border-slate-700/50"
          >
            <Star class="w-3 h-3" />
            {{ repo.stargazers_count }}
          </span>
          <span
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium
                   bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400
                   border border-slate-200/50 dark:border-slate-700/50"
          >
            <GitFork class="w-3 h-3" />
            {{ repo.forks_count }}
          </span>
          <span
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium
                   bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400
                   border border-slate-200/50 dark:border-slate-700/50"
          >
            <Calendar class="w-3 h-3" />
            {{ formatDate(repo.pushed_at) }}
          </span>
        </div>

        <!-- Link -->
        <a
          :href="repo.html_url"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold
                 transition-all duration-200 group/link"
          :class="languageColor.link"
        >
          <span class="relative">
            Voir le repo
            <span class="absolute bottom-0 left-0 w-0 h-0.5 group-hover/link:w-full transition-all duration-300" :class="languageColor.underline" />
          </span>
          <ExternalLink class="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { GitBranch, Code, Star, GitFork, Calendar, ExternalLink } from 'lucide-vue-next'

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

// Couleurs basées sur le langage de programmation
const languageColors: Record<string, {
  border: string
  iconBg: string
  gradient: string
  hoverShadow: string
  badge: string
  link: string
  underline: string
}> = {
  TypeScript: {
    border: 'border-l-blue-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-500/5 to-transparent',
    hoverShadow: 'hover:shadow-blue-500/20',
    badge: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    link: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
    underline: 'bg-blue-500',
  },
  JavaScript: {
    border: 'border-l-yellow-500',
    iconBg: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
    gradient: 'bg-gradient-to-br from-yellow-500/5 to-transparent',
    hoverShadow: 'hover:shadow-yellow-500/20',
    badge: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
    link: 'text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300',
    underline: 'bg-yellow-500',
  },
  Python: {
    border: 'border-l-emerald-500',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    gradient: 'bg-gradient-to-br from-emerald-500/5 to-transparent',
    hoverShadow: 'hover:shadow-emerald-500/20',
    badge: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    link: 'text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300',
    underline: 'bg-emerald-500',
  },
  PowerShell: {
    border: 'border-l-indigo-500',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
    gradient: 'bg-gradient-to-br from-indigo-500/5 to-transparent',
    hoverShadow: 'hover:shadow-indigo-500/20',
    badge: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    link: 'text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300',
    underline: 'bg-indigo-500',
  },
  HCL: {
    border: 'border-l-violet-500',
    iconBg: 'bg-gradient-to-br from-violet-500 to-violet-600',
    gradient: 'bg-gradient-to-br from-violet-500/5 to-transparent',
    hoverShadow: 'hover:shadow-violet-500/20',
    badge: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800',
    link: 'text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300',
    underline: 'bg-violet-500',
  },
  HTML: {
    border: 'border-l-orange-500',
    iconBg: 'bg-gradient-to-br from-orange-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-orange-500/5 to-transparent',
    hoverShadow: 'hover:shadow-orange-500/20',
    badge: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
    link: 'text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300',
    underline: 'bg-orange-500',
  },
  default: {
    border: 'border-l-slate-500',
    iconBg: 'bg-gradient-to-br from-slate-500 to-slate-600',
    gradient: 'bg-gradient-to-br from-slate-500/5 to-transparent',
    hoverShadow: 'hover:shadow-slate-500/20',
    badge: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
    link: 'text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300',
    underline: 'bg-brand-500',
  },
}

const languageColor = computed(() => {
  const lang = props.repo.language
  if (lang && languageColors[lang]) {
    return languageColors[lang]
  }
  return languageColors.default
})
</script>
