<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition
        enter-active-class="transition-none"
        enter-from-class="[&_.modal-backdrop]:bg-black/0 [&_.modal-backdrop]:backdrop-blur-[0px] [&_.modal-panel]:opacity-0 [&_.modal-panel]:scale-95 [&_.modal-panel]:translate-y-4"
        leave-active-class="transition-none"
        leave-to-class="[&_.modal-backdrop]:bg-black/0 [&_.modal-backdrop]:backdrop-blur-[0px] [&_.modal-panel]:opacity-0 [&_.modal-panel]:scale-95 [&_.modal-panel]:translate-y-4"
        @after-leave="$emit('afterLeave')"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 z-[60]"
          role="dialog"
          aria-modal="true"
          :aria-label="title"
        >
          <!-- Backdrop -->
          <div
            class="modal-backdrop absolute inset-0 bg-black/40 backdrop-blur-md transition-[background-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            @click="$emit('close')"
          />

          <!-- Centered wrapper -->
          <div class="absolute inset-0 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <!-- Modal Panel -->
            <div
              ref="modalRef"
              class="modal-panel relative w-full max-w-2xl max-h-[85vh] overflow-y-auto custom-scrollbar
                     bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-10 
                     border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] pointer-events-auto opacity-100
                     transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
          <!-- Halo lumineux supérieur -->
          <div 
            class="absolute top-0 left-0 right-0 h-32 opacity-20 pointer-events-none"
            :class="type === 'experience' ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent' : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent'"
          ></div>

          <!-- Close button -->
          <button
            class="absolute top-4 right-4 p-2.5 rounded-xl
                   bg-white/5 hover:bg-white/10
                   text-slate-400 hover:text-white
                   transition-colors duration-200 z-50
                   outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label="Fermer"
            @click="$emit('close')"
          >
            <X class="w-5 h-5" />
          </button>

          <!-- Header: Badge + Period -->
          <div class="relative z-10 flex flex-wrap items-center justify-between gap-3 text-xs font-medium mb-6 pr-12">
            <UiGlassBadge :color="type === 'experience' ? 'emerald' : 'indigo'" class="!bg-white/10 !border-white/20 !text-white">
              <template #icon>
                <Briefcase v-if="type === 'experience'" class="w-3 h-3" />
                <GraduationCap v-else class="w-3 h-3" />
              </template>
              {{ type === 'experience' ? 'Expérience' : 'Formation' }}
            </UiGlassBadge>
            <span class="text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">{{ period }}</span>
          </div>

          <!-- Title & Organization -->
          <div class="relative z-10">
            <h3 class="font-extrabold text-2xl md:text-3xl leading-tight pr-8 text-white break-words">{{ title }}</h3>
            <p class="text-base md:text-lg text-brand-400 font-semibold mt-2 break-words">
              {{ organization }}
            </p>
            <p class="mt-2 text-sm text-slate-400 break-words">
              {{ subtitle }}
            </p>
          </div>

          <!-- Divider -->
          <hr class="relative z-10 my-8 border-white/10" />

          <!-- Sections structurées -->
          <div class="relative z-10 space-y-10">
            <div
              v-for="(section, sIdx) in details"
              :key="sIdx"
            >
              <h4
                class="font-bold text-xl mb-4 flex items-center gap-3"
                :class="type === 'experience' ? 'text-emerald-400' : 'text-indigo-400'"
              >
                {{ section.title }}
              </h4>
              <p
                v-if="section.intro"
                class="text-sm text-slate-300 mb-6 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5 break-words"
              >
                {{ section.intro }}
              </p>
              
              <!-- Cartes de détails (remplace la liste) -->
              <div v-if="section.points.length" class="grid gap-3">
                <div
                  v-for="(point, pIdx) in section.points"
                  :key="pIdx"
                  class="flex items-start gap-3.5 bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/5 transition-colors duration-200 group"
                >
                  <div 
                    class="mt-0.5 p-1 rounded-lg flex-shrink-0 transition-colors"
                    :class="type === 'experience' ? 'bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30' : 'bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30'"
                  >
                    <CheckCircle2 class="w-4 h-4" />
                  </div>
                  <span class="text-sm text-slate-200 leading-relaxed break-words" v-html="point" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { X, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-vue-next'
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

<style scoped>
/* Custom Scrollbar pour la modale */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
