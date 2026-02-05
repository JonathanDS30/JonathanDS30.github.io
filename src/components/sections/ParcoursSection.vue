<template>
  <section id="parcours" class="py-16 md:py-20 scroll-mt-20">
    <div class="max-w-6xl mx-auto px-4">
      <h2 v-motion-fade-up class="text-2xl md:text-3xl font-extrabold text-center mb-12">
        Mon parcours
      </h2>

      <!-- Timeline -->
      <div class="relative grid grid-cols-1 gap-8 md:gap-12">
        <!-- Ligne verticale centrale -->
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-500/50 via-brand-600/30 to-brand-500/50 -translate-x-1/2 rounded-full" />

        <!-- Timeline items -->
        <CommonTimelineItem
          v-for="(item, index) in timelineItems"
          :key="index"
          :position="item.position"
          :type="item.type"
          :period="item.period"
          :title="item.title"
          :organization="item.organization"
          :subtitle="item.subtitle"
          :details="item.details"
          :margin-class="item.marginClass"
          :delay="index * 100"
          @select="openDetail(index, $event)"
        />
      </div>
    </div>

    <!-- Detail Modal -->
    <CommonDetailModal
      :is-open="isModalOpen"
      :type="selectedItem?.type ?? 'experience'"
      :period="selectedItem?.period ?? ''"
      :title="selectedItem?.title ?? ''"
      :organization="selectedItem?.organization ?? ''"
      :subtitle="selectedItem?.subtitle ?? ''"
      :details="selectedItem?.details ?? []"
      @close="closeDetail"
      @after-leave="onModalClosed"
    />
  </section>
</template>

<script setup lang="ts">
interface TimelineItemData {
  position: 'left' | 'right'
  type: 'experience' | 'formation'
  period: string
  title: string
  organization: string
  subtitle: string
  details: string[]
  marginClass?: string
}

const selectedItem = ref<TimelineItemData | null>(null)
const isModalOpen = ref(false)
const triggerElement = ref<HTMLElement | null>(null)

const openDetail = (index: number, event: MouseEvent) => {
  triggerElement.value = (event.currentTarget || event.target) as HTMLElement
  selectedItem.value = timelineItems[index]
  isModalOpen.value = true
}

const closeDetail = () => {
  isModalOpen.value = false
}

const onModalClosed = () => {
  selectedItem.value = null
  triggerElement.value?.focus()
  triggerElement.value = null
}

const timelineItems: TimelineItemData[] = [
  {
    position: 'left',
    type: 'experience',
    period: 'sept. 2025 - aujourd\'hui',
    title: 'Technicien informatique',
    organization: 'Ordisys Informatique - Nîmes',
    subtitle: 'Contrat d\'Apprentissage',
    marginClass: 'mb-8 md:mb-0',
    details: [
      'Interventions sur site et à distance (<strong>support N1/N2</strong>).',
      'Déploiement et configuration de postes de travail (<strong>Windows 10/11</strong>) et périphériques selon les procédures clients.',
      'Administration des systèmes et réseaux : <strong>GPO</strong>, <strong>Office 365</strong>, <strong>VLAN</strong>, <strong>Asterisk</strong>, <strong>pare-feux</strong>.',
      'Amélioration continue des <strong>procédures</strong> et de la <strong>documentation</strong>.',
    ],
  },
  {
    position: 'right',
    type: 'formation',
    period: '2024 - 2026 (en cours)',
    title: 'MSc Expert en Informatique & Systèmes d\'Information',
    organization: 'EPSI - Montpellier',
    subtitle: 'Option Infrastructure & Cloud',
    marginClass: 'md:-mt-36',
    details: [
      'Projet <strong><a href="https://github.com/JonathanDS30/iac-atp-infra" target="_blank" rel="noopener noreferrer" class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-500 underline decoration-2">MSPR "ATP Infrastructure"</a></strong> (<strong>Proxmox, Packer, Terraform, Ansible</strong>)',
      'Sécurité réseau et routage inter-sites (<strong>pfSense, VPN, PCA/PRA</strong>).',
      'Projets <strong>ETL</strong> (<a href="https://github.com/JonathanDS30/OpenFoodsFact-Project" target="_blank" rel="noopener noreferrer" class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-500 underline decoration-2">Java</a>/<a href="https://github.com/Foufou-exe/finegourmet" target="_blank" rel="noopener noreferrer" class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-500 underline decoration-2">Python</a> - Apache Spark) et <strong>Data Viz</strong> (<a href="/img/dashboard_finegourmet.jpg" target="_blank" class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-500 underline decoration-2">Power BI</a>, <a href="https://github.com/JonathanDS30/Optimized-Rental-Yield-Visualization-for-Occitanie-Region" target="_blank" rel="noopener noreferrer" class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-500 underline decoration-2">JasperReports</a>).',
    ],
  },
  {
    position: 'left',
    type: 'experience',
    period: 'août 2023 - sept. 2025',
    title: 'Assistant technique',
    organization: 'Ordisys Informatique - Nîmes',
    subtitle: 'Contrat d\'Apprentissage',
    marginClass: 'mb-8 md:mb-0 md:-mt-24',
    details: [
      'Gestion des identités (<strong>Active Directory</strong>, <strong>Office 365</strong>).',
      'Maintenance préventive et support technique (<strong>N1</strong>).',
      'Collaboration projets pour l\'optimisation des <strong>réseaux clients</strong>.',
    ],
  },
  {
    position: 'right',
    type: 'formation',
    period: '2023 - 2024',
    title: 'Licence (L3) Informatique générale',
    organization: 'CNAM Occitanie - Montpellier',
    subtitle: 'Certificat Analyste en cybersécurité',
    marginClass: 'mb-8 md:mb-0 md:-mt-24',
    details: [
      'Architectures réseau et sécurité (TCP/IP, VLAN, AAA, ISO 27001).',
      'Analyse de risques <strong>EBIOS</strong> pour Ordisys.',
      'Script <strong>PowerShell</strong> d\'audit des postes Windows.',
      '<strong>CTF</strong> et exercices (Kali, Nmap, Nikto, Hydra).',
    ],
  },
  {
    position: 'left',
    type: 'formation',
    period: '2020 - 2022',
    title: 'BTS Services Informatiques aux Organisations',
    organization: 'Lycée CCI Gard - Nîmes',
    subtitle: 'Option SISR (Solutions d\'Infrastructure et Systèmes Réseaux)',
    marginClass: 'mb-8 md:mb-0 md:-mt-24',
    details: [
      'Pare-feu <strong>Stormshield</strong>, AD/DHCP sur Windows Server.',
      'Serveur <strong>FOG</strong> et supervision <strong>Zabbix</strong>.',
      'GLPI + OCS Inventory pour tickets et inventaire.',
      'Environnements <strong>Debian 11</strong> et <strong>Windows Server 2019</strong>.',
    ],
  },
  {
    position: 'right',
    type: 'formation',
    period: '2016 - 2020',
    title: 'Bac Pro Systèmes Numériques',
    organization: 'Lycée Jules Raimu - Nîmes',
    subtitle: 'Option RISC (Réseaux Informatiques et Systèmes Communicants)',
    marginClass: 'md:-mt-24',
    details: [
      'Cisco (VLAN, QoS, routage).',
      '<strong>Windows Server 2012/2016</strong> : AD/DNS/DHCP.',
      'Services <strong>Linux Debian</strong> (Apache, FTP, Samba).',
    ],
  },
]
</script>
