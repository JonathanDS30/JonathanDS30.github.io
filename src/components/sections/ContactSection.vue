<template>
  <section id="contact" class="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/60 scroll-mt-20">
    <div class="max-w-5xl mx-auto px-4">
      <div v-motion-fade-up class="text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-extrabold">Contact</h2>
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
