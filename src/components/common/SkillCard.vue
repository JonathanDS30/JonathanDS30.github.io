<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: delay } }"
  >
    <div
      class="skill-card glass rounded-2xl p-6 h-full flex flex-col relative overflow-hidden
             transition-all duration-300 group cursor-default
             border-t-4 hover:shadow-xl hover:-translate-y-1"
      :class="[
        colorClasses.border,
        colorClasses.hoverShadow
      ]"
    >
      <!-- Gradient de fond subtil au hover -->
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        :class="colorClasses.gradient"
      />

      <!-- Header avec icône et titre -->
      <div class="flex items-center gap-3 mb-5 relative z-10">
        <div
          class="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          :class="colorClasses.iconBg"
        >
          <component :is="icon" class="w-5 h-5 text-white" />
        </div>
        <h3 class="font-bold text-lg leading-tight">{{ title }}</h3>
      </div>

      <!-- Catégories -->
      <div class="space-y-4 flex-1 relative z-10">
        <div v-for="(category, idx) in categories" :key="idx">
          <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
            <component :is="getIcon(category.icon)" class="w-3.5 h-3.5" />
            {{ category.label }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in category.tags"
              :key="tag"
              class="skill-tag px-3 py-1.5 rounded-lg text-xs font-medium
                     bg-slate-100/80 dark:bg-slate-800/80
                     text-slate-700 dark:text-slate-300
                     border border-slate-200/50 dark:border-slate-700/50
                     hover:border-brand-500/50 hover:bg-brand-50 dark:hover:bg-brand-900/30
                     hover:text-brand-700 dark:hover:text-brand-300
                     transition-all duration-200 cursor-default"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Monitor,
  Terminal,
  Network,
  ShieldCheck,
  Box,
  Globe,
  Code,
  CloudCog,
  TerminalSquare,
  Database,
  Eye,
  BarChart3,
} from 'lucide-vue-next'
import type { Component } from 'vue'

const props = defineProps<{
  icon: Component
  title: string
  categories: {
    icon: string
    label: string
    tags: string[]
  }[]
  color?: 'blue' | 'emerald' | 'violet' | 'amber' | 'rose' | 'cyan'
  delay?: number
}>()

const iconMap: Record<string, Component> = {
  Monitor,
  Terminal,
  Network,
  ShieldCheck,
  Box,
  Globe,
  Code,
  CloudCog,
  TerminalSquare,
  Database,
  Eye,
  BarChart3,
}

const getIcon = (name: string): Component => {
  return iconMap[name] || Monitor
}

// Couleurs par défaut basées sur l'index ou la prop color
const colorVariants = {
  blue: {
    border: 'border-t-blue-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-500/5 to-transparent',
    hoverShadow: 'hover:shadow-blue-500/20',
  },
  emerald: {
    border: 'border-t-emerald-500',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    gradient: 'bg-gradient-to-br from-emerald-500/5 to-transparent',
    hoverShadow: 'hover:shadow-emerald-500/20',
  },
  violet: {
    border: 'border-t-violet-500',
    iconBg: 'bg-gradient-to-br from-violet-500 to-violet-600',
    gradient: 'bg-gradient-to-br from-violet-500/5 to-transparent',
    hoverShadow: 'hover:shadow-violet-500/20',
  },
  amber: {
    border: 'border-t-amber-500',
    iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600',
    gradient: 'bg-gradient-to-br from-amber-500/5 to-transparent',
    hoverShadow: 'hover:shadow-amber-500/20',
  },
  rose: {
    border: 'border-t-rose-500',
    iconBg: 'bg-gradient-to-br from-rose-500 to-rose-600',
    gradient: 'bg-gradient-to-br from-rose-500/5 to-transparent',
    hoverShadow: 'hover:shadow-rose-500/20',
  },
  cyan: {
    border: 'border-t-cyan-500',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    gradient: 'bg-gradient-to-br from-cyan-500/5 to-transparent',
    hoverShadow: 'hover:shadow-cyan-500/20',
  },
}

const colorClasses = computed(() => {
  return colorVariants[props.color || 'blue']
})
</script>
