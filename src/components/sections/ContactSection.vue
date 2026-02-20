<template>
  <section id="contact" class="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 scroll-mt-20">
    <div class="max-w-5xl mx-auto px-4">
      <div v-motion-slide-up class="text-center space-y-4 mb-16">
        <h2 class="text-3xl md:text-4xl font-bold">
          Me <span class="text-brand-600 dark:text-brand-400">Contacter</span>
        </h2>
        <div class="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <CommonContactCard
          v-for="(contact, index) in contacts"
          :key="contact.title"
          :icon="contact.icon"
          :title="contact.title"
          :value="contact.value"
          :subtitle="contact.subtitle"
          :href="contact.href"
          :external="contact.external"
          :delay="index * 100"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Linkedin, MapPin, Github, ExternalLink } from 'lucide-vue-next'

const contacts = [
  {
    icon: Mail,
    title: 'Email',
    value: 'jonathan.dellasantina433@gmail.com',
    href: 'mailto:jonathan.dellasantina433@gmail.com',
    external: false,
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'Jonathan DELLA SANTINA',
    href: 'https://www.linkedin.com/in/jonathan-della-santina/',
    external: true,
  },
  {
    icon: MapPin,
    title: 'Localisation',
    value: 'Nîmes, France',
    subtitle: 'Occitanie',
    href: 'https://www.google.com/maps/place/Nîmes',
    external: true,
  },
]
</script>
