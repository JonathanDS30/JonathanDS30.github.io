<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: delay } }"
  >
    <div
      class="skill-card bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 h-full flex flex-col relative overflow-hidden
             transition-all duration-500 group cursor-default
             border border-slate-800 hover:border-transparent
             hover:-translate-y-1"
      :class="[
        colorClasses.hoverShadow
      ]"
    >
      <!-- Gradient de fond subtil au hover -->
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        :class="colorClasses.gradient"
      />

      <!-- Header avec icône et titre -->
      <div class="flex items-center gap-3 mb-5 relative z-10">
        <div
          class="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
          :class="colorClasses.iconBg"
        >
          <component :is="icon" class="w-5 h-5 text-white" />
        </div>
        <h3 class="font-bold text-lg leading-tight text-slate-100 group-hover:text-white transition-colors">{{ title }}</h3>
      </div>

      <!-- Catégories -->
      <div class="space-y-5 flex-1 relative z-10">
        <div v-for="(category, idx) in categories" :key="idx">
          <p class="text-xs font-semibold text-slate-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
            <component :is="getIcon(category.icon)" class="w-3.5 h-3.5" :class="colorClasses.text" />
            {{ category.label }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in category.tags"
              :key="tag"
              class="skill-tag px-3 py-1.5 rounded-lg text-xs font-medium
                     bg-slate-800/50 text-slate-300
                     border border-slate-700/50
                     transition-all duration-300 cursor-default
                     hover:-translate-y-0.5"
              :class="[
                colorClasses.hoverBorder,
                colorClasses.hoverBg,
                colorClasses.hoverText
              ]"
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
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30',
    gradient: 'bg-gradient-to-br from-blue-500/10 via-transparent to-transparent',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] hover:border-blue-500/50',
    text: 'text-blue-400',
    hoverBorder: 'hover:border-blue-500/50',
    hoverBg: 'hover:bg-blue-500/10',
    hoverText: 'hover:text-blue-300',
  },
  emerald: {
    iconBg: 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/30',
    gradient: 'bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] hover:border-emerald-500/50',
    text: 'text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/50',
    hoverBg: 'hover:bg-emerald-500/10',
    hoverText: 'hover:text-emerald-300',
  },
  violet: {
    iconBg: 'bg-gradient-to-br from-violet-500 to-violet-600 shadow-lg shadow-violet-500/30',
    gradient: 'bg-gradient-to-br from-violet-500/10 via-transparent to-transparent',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] hover:border-violet-500/50',
    text: 'text-violet-400',
    hoverBorder: 'hover:border-violet-500/50',
    hoverBg: 'hover:bg-violet-500/10',
    hoverText: 'hover:text-violet-300',
  },
  amber: {
    iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30',
    gradient: 'bg-gradient-to-br from-amber-500/10 via-transparent to-transparent',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)] hover:border-amber-500/50',
    text: 'text-amber-400',
    hoverBorder: 'hover:border-amber-500/50',
    hoverBg: 'hover:bg-amber-500/10',
    hoverText: 'hover:text-amber-300',
  },
  rose: {
    iconBg: 'bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg shadow-rose-500/30',
    gradient: 'bg-gradient-to-br from-rose-500/10 via-transparent to-transparent',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.3)] hover:border-rose-500/50',
    text: 'text-rose-400',
    hoverBorder: 'hover:border-rose-500/50',
    hoverBg: 'hover:bg-rose-500/10',
    hoverText: 'hover:text-rose-300',
  },
  cyan: {
    iconBg: 'bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/30',
    gradient: 'bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent',
    hoverShadow: 'hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] hover:border-cyan-500/50',
    text: 'text-cyan-400',
    hoverBorder: 'hover:border-cyan-500/50',
    hoverBg: 'hover:bg-cyan-500/10',
    hoverText: 'hover:text-cyan-300',
  },
}

const colorClasses = computed(() => {
  return colorVariants[props.color || 'blue']
})
</script>
