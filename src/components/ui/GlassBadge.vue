<template>
  <span :class="['glass-badge', colorClasses]">
    <slot name="icon" />
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{
  color?: 'default' | 'brand' | 'emerald' | 'indigo'
}>()

const colorClasses = computed(() => {
  switch (props.color) {
    case 'brand':
      return 'bg-brand-500/10 border-brand-500/20 text-brand-600 dark:text-brand-400'
    case 'emerald':
      return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
    case 'indigo':
      return 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400'
    default:
      return ''
  }
})
</script>
