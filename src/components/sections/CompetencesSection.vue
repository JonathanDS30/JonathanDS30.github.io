<template>
  <section id="competences" class="py-16 md:py-20 border-t border-slate-800/60 scroll-mt-20 relative overflow-hidden">
    <!-- Effet de lueur en arrière-plan -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <div v-motion-slide-up class="text-center space-y-4 mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white">
          Mes <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Compétences</span>
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-brand-400 to-brand-600 mx-auto rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CommonSkillCard
          v-for="(skill, index) in skills"
          :key="skill.title"
          :icon="skill.icon"
          :title="skill.title"
          :categories="skill.categories"
          :color="skill.color"
          :delay="index * 100"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Server, Shield, HardDrive, Cloud, Code2, Activity } from 'lucide-vue-next'

const skills = [
  {
    icon: Server,
    title: 'Systèmes & Administration',
    color: 'blue' as const,
    categories: [
      {
        icon: 'Monitor',
        label: 'Windows',
        tags: ['Windows Clients', 'Windows Server'],
      },
      {
        icon: 'Terminal',
        label: 'Linux',
        tags: ['Debian', 'Ubuntu', 'Linux Mint', 'Rocky'],
      },
    ],
  },
  {
    icon: Shield,
    title: 'Réseaux & Sécurité',
    color: 'emerald' as const,
    categories: [
      {
        icon: 'Network',
        label: 'Protocoles',
        tags: ['TCP/IP', 'DNS', 'DHCP', 'VLAN', 'VPN'],
      },
      {
        icon: 'ShieldCheck',
        label: 'Pare-feu',
        tags: ['pfSense', 'Fortinet', 'Stormshield', 'Sophos'],
      },
    ],
  },
  {
    icon: HardDrive,
    title: 'Virtualisation & Infrastructure',
    color: 'violet' as const,
    categories: [
      {
        icon: 'Box',
        label: 'Hyperviseurs',
        tags: ['Proxmox', 'ESXi', 'Hyper-V'],
      },
      {
        icon: 'Globe',
        label: 'Services',
        tags: ['Apache', 'FTP', 'MySQL', 'MariaDB'],
      },
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure as Code',
    color: 'cyan' as const,
    categories: [
      {
        icon: 'Code',
        label: 'IaC',
        tags: ['Terraform', 'Ansible', 'Packer'],
      },
      {
        icon: 'CloudCog',
        label: 'Cloud Providers',
        tags: ['AWS', 'Azure', 'Oracle Cloud'],
      },
    ],
  },
  {
    icon: Code2,
    title: 'Développement & Scripting',
    color: 'amber' as const,
    categories: [
      {
        icon: 'TerminalSquare',
        label: 'Langages',
        tags: ['PowerShell', 'Python', 'Bash', 'SQL'],
      },
      {
        icon: 'Database',
        label: 'Data & BI',
        tags: ['Apache Spark', 'Power BI', 'JasperSoft'],
      },
    ],
  },
  {
    icon: Activity,
    title: 'Monitoring & Observabilité',
    color: 'rose' as const,
    categories: [
      {
        icon: 'Eye',
        label: 'Supervision',
        tags: ['Zabbix', 'Centreon'],
      },
      {
        icon: 'BarChart3',
        label: 'Observabilité',
        tags: ['ELK Stack', 'Prometheus', 'Grafana'],
      },
    ],
  },
]
</script>
