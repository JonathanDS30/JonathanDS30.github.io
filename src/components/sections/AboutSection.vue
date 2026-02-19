<template>
  <section id="a-propos" class="py-20 md:py-32 relative">
    <div class="max-w-4xl mx-auto px-4">
      <div v-motion-slide-up class="space-y-8">
        <div class="text-center space-y-4">
          <h2 class="text-3xl md:text-4xl font-bold">
            À <span class="text-brand-600 dark:text-brand-400">Propos</span>
          </h2>
          <div class="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <UiGlassCard class="space-y-6 p-8 md:p-10">
          <p class="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Actuellement en formation
            <strong class="text-slate-900 dark:text-slate-100">Bac+5 à l'EPSI</strong>
            (MSc <em>Expert en Informatique et Systèmes d'Information</em>) et en alternance chez
            <strong class="text-slate-900 dark:text-slate-100">Ordisys</strong>, je développe
            mes compétences autour des pratiques
            <strong class="text-brand-600 dark:text-brand-400">DevSecOps</strong>, de l'automatisation
            et de la gestion d'infrastructures.
          </p>
          
          <p class="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Mon objectif est de concevoir, déployer et maintenir des systèmes robustes et sécurisés. 
            Je suis particulièrement intéressé par l'intégration continue (CI/CD), l'infrastructure as code (IaC) 
            et la conteneurisation, qui sont au cœur des enjeux technologiques actuels.
          </p>

          <p class="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
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
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiGlassCard from '../ui/GlassCard.vue'
</script>
