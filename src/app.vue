<template>
  <div class="min-h-screen flex flex-col relative overflow-x-hidden">
    <!-- Background global avec mesh gradient -->
    <div class="fixed inset-0 bg-mesh opacity-80 dark:opacity-30 pointer-events-none" />

    <!-- Deux halos statiques : même ambiance, sans animations permanentes ni 5 couches floutées à composer -->
    <div class="fixed -top-20 -right-20 w-[500px] h-[500px] bg-brand-300/50 dark:bg-brand-500/20 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
    <div class="fixed bottom-0 -left-20 w-[400px] h-[400px] bg-brand-200/60 dark:bg-brand-400/15 rounded-full blur-[90px] pointer-events-none" aria-hidden="true" />

    <LayoutTheHeader />
    <main class="flex-1 relative z-10">
      <NuxtPage />
    </main>
    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'overflow-x-hidden'
  }
})
</script>
