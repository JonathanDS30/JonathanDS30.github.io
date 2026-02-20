<template>
  <section id="accueil" class="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
    <!-- Fond Mesh Gradient lisse -->
    <div class="absolute inset-0 bg-mesh-gradient opacity-60 animate-breathe pointer-events-none"></div>

    <div class="max-w-4xl mx-auto px-4 py-8 md:py-12 relative z-10">
      <div class="flex flex-col items-center text-center gap-5">
        
        <!-- Photo (Blob) -->
        <div v-motion-slide-down class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-brand-400 to-brand-600 rounded-blob blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative w-48 h-48 md:w-56 md:h-56 rounded-blob overflow-hidden border-4 border-white/10 dark:border-slate-800/50 shadow-2xl transition-all duration-500 hover:scale-105">
            <img
              src="/img/me.png"
              alt="Jonathan DELLA SANTINA"
              class="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>

        <!-- Contenu -->
        <div v-motion-slide-up class="space-y-4 flex flex-col items-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Jonathan<br />
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-300">DELLA SANTINA</span>
          </h1>

          <p class="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
            Ingénieur Systèmes et Réseaux passionné par la philosophie DevSecOps
          </p>

          <!-- Badges glassmorphism -->
          <div class="flex flex-wrap justify-center gap-3">
            <UiGlassBadge color="indigo">
              <template #icon>
                <GraduationCap class="w-4 h-4" />
              </template>
              MSc Student @ EPSI
            </UiGlassBadge>
            <UiGlassBadge color="emerald">
              <template #icon>
                <Briefcase class="w-4 h-4" />
              </template>
              Ingénieur Systèmes et Réseaux @ Ordisys
            </UiGlassBadge>
          </div>

          <!-- Liens sociaux -->
          <div class="flex flex-wrap items-center justify-center gap-3 pt-4">
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
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GraduationCap, Briefcase, Github, Linkedin, Mail } from 'lucide-vue-next'
</script>

<style scoped>
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400;
}

/* Animation Blob pour l'image */
.rounded-blob {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: morph 8s ease-in-out infinite;
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

/* Animation douce pour le fond mesh */
@keyframes breathe {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

.animate-breathe {
  animation: breathe 10s ease-in-out infinite;
  transform-origin: center;
}
</style>
