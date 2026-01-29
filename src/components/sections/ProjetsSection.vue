<template>
  <section id="projets" class="py-16 md:py-20 scroll-mt-20">
    <div class="max-w-6xl mx-auto px-4">
      <div v-motion-fade-up class="flex items-center justify-between gap-4 mb-8">
        <div class="flex items-center gap-3">
          <h2 class="text-2xl md:text-3xl font-extrabold">
            Les 4 derniers projets de mon GitHub
          </h2>
        </div>
        <a
          :href="`https://github.com/${GH_USER}`"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 dark:text-brand-400 dark:hover:text-brand-300 transition"
        >
          <span>GitHub</span>
          <ExternalLink class="w-4 h-4" />
        </a>
      </div>

      <!-- Chargement -->
      <div v-if="isLoading" class="mt-8 text-center py-8">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-600" />
        <p class="mt-2 text-slate-600 dark:text-slate-400">
          Chargement des projets...
        </p>
      </div>

      <!-- Erreur -->
      <div v-else-if="error" class="mt-8 text-center py-8">
        <p class="text-slate-600 dark:text-slate-400">{{ error }}</p>
        <a
          :href="`https://github.com/${GH_USER}`"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-2 inline-flex items-center gap-1.5 text-brand-700 hover:text-brand-800 dark:text-brand-400"
        >
          <span>Voir sur GitHub</span>
          <ExternalLink class="w-4 h-4" />
        </a>
      </div>

      <!-- Projets -->
      <div v-else class="mt-8 grid sm:grid-cols-2 gap-6">
        <CommonProjectCard
          v-for="(repo, index) in repos"
          :key="repo.id"
          :repo="repo"
          :delay="index * 100"
          :format-date="formatDate"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'

const { repos, isLoading, error, formatDate, GH_USER } = useGitHubProjects()
</script>
