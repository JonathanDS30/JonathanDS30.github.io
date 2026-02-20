<template>
  <footer class="relative glass-subtle border-t border-white/10 dark:border-white/5 overflow-hidden mt-20">
    <!-- Halo lumineux en fond -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-500/10 via-transparent to-transparent pointer-events-none"></div>

    <!-- Section principale -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

        <!-- Colonne 1 : Logo et description -->
        <div class="flex flex-col lg:col-span-4">
          <div class="flex items-center gap-2.5 mb-6">
            <img 
              src="/img/jds_icon0.png" 
              alt="Logo JDS" 
              class="w-10 h-10 rounded-lg shadow-lg object-cover"
            />
            <span class="font-bold text-lg text-slate-900 dark:text-white">Jonathan DELLA SANTINA</span>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Ingénieur Systèmes et Réseaux passionné par la philosophie DevSecOps.
            Actuellement en MSc à l'EPSI et en alternance chez Ordisys.
          </p>

          <!-- Réseaux sociaux -->
          <div class="flex items-center gap-3 mt-auto">
            <a
              href="https://github.com/JonathanDS30"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(var(--color-brand-500),0.3)] hover:border-brand-500/30 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github class="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-della-santina/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(var(--color-brand-500),0.3)] hover:border-brand-500/30 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin class="w-5 h-5" />
            </a>
            <a
              href="mailto:jonathan.dellasantina433@gmail.com"
              class="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(var(--color-brand-500),0.3)] hover:border-brand-500/30 transition-all duration-300"
              aria-label="Email"
            >
              <Mail class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Colonne 2 : Navigation -->
        <div class="lg:col-span-2">
          <h3 class="font-bold text-sm uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700 dark:from-brand-400 dark:to-brand-600 mb-6">
            Navigation
          </h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:translate-x-1 inline-block transition-all duration-300"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Colonne 3 : Contact -->
        <div class="lg:col-span-3">
          <h3 class="font-bold text-sm uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700 dark:from-brand-400 dark:to-brand-600 mb-6">
            Contact
          </h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-3 group">
              <div class="p-2 rounded-lg bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20 transition-colors shrink-0">
                <Mail class="w-4 h-4" />
              </div>
              <a
                href="mailto:jonathan.dellasantina433@gmail.com"
                class="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors whitespace-nowrap"
              >
                jonathan.dellasantina433@gmail.com
              </a>
            </li>
            <li class="flex items-center gap-3 group">
              <div class="p-2 rounded-lg bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20 transition-colors shrink-0">
                <MapPin class="w-4 h-4" />
              </div>
              <span class="text-sm text-slate-600 dark:text-slate-400 truncate">
                Nîmes, France
              </span>
            </li>
          </ul>
        </div>

        <!-- Colonne 4 : Situation -->
        <div class="lg:col-span-3">
          <h3 class="font-bold text-sm uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700 dark:from-brand-400 dark:to-brand-600 mb-6">
            Situation
          </h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-3 group">
              <div class="p-2 rounded-lg bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20 transition-colors">
                <Briefcase class="w-4 h-4" />
              </div>
              <span class="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Ordisys Informatique
              </span>
            </li>
            <li class="flex items-center gap-3 group">
              <div class="p-2 rounded-lg bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20 transition-colors">
                <GraduationCap class="w-4 h-4" />
              </div>
              <span class="text-sm text-slate-600 dark:text-slate-400 mt-1">
                EPSI Montpellier
              </span>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Barre de copyright -->
    <div class="relative z-10 border-t border-slate-200/50 dark:border-slate-800/50 bg-white/5 dark:bg-slate-900/20 backdrop-blur-sm">
      <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p class="text-slate-500 dark:text-slate-400">
          &copy; {{ currentYear }} Jonathan DELLA SANTINA
        </p>
        <div class="flex items-center gap-4">
          <span class="text-slate-400 dark:text-slate-500 text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
            Nuxt 3 + Tailwind CSS
          </span>
          <a
            href="#accueil"
            class="p-2 rounded-lg bg-brand-50 dark:bg-brand-500/10 text-brand-600 dark:text-brand-400 hover:bg-brand-100 dark:hover:bg-brand-500/20 hover:-translate-y-1 transition-all duration-300 group"
            aria-label="Retour en haut"
          >
            <ArrowUp class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowUp, Github, Linkedin, Mail, MapPin, Briefcase, GraduationCap } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À Propos', href: '#a-propos' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
]
</script>
