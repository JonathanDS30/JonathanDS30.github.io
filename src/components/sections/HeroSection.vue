<template>
  <section id="accueil" class="relative min-h-screen flex items-center pt-16">
    <div class="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div class="grid md:grid-cols-2 items-center gap-12">
        <!-- Contenu -->
        <div v-motion-slide-left class="space-y-6">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Jonathan<br />
            <span class="text-gradient">DELLA SANTINA</span>
          </h1>

          <p class="text-lg text-slate-600 dark:text-slate-300">
            Technicien Informatique passionné par la philosophie DevSecOps
          </p>

          <!-- Badges glassmorphism -->
          <div class="flex flex-wrap gap-3">
            <GlassBadge color="indigo">
              <template #icon>
                <GraduationCap class="w-4 h-4" />
              </template>
              MSc Student @ EPSI
            </GlassBadge>
            <GlassBadge color="emerald">
              <template #icon>
                <Briefcase class="w-4 h-4" />
              </template>
              Technicien @ Ordisys
            </GlassBadge>
          </div>

          <!-- Texte À propos -->
          <UiGlassCard class="space-y-4">
            <p class="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Actuellement en formation
              <strong class="text-slate-900 dark:text-slate-100">Bac+5 à l'EPSI</strong>
              (MSc <em>Expert en Informatique et Systèmes d'Information</em>) et en alternance chez
              <strong class="text-slate-900 dark:text-slate-100">Ordisys</strong>, je développe
              mes compétences autour des pratiques
              <strong class="text-brand-600 dark:text-brand-400">DevSecOps</strong>, de l'automatisation
              et de la gestion d'infrastructures.
            </p>
            <p class="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              En parallèle, j'expérimente sur mon
              <strong class="text-slate-900 dark:text-slate-100">Homelab</strong>, où je mets en pratique
              les notions apprises et explore différents outils autour du
              <strong class="text-brand-600 dark:text-brand-400">cloud</strong>, de la
              <strong class="text-brand-600 dark:text-brand-400">sécurité</strong>
              et de
              <strong class="text-brand-600 dark:text-brand-400">l'automatisation</strong>.
              Je m'appuie notamment sur le parcours de formation de
              <a
                href="https://blog.stephane-robert.info/docs/"
                class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-500 font-semibold underline decoration-brand-600/30 hover:decoration-brand-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >Stéphane Robert</a>, qui constitue pour moi une véritable référence dans le domaine du DevSecOps.
            </p>
          </UiGlassCard>

          <!-- Liens sociaux -->
          <div class="flex items-center gap-4">
            <UiGlassButton
              href="https://github.com/JonathanDS30"
              external
              variant="ghost"
              size="sm"
            >
              <Github class="w-4 h-4" />
              GitHub
            </UiGlassButton>
            <UiGlassButton
              href="https://www.linkedin.com/in/jonathan-della-santina/"
              external
              variant="ghost"
              size="sm"
            >
              <Linkedin class="w-4 h-4" />
              LinkedIn
            </UiGlassButton>
            <UiGlassButton
              href="mailto:jonathan.dellasantina433@gmail.com"
              variant="ghost"
              size="sm"
            >
              <Mail class="w-4 h-4" />
              Email
            </UiGlassButton>
          </div>
        </div>

        <!-- Photo -->
        <div v-motion-slide-right class="relative">
          <UiGlassCard class="overflow-hidden !p-0" glow>
            <img
              src="/img/Sidstappen.jpg"
              alt="Jonathan DELLA SANTINA"
              class="w-full h-full object-cover"
              loading="eager"
            />
          </UiGlassCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GraduationCap, Briefcase, Github, Linkedin, Mail } from 'lucide-vue-next'
</script>
