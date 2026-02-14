<template>
  <a
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible-once="{ opacity: 1, y: 0, transition: { duration: 400, delay: delay } }"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="group"
  >
    <UiGlassCard glow class="h-full">
      <div class="flex flex-col items-center text-center gap-4 min-h-[160px] justify-center">
        <!-- Icône -->
        <component
          :is="icon"
          class="w-8 h-8 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform"
        />
        <div>
          <h3 class="font-bold text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-2">
            {{ title }}
          </h3>
          <p class="text-sm font-medium text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition break-words leading-relaxed">
            {{ value }}
          </p>
          <p v-if="subtitle" class="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {{ subtitle }}
          </p>
        </div>
      </div>
    </UiGlassCard>
  </a>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  title: string
  value: string
  subtitle?: string
  href: string
  external?: boolean
  delay?: number
}>()
</script>
