<template>
  <header class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
    <div class="glass rounded-2xl px-4 md:px-6 shadow-lg">
      <div class="h-14 flex items-center justify-between">
        <!-- Logo -->
        <a
          href="#accueil"
          class="flex items-center gap-2.5 font-bold text-lg group"
        >
          <img 
            src="/img/jds_icon0.png" 
            alt="Logo JDS" 
            class="w-9 h-9 rounded-xl shadow-lg group-hover:shadow-glass-glow group-hover:scale-105 transition-all duration-300 object-cover"
          />
        </a>

        <!-- Navigation Desktop -->
        <nav class="hidden md:flex items-center gap-1">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="nav-pill group"
          >
            <component :is="item.icon" class="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
            <span>{{ item.label }}</span>
          </a>

          <!-- Theme Toggle -->
          <button
            @click="toggleColorMode"
            class="ml-2 p-2.5 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-brand-100 dark:hover:bg-brand-900/30 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300"
            aria-label="Toggle theme"
          >
            <Moon v-if="colorMode.value === 'light'" class="w-5 h-5" />
            <Sun v-else class="w-5 h-5" />
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center gap-2">
          <button
            @click="toggleColorMode"
            class="p-2.5 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400"
            aria-label="Toggle theme"
          >
            <Moon v-if="colorMode.value === 'light'" class="w-5 h-5" />
            <Sun v-else class="w-5 h-5" />
          </button>

          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2.5 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400"
            aria-label="Menu"
          >
            <X v-if="isMobileMenuOpen" class="w-5 h-5" />
            <Menu v-else class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide-down">
        <nav
          v-if="isMobileMenuOpen"
          class="md:hidden pb-4 border-t border-slate-200/50 dark:border-slate-700/50"
        >
          <div class="flex flex-col pt-3 gap-1">
            <a
              v-for="item in navItems"
              :key="item.href"
              :href="item.href"
              class="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-brand-900/20 hover:text-brand-600 dark:hover:text-brand-400 rounded-xl transition-all"
              @click="isMobileMenuOpen = false"
            >
              <component :is="item.icon" class="w-4 h-4" />
              {{ item.label }}
            </a>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Moon, Sun, Menu, X, Route, Layers, FolderGit2, Mail, User } from 'lucide-vue-next'

const colorMode = useColorMode()
const isMobileMenuOpen = ref(false)

const navItems = [
  { href: '#a-propos', label: 'À Propos', icon: User },
  { href: '#parcours', label: 'Parcours', icon: Route },
  { href: '#competences', label: 'Compétences', icon: Layers },
  { href: '#projets', label: 'Projets', icon: FolderGit2 },
  { href: '#contact', label: 'Contact', icon: Mail },
]

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.nav-pill {
  @apply flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl
         text-slate-600 dark:text-slate-400
         hover:bg-brand-50 dark:hover:bg-brand-900/20
         hover:text-brand-600 dark:hover:text-brand-400
         transition-all duration-200;
}
</style>
