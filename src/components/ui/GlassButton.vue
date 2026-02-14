<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="href && external ? '_blank' : undefined"
    :rel="href && external ? 'noopener noreferrer' : undefined"
    :class="[
      'glass-button',
      variantClasses,
      sizeClasses,
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'default' | 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
}>()

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-gradient-to-r from-brand-600 to-brand-500 text-white border-brand-500/50 hover:shadow-glass-glow'
    case 'ghost':
      return 'bg-transparent border-transparent hover:bg-white/10 dark:hover:bg-white/5'
    default:
      return ''
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-sm'
    case 'lg':
      return 'px-8 py-4 text-lg'
    default:
      return 'px-6 py-3 text-base'
  }
})
</script>
