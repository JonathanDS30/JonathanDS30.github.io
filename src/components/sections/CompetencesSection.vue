<template>
  <section id="competences" class="py-16 md:py-20 border-t border-slate-200/60 dark:border-slate-800/60 scroll-mt-20">
    <div class="max-w-6xl mx-auto px-4">
      <h2 v-motion-fade-up class="text-2xl md:text-3xl font-extrabold">Compétences</h2>

      <div class="mt-8 grid md:grid-cols-3 gap-6">
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
        tags: ['Win 10/11', 'Win Server 2012-2022', 'AD'],
      },
      {
        icon: 'Terminal',
        label: 'Linux',
        tags: ['Debian', 'Ubuntu', 'Linux Mint'],
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
