<template>
  <div class="min-h-screen flex flex-col relative">
    <!-- Background global avec mesh gradient -->
    <div class="fixed inset-0 bg-mesh opacity-80 dark:opacity-30 pointer-events-none" />

    <!-- Blobs animés - optimisés avec will-change et content-visibility -->
    <div class="fixed -top-20 -right-20 w-[500px] h-[500px] bg-brand-300/50 dark:bg-brand-500/20 rounded-full blur-[80px] animate-pulse-slow pointer-events-none will-change-transform" aria-hidden="true" />
    <div class="fixed top-1/4 -left-20 w-[400px] h-[400px] bg-brand-200/60 dark:bg-brand-400/15 rounded-full blur-[60px] animate-float pointer-events-none will-change-transform" aria-hidden="true" />
    <div class="fixed top-1/2 right-0 w-[450px] h-[450px] bg-brand-300/40 dark:bg-brand-500/10 rounded-full blur-[100px] pointer-events-none will-change-transform" aria-hidden="true" />
    <div class="fixed bottom-0 left-1/3 w-[350px] h-[350px] bg-brand-200/50 dark:bg-brand-400/10 rounded-full blur-[70px] animate-pulse-slow pointer-events-none will-change-transform" aria-hidden="true" />
    <div class="fixed top-2/3 left-0 w-[300px] h-[300px] bg-brand-400/30 dark:bg-brand-500/15 rounded-full blur-[90px] animate-float pointer-events-none will-change-transform" aria-hidden="true" />

    <LayoutTheHeader />
    <main class="flex-1 relative z-10">
      <NuxtPage />
    </main>
    <LayoutTheFooter />
  </div>
</template>
