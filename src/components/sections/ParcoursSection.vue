<template>
  <section id="parcours" class="py-16 md:py-20 scroll-mt-20">
    <div class="max-w-6xl mx-auto px-4">
      <div v-motion-slide-up class="text-center space-y-4 mb-16">
        <h2 class="text-3xl md:text-4xl font-bold">
          Mon <span class="text-brand-600 dark:text-brand-400">Parcours</span>
        </h2>
        <div class="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
      </div>

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
      :details="selectedItem?.extendedDetails ?? []"
      @close="closeDetail"
      @after-leave="onModalClosed"
    />
  </section>
</template>

<script setup lang="ts">
interface DetailSection {
  title: string
  intro?: string
  points: string[]
}

interface TimelineItemData {
  position: 'left' | 'right'
  type: 'experience' | 'formation'
  period: string
  title: string
  organization: string
  subtitle: string
  details: string[]
  extendedDetails: DetailSection[]
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

const timelineItems: readonly TimelineItemData[] = Object.freeze([
  {
    position: 'left',
    type: 'experience',
    period: 'sept. 2025 - aujourd\'hui',
    title: 'Apprenti Ingénieur Systèmes et Réseaux',
    organization: 'Ordisys Informatique - Nîmes',
    subtitle: 'Contrat d\'Apprentissage',
    marginClass: 'mb-8 md:mb-0',
    details: [
      'Traitement de tickets <strong>N2</strong> : Windows Server, Linux, pare-feux.',
      '<strong>Référent unique</strong> sur la solution VoIP OrdiSIP (téléphonie interne).',
      'Services <strong>AD</strong>, pare-feux (<strong>Fortigate, Sophos, Stormshield</strong>), <strong>SD-WAN</strong>.',
    ],
    extendedDetails: [
      {
        title: 'Montée en responsabilité',
        intro: 'Passage d\'assistant à Ingénieur Systèmes et Réseaux au sein de l\'équipe technique, avec des responsabilités élargies :',
        points: [
          'Traitement autonome de tickets <strong>N2</strong> impliquant Windows Server, Linux et des interventions sur l\'infrastructure réseau.',
          'Déploiement de nouveaux postes selon les procédures spécifiques à chaque client, installation et configuration de services <strong>AD</strong> (DHCP, DNS, GPO).',
          'Gestion de pare-feux (<strong>Fortigate, Sophos, Stormshield</strong>) : règles de filtrage, traffic shaping, mise en place de <strong>SD-WAN</strong> (failover entre lien principal et lien de secours).',
        ],
      },
      {
        title: 'Référent solution VoIP OrdiSIP',
        intro: 'Suite au départ du responsable technique, j\'ai assuré la continuité d\'une solution critique :',
        points: [
          '<strong>Seul référent</strong> sur OrdiSIP, solution de téléphonie IP développée en interne, déployée chez les clients et en interne chez Ordisys.',
          'Formation accélérée par l\'ancien responsable, puis <strong>rédaction complète de la documentation</strong> de gestion de la solution (inexistante auparavant).',
          'Interventions sur site pour le déploiement de nouveaux téléphones et la maintenance de l\'infrastructure VoIP.',
        ],
      },
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
    extendedDetails: [
      {
        title: 'Infrastructure as Code & Cloud',
        intro: 'Passage d\'une logique de maintenance à une logique de conception automatisée :',
        points: [
          '<strong>Projet MSPR "ATP Infrastructure"</strong> : déploiement "Zero Touch" d\'une infrastructure via <strong>Terraform/Ansible</strong> sur Proxmox, avec templates VM Packer.',
          '<strong>Architecture haute disponibilité</strong> : conception de patterns Load Balancing et Failover simulés en lab (AWS, Azure).',
          '<strong>Data Engineering</strong> : création de pipelines ETL (<a href="https://github.com/JonathanDS30/OpenFoodsFact-Project" target="_blank" rel="noopener noreferrer" class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-500 underline decoration-2">Java</a>/<a href="https://github.com/Foufou-exe/finegourmet" target="_blank" rel="noopener noreferrer" class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-500 underline decoration-2">Python</a> avec Apache Spark) et dashboards <a href="/img/dashboard_finegourmet.jpg" target="_blank" class="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-500 underline decoration-2">Power BI</a> pour comprendre les enjeux Big Data sur l\'infrastructure.',
        ],
      },
      {
        title: 'Sécurité et résilience',
        points: [
          'Routage inter-sites et VPN site-to-site avec <strong>pfSense</strong>.',
          'Élaboration de plans de continuité (<strong>PCA</strong>) et de reprise d\'activité (<strong>PRA</strong>).',
        ],
      },
    ],
  },
  {
    position: 'left',
    type: 'experience',
    period: 'août 2023 - sept. 2025',
    title: 'Apprenti Assistant Technique',
    organization: 'Ordisys Informatique - Nîmes',
    subtitle: 'Contrat d\'Apprentissage',
    marginClass: 'mb-8 md:mb-0 md:-mt-24',
    details: [
      'Premier poste en alternance, intégration à l\'équipe <strong>DSI</strong>.',
      'Maintenance préventive annuelle sur <strong>60+ clients</strong> (PME, collectivités, santé).',
      'Script <strong>PowerShell</strong> d\'audit pour moderniser la collecte de données.',
    ],
    extendedDetails: [
      {
        title: 'Immersion en production',
        intro: 'Mon premier emploi dans l\'informatique. Intégré à l\'équipe DSI, j\'ai manipulé pour la première fois des serveurs Windows et Linux en production :',
        points: [
          'Gestion de droits et création de comptes sur <strong>Active Directory</strong> et <strong>Office 365</strong> (tickets N1 de la DSI).',
          'Prise en main à distance sur les postes clients pour le diagnostic et la résolution d\'incidents.',
          'Développement de <strong>soft skills</strong> essentiels : rigueur, communication, esprit d\'équipe au sein d\'une structure à taille humaine.',
        ],
      },
      {
        title: 'Audits et automatisation',
        intro: 'J\'ai participé aux phases d\'audit des nouveaux clients et apporté une amélioration concrète au processus :',
        points: [
          'Inventaire des équipements informatiques des nouveaux clients et <strong>cartographie réseau</strong> (réalisation des schémas réseau).',
          'Modernisation de la collecte de données : écriture d\'un <strong>script PowerShell</strong> générant un output adapté au Dossier Client Interne, remplaçant le relevé manuel.',
        ],
      },
      {
        title: 'Maintenance préventive',
        intro: 'Responsabilité de la maintenance annuelle sur un portefeuille conséquent :',
        points: [
          'Maintenance préventive sur site et à distance de <strong>plus de 60 clients</strong> : PME, collectivités (mairies), établissements de santé — parcs Windows et Mac.',
          'Rédaction de la <strong>procédure de maintenance préventive</strong> à destination des nouveaux techniciens, formalisant le processus pour l\'équipe.',
        ],
      },
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
      'Audit de sécurité <strong>EBIOS</strong> réalisé pour Ordisys.',
      '<strong>CTF</strong> et exercices pratiques (Kali, Nmap, Nikto, Hydra).',
    ],
    extendedDetails: [
      {
        title: 'Cybersécurité appliquée',
        intro: 'L\'année qui m\'a fait passer d\'un profil technicien à celui d\'analyste en cybersécurité :',
        points: [
          'Réalisation d\'un audit de sécurité en appliquant la méthode <strong>EBIOS</strong> pour Ordisys : identification des biens supports, sources de risques, scénarios stratégiques et opérationnels.',
          'Exercices pratiques de type <strong>CTF</strong> : Kali Linux, scans Nmap, tests de vulnérabilités Nikto, attaques par force brute Hydra.',
        ],
      },
      {
        title: 'Alternance et projets',
        intro: 'Rythme d\'une semaine en formation pour trois semaines en entreprise :',
        points: [
          '4 projets professionnels successifs développant l\'autonomie et la recherche de solutions sur des problématiques concrètes.',
          'Application directe des compétences cyber chez Ordisys, passage vers un rôle d\'<strong>analyste capable d\'auditer des systèmes</strong>.',
        ],
      },
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
      'Serveur <strong>FOG</strong>, supervision <strong>Zabbix</strong>, gestion de parc <strong>GLPI</strong>.',
    ],
    extendedDetails: [
      {
        title: 'Projets d\'infrastructure',
        intro: 'Conception et déploiement d\'infrastructures réseau complètes en environnement virtualisé :',
        points: [
          'Déploiement de serveurs <strong>Windows Server 2019</strong> (AD, DHCP, DNS, GPO) et serveur <strong>FOG</strong> pour le déploiement d\'images par le réseau.',
          'Supervision avec <strong>Zabbix</strong>, gestion de parc <strong>GLPI + OCS Inventory</strong>, pare-feux <strong>Stormshield</strong> (filtrage, NAT, VPN IPsec).',
          'Stage de <strong>10 semaines</strong> en entreprise, mise en pratique sur des problématiques réelles.',
        ],
      },
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
      'Bases réseaux <strong>Cisco</strong> (VLAN, routage, ACL).',
      'Administration <strong>Windows Server</strong> et <strong>Linux Debian</strong>.',
    ],
    extendedDetails: [
      {
        title: 'Les fondations',
        intro: 'La formation où j\'ai découvert ma passion pour les réseaux et l\'infrastructure :',
        points: [
          'Premiers pas sur des équipements <strong>Cisco</strong> (VLAN, QoS, routage RIP/OSPF) et administration de serveurs <strong>Windows Server</strong> / <strong>Linux Debian</strong>.',
          'Apprentissage du câblage réseau, du diagnostic de pannes et des protocoles fondamentaux (TCP/IP, DNS, DHCP).',
        ],
      },
    ],
  },
])
</script>
