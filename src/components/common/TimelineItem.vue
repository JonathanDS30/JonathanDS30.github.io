<template>
  <div
    v-motion
    :initial="{ opacity: 0, x: position === 'left' ? -50 : 50 }"
    :visible-once="{ opacity: 1, x: 0, transition: { duration: 500, delay: delay } }"
    :class="[
      'relative timeline-item',
      position === 'left' ? 'md:mr-auto' : 'md:ml-auto',
      'md:w-[calc(50%-30px)]',
      marginClass
    ]"
  >
    <!-- Point sur la timeline (desktop) -->
    <div
      class="hidden md:block absolute top-6 w-5 h-5
             rounded-full z-10 ring-4 ring-white dark:ring-slate-950
             shadow-lg transition-all duration-300"
      :class="[
        position === 'left' ? '-right-[calc(50%+12px)] md:left-auto md:-right-[40px]' : '-left-[calc(50%+12px)] md:right-auto md:-left-[40px]',
        type === 'experience'
          ? 'bg-gradient-to-br from-emerald-400 to-emerald-600'
          : 'bg-gradient-to-br from-indigo-400 to-indigo-600'
      ]"
    />

    <!-- Carte Glassmorphism - cliquable -->
    <div
      class="timeline-card glass rounded-2xl p-6 cursor-pointer transition-all duration-300
             border-l-4 relative overflow-hidden group"
      :class="[
        type === 'experience'
          ? 'border-l-emerald-500 hover:shadow-emerald-500/20'
          : 'border-l-indigo-500 hover:shadow-indigo-500/20',
        'hover:shadow-xl hover:-translate-y-1'
      ]"
      @click="handleClick"
    >
      <!-- Gradient de fond subtil -->
      <div
        class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        :class="type === 'experience'
          ? 'bg-gradient-to-br from-emerald-500/5 to-transparent'
          : 'bg-gradient-to-br from-indigo-500/5 to-transparent'"
      />
      <!-- Header avec badge et date -->
      <div class="flex items-center justify-between text-xs font-medium mb-3 relative z-10">
        <UiGlassBadge :color="type === 'experience' ? 'emerald' : 'indigo'">
          <template #icon>
            <Briefcase v-if="type === 'experience'" class="w-3 h-3" />
            <GraduationCap v-else class="w-3 h-3" />
          </template>
          {{ type === 'experience' ? 'Expérience' : 'Formation' }}
        </UiGlassBadge>
        <span class="text-slate-500 dark:text-slate-400">{{ period }}</span>
      </div>

      <!-- Contenu -->
      <div class="relative z-10">
        <h3 class="font-bold text-lg leading-tight">{{ title }}</h3>
        <p class="text-sm text-brand-600 dark:text-brand-400 font-medium mt-1">{{ organization }}</p>
        <p class="mt-2 text-xs text-slate-600 dark:text-slate-400">{{ subtitle }}</p>

        <!-- Indicateur visuel -->
        <div
          class="mt-3 inline-flex items-center gap-1 text-sm font-semibold
                 text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400
                 transition-colors"
        >
          <span>Voir les détails</span>
          <Eye class="w-4 h-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Briefcase, GraduationCap, Eye } from 'lucide-vue-next'

defineProps<{
  position: 'left' | 'right'
  type: 'experience' | 'formation'
  period: string
  title: string
  organization: string
  subtitle: string
  details: string[]
  marginClass?: string
  delay?: number
}>()

const emit = defineEmits<{
  select: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if ((event.target as HTMLElement).tagName === 'A') return
  emit('select', event)
}
</script>
