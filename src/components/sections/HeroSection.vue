<template>
  <section 
    id="accueil" 
    class="relative min-h-screen flex items-center justify-center pt-16 hero-section"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Wrapper des arrière-plans avec un masque de fondu vers le bas pour une transition douce -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none fade-out-bottom z-0">
      
      <!-- Canvas interactif pour la grille de points qui s'aspire/repousse -->
      <canvas ref="heroCanvas" class="absolute inset-0 w-full h-full pointer-events-auto"></canvas>

      <!-- Aurores boréales animées avec opacité réduite pour la lisibilité -->
      <div class="aurora-container absolute inset-0 pointer-events-none opacity-30 dark:opacity-40 mix-blend-lighten">
        <div class="aurora-blob blob-1"></div>
        <div class="aurora-blob blob-2"></div>
        <div class="aurora-blob blob-3"></div>
      </div>

      <!-- Filtre assombrissant/éclaircissant radial au centre pour détacher le texte -->
      <div class="absolute inset-0 bg-white/40 dark:bg-slate-950/60 pointer-events-none z-0 mask-radial-center"></div>

      <!-- Fond Mesh Gradient existant en retrait -->
      <div class="absolute inset-0 bg-mesh-gradient opacity-20 animate-breathe pointer-events-none z-0"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 py-8 md:py-12 relative z-10">
      <div class="flex flex-col items-center text-center gap-5">
        
        <!-- Photo (Blob) -->
        <div v-motion-slide-down class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-brand-400 to-brand-600 rounded-blob blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative w-48 h-48 md:w-56 md:h-56 rounded-blob overflow-hidden border-4 border-white/10 dark:border-slate-800/50 shadow-2xl transition-all duration-500 hover:scale-105">
            <NuxtImg
              src="/img/me.png"
              alt="Jonathan DELLA SANTINA"
              class="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
              format="webp"
              width="448"
              height="448"
            />
          </div>
        </div>

        <!-- Contenu -->
        <div v-motion-slide-up class="space-y-4 flex flex-col items-center drop-shadow-md">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white drop-shadow-lg">
            Jonathan<br />
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-brand-500 to-brand-300 dark:from-brand-400 dark:to-brand-200">DELLA SANTINA</span>
          </h1>

          <p class="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-200 max-w-2xl drop-shadow-sm">
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
              Work @ Ordisys
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
import { ref, onMounted, onUnmounted } from 'vue'
import { GraduationCap, Briefcase, Github, Linkedin, Mail } from 'lucide-vue-next'

const mouseX = ref(-9999)
const mouseY = ref(-9999)
const heroCanvas = ref<HTMLCanvasElement | null>(null)
let animationFrameId: number
let resizeHandler: () => void

const handleMouseMove = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement
  if (!target) return
  
  const rect = target.getBoundingClientRect()
  mouseX.value = event.clientX - rect.left
  mouseY.value = event.clientY - rect.top
}

const handleMouseLeave = () => {
  mouseX.value = -9999
  mouseY.value = -9999
}

onMounted(() => {
  const cv = heroCanvas.value
  if (!cv) return
  const cx = cv.getContext('2d')
  if (!cx) return
  
  let W = 0, H = 0
  
  resizeHandler = () => {
    const r = cv.getBoundingClientRect()
    W = cv.width = r.width * window.devicePixelRatio
    H = cv.height = r.height * window.devicePixelRatio
  }
  
  window.addEventListener('resize', resizeHandler)
  resizeHandler()
  
  const drawDotGrid = () => {
    const dpr = window.devicePixelRatio
    const step = 22 * dpr
    const baseR = 1.1 * dpr
    const effectR = 100 * dpr // Rayon du trou noir
    const maxPush = -38 * dpr // L'aspiration des points vers le centre (-38 au lieu de 38 pour aspirer)
    
    for (let x = step/2; x < W; x += step) {
      for (let y = step/2; y < H; y += step) {
        const currentMx = mouseX.value * dpr
        const currentMy = mouseY.value * dpr
        const dx = x - currentMx
        const dy = y - currentMy
        const dist = Math.sqrt(dx*dx + dy*dy)
        
        let ox = 0, oy = 0
        if (currentMx > -900 && dist < effectR && dist > 0.1) {
          const ratio = 1 - dist / effectR
          const force = Math.pow(ratio, 1.8) * maxPush
          ox = (dx / dist) * force
          oy = (dy / dist) * force
        }
        
        // Couleur neutre des points pour mode clair et sombre (slate-400 translucide)
        cx.fillStyle = 'rgba(148, 163, 184, 0.25)' 
        cx.beginPath()
        cx.arc(x + ox, y + oy, baseR, 0, Math.PI*2)
        cx.fill()
      }
    }
  }
  
  const frame = () => {
    cx.clearRect(0, 0, W, H)
    drawDotGrid()
    animationFrameId = requestAnimationFrame(frame)
  }
  
  frame()
})

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  if (resizeHandler) window.removeEventListener('resize', resizeHandler)
})
</script>

<style scoped>
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400;
}

.hero-section {
  position: relative;
}

/* Fondu doux vers le bas pour ne pas avoir de coupure abrupte avec la section suivante */
.fade-out-bottom {
  mask-image: linear-gradient(to bottom, black 0%, black 75%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 0%, black 75%, transparent 100%);
}

/* Filtre radial pour améliorer la lisibilité du texte au centre */
.mask-radial-center {
  mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
  -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
}

/* Conteneur Aurore */
.aurora-container {
  overflow: hidden;
  z-index: -1;
}

.aurora-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  animation: float 12s infinite alternate ease-in-out;
  pointer-events: none;
}

.blob-1 {
  width: 60vw;
  height: 40vh;
  /* Couleurs originales: Bleu au Violet */
  background: linear-gradient(to right, #4a00e0, #8e2de2);
  bottom: 0;
  left: -10%;
  animation-delay: 0s;
}

.blob-2 {
  width: 50vw;
  height: 50vh;
  /* Couleurs originales: Cyber Bleu */
  background: linear-gradient(to right, #00c6ff, #0072ff);
  bottom: -10%;
  right: -5%;
  animation-delay: -3s;
}

.blob-3 {
  width: 40vw;
  height: 30vh;
  /* Couleurs originales: Violet pop */
  background: #a132fa;
  bottom: 10%;
  left: 30%;
  animation-delay: -6s;
}

/* Flottaison des blobs */
@keyframes float {
  0% { transform: translateY(0) scale(1); opacity: 0.6; }
  50% { transform: translateY(-30px) scale(1.1); opacity: 0.9; }
  100% { transform: translateY(20px) scale(0.9); opacity: 0.7; }
}

/* Animation Blob pour l'image */
.rounded-blob {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: morph 8s ease-in-out infinite;
  will-change: border-radius, transform;
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
  will-change: opacity, transform;
}
</style>
