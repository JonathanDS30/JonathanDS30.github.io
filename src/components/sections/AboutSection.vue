<template>
  <section id="a-propos" class="py-20 md:py-32 relative border-t border-slate-800/60">
    <!-- Effet de lueur en arrière-plan -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <div v-motion-slide-up class="space-y-12">
        <!-- Titre de section -->
        <div class="text-center space-y-4">
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            À <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Propos</span>
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-brand-400 to-brand-600 mx-auto rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
        </div>

        <!-- Split Layout -->
        <div class="grid md:grid-cols-12 gap-8 items-start">
          
          <!-- Colonne Gauche : Photo -->
          <div class="md:col-span-5 lg:col-span-4 relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-brand-400 to-brand-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div class="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 backdrop-blur-xl aspect-[4/5]">
              <img
                src="/img/Sidstappen.jpg"
                alt="Jonathan DELLA SANTINA"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <!-- Overlay subtil en bas de l'image -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            </div>
          </div>

          <!-- Colonne Droite : Contenu -->
          <div class="md:col-span-7 lg:col-span-8 space-y-6">
            
            <!-- Cartes d'information (Formation & Entreprise) -->
            <div class="grid sm:grid-cols-2 gap-4">
              <!-- Carte Formation -->
              <div class="bg-slate-900/80 backdrop-blur-xl rounded-xl p-5 border border-slate-800 hover:border-indigo-500/50 transition-colors group">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <GraduationCap class="w-5 h-5" />
                  </div>
                  <h3 class="font-bold text-slate-100">Formation</h3>
                </div>
                <p class="text-sm text-slate-400">
                  <strong class="text-slate-200">Bac+5 à l'EPSI</strong><br/>
                  MSc Expert en Informatique et SI
                </p>
              </div>

              <!-- Carte Entreprise -->
              <div class="bg-slate-900/80 backdrop-blur-xl rounded-xl p-5 border border-slate-800 hover:border-emerald-500/50 transition-colors group">
                <div class="flex items-center gap-3 mb-2">
                  <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Briefcase class="w-5 h-5" />
                  </div>
                  <h3 class="font-bold text-slate-100">Expérience</h3>
                </div>
                <p class="text-sm text-slate-400">
                  <strong class="text-slate-200">Alternance chez Ordisys</strong><br/>
                  Ingénieur Systèmes et Réseaux
                </p>
              </div>
            </div>

            <!-- Texte de présentation -->
            <div class="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-slate-800 space-y-5">
              <p class="text-slate-300 leading-relaxed">
                Je développe mes compétences autour des pratiques
                <strong class="text-brand-400 font-semibold">DevSecOps</strong>, de l'automatisation
                et de la gestion d'infrastructures. Mon objectif est de concevoir, déployer et maintenir des systèmes robustes et sécurisés.
              </p>
              
              <p class="text-slate-300 leading-relaxed">
                Je suis particulièrement intéressé par l'<strong class="text-slate-200">intégration continue (CI/CD)</strong>, 
                l'<strong class="text-slate-200">infrastructure as code (IaC)</strong> 
                et la <strong class="text-slate-200">conteneurisation</strong>, qui sont au cœur des enjeux technologiques actuels.
              </p>

              <p class="text-slate-300 leading-relaxed">
                En parallèle, j'expérimente sur mon
                <strong class="text-brand-400 font-semibold">Homelab</strong>, où je mets en pratique
                les notions apprises et explore différents outils autour du
                <strong class="text-emerald-400 font-semibold">cloud</strong>, de la
                <strong class="text-emerald-400 font-semibold">sécurité</strong>
                et de
                <strong class="text-emerald-400 font-semibold">l'automatisation</strong>.
                Je m'appuie notamment sur le parcours de formation de
                <a
                  href="https://blog.stephane-robert.info/docs/"
                  class="text-brand-400 hover:text-brand-300 font-semibold underline decoration-brand-500/30 hover:decoration-brand-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >Stéphane Robert</a>, qui constitue pour moi une véritable référence.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { GraduationCap, Briefcase } from 'lucide-vue-next'
</script>
