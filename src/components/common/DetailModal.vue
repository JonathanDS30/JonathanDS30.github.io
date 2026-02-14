<template>
  <Teleport to="body">
    <div
      v-if="isVisible"
      class="fixed inset-0 z-[60]"
      role="dialog"
      aria-modal="true"
      :aria-label="title"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out"
        :class="showContent ? 'opacity-100' : 'opacity-0'"
        @click="$emit('close')"
      />

      <!-- Centered wrapper -->
      <div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
        <!-- Modal Panel -->
        <div
          ref="modalRef"
          class="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto
                 glass rounded-2xl p-8 md:p-10 border-l-4 shadow-2xl pointer-events-auto
                 transition-all duration-300"
          :class="[
            type === 'experience'
              ? 'border-l-emerald-500'
              : 'border-l-indigo-500',
            showContent
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-[0.92] translate-y-4'
          ]"
          :style="{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }"
        >
          <!-- Close button -->
          <button
            class="absolute top-4 right-4 p-2.5 rounded-xl
                   bg-slate-100/50 dark:bg-slate-800/50
                   hover:bg-slate-200 dark:hover:bg-slate-700
                   text-slate-500 dark:text-slate-400
                   transition-colors duration-200 z-10
                   outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label="Fermer"
            @click="$emit('close')"
          >
            <X class="w-5 h-5" />
          </button>

          <!-- Header: Badge + Period -->
          <div class="flex items-center justify-between text-xs font-medium mb-4 pr-12">
            <UiGlassBadge :color="type === 'experience' ? 'emerald' : 'indigo'">
              <template #icon>
                <Briefcase v-if="type === 'experience'" class="w-3 h-3" />
                <GraduationCap v-else class="w-3 h-3" />
              </template>
              {{ type === 'experience' ? 'Expérience' : 'Formation' }}
            </UiGlassBadge>
            <span class="text-slate-500 dark:text-slate-400">{{ period }}</span>
          </div>

          <!-- Title & Organization -->
          <h3 class="font-bold text-xl leading-tight pr-8">{{ title }}</h3>
          <p class="text-sm text-brand-600 dark:text-brand-400 font-medium mt-1">
            {{ organization }}
          </p>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {{ subtitle }}
          </p>

          <!-- Divider -->
          <hr class="my-6 border-slate-200/50 dark:border-slate-700/50" />

          <!-- Sections structurées -->
          <div class="space-y-8">
            <div
              v-for="(section, sIdx) in details"
              :key="sIdx"
            >
              <h4
                class="font-semibold text-lg mb-3"
                :class="type === 'experience' ? 'text-emerald-700 dark:text-emerald-400' : 'text-indigo-700 dark:text-indigo-400'"
              >
                {{ section.title }}
              </h4>
              <p
                v-if="section.intro"
                class="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed"
              >
                {{ section.intro }}
              </p>
              <ul v-if="section.points.length" class="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li
                  v-for="(point, pIdx) in section.points"
                  :key="pIdx"
                  class="flex items-start gap-2.5"
                >
                  <span
                    class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    :class="type === 'experience' ? 'bg-emerald-500' : 'bg-indigo-500'"
                  />
                  <span v-html="point" />
                </li>
              </ul>

              <!-- Séparateur entre sections -->
              <hr
                v-if="sIdx < details.length - 1"
                class="mt-8 border-slate-200/30 dark:border-slate-700/30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { X, Briefcase, GraduationCap } from 'lucide-vue-next'
import { useScrollLock, onKeyStroke } from '@vueuse/core'

const props = defineProps<{
  isOpen: boolean
  type: 'experience' | 'formation'
  period: string
  title: string
  organization: string
  subtitle: string
  details: { title: string; intro?: string; points: string[] }[]
}>()

const emit = defineEmits<{
  close: []
  afterLeave: []
}>()

const modalRef = ref<HTMLElement | null>(null)

// Animation state
const isVisible = ref(false)   // contrôle le v-if (présence dans le DOM)
const showContent = ref(false) // contrôle les classes d'animation

watch(() => props.isOpen, async (val) => {
  if (val) {
    // Ouverture : monter dans le DOM, puis animer
    isVisible.value = true
    await nextTick()
    requestAnimationFrame(() => {
      showContent.value = true
    })
  } else {
    // Fermeture : animer, puis retirer du DOM
    showContent.value = false
    setTimeout(() => {
      isVisible.value = false
      emit('afterLeave')
    }, 350)
  }
})

// Scroll lock (SSR-safe)
if (import.meta.client) {
  const isLocked = useScrollLock(document.body)
  watch(() => props.isOpen, (val) => {
    isLocked.value = val
  })
}

// Close on Escape
onKeyStroke('Escape', () => {
  if (props.isOpen) emit('close')
})

// Focus trap (SSR-safe, active uniquement quand la modale est ouverte)
if (import.meta.client) {
  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab' || !modalRef.value) return
    const focusable = modalRef.value.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last?.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first?.focus()
    }
  }

  watch(() => props.isOpen, (val) => {
    if (val) {
      document.addEventListener('keydown', handleTabKey)
    } else {
      document.removeEventListener('keydown', handleTabKey)
    }
  })

  onUnmounted(() => document.removeEventListener('keydown', handleTabKey))
}
</script>
