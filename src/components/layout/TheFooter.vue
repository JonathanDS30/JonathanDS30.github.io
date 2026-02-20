<template>
  <footer class="glass-subtle border-t border-white/10 dark:border-white/5">
    <!-- Section principale -->
    <div class="max-w-6xl mx-auto px-4 py-10 md:py-12">
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">

        <!-- Logo et description -->
        <div class="flex-shrink-0">
          <div class="flex items-center gap-2.5 mb-4">
            <span class="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg">
              <span class="text-white text-sm font-bold">JDS</span>
            </span>
            <span class="font-bold text-lg">Jonathan DELLA SANTINA</span>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
            Ingénieur Systèmes et Réseaux passionné par la philosophie DevSecOps.
            Actuellement en MSc à l'EPSI et en alternance chez Ordisys.
          </p>

          <!-- Réseaux sociaux -->
          <div class="flex items-center gap-3 mt-5">
            <a
              href="https://github.com/JonathanDS30"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github class="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-della-santina/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin class="w-5 h-5" />
            </a>
            <a
              href="mailto:jonathan.dellasantina433@gmail.com"
              class="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:scale-110 transition-all"
              aria-label="Email"
            >
              <Mail class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Informations Contact & Situation -->
        <div class="flex flex-col sm:flex-row gap-8 sm:gap-12">
          <!-- Contact -->
          <div>
            <h3 class="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
              Contact
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-2">
                <Mail class="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:jonathan.dellasantina433@gmail.com"
                  class="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors break-all sm:break-normal"
                >
                  jonathan.dellasantina433@gmail.com
                </a>
              </li>
              <li class="flex items-center gap-2">
                <MapPin class="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                <span class="text-sm text-slate-600 dark:text-slate-400">
                  Nîmes, France
                </span>
              </li>
            </ul>
          </div>

          <!-- Situation -->
          <div>
            <h3 class="font-bold text-sm uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">
              Situation
            </h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-2">
                <Briefcase class="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                <span class="text-sm text-slate-600 dark:text-slate-400">
                  Ordisys Informatique
                </span>
              </li>
              <li class="flex items-center gap-2">
                <GraduationCap class="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                <span class="text-sm text-slate-600 dark:text-slate-400">
                  EPSI Montpellier
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Barre de copyright -->
    <div class="border-t border-slate-200/50 dark:border-slate-800/50">
      <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p class="text-slate-500 dark:text-slate-500">
          &copy; {{ currentYear }} Jonathan DELLA SANTINA
        </p>
        <div class="flex items-center gap-4">
          <span class="text-slate-400 dark:text-slate-600 text-xs">
            Nuxt 3 + Tailwind CSS
          </span>
          <a
            href="#accueil"
            class="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors inline-flex items-center gap-1 group"
          >
            <ArrowUp class="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowUp, Github, Linkedin, Mail, MapPin, Briefcase, GraduationCap } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>
