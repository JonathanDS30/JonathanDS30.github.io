<template>
  <div
    :class="[
      'glass-card',
      { 'cursor-pointer': hoverable },
      { 'glass-card--glow': glow },
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  hoverable?: boolean
  glow?: boolean
}>()
</script>

<style scoped>
.glass-card--glow {
  position: relative;
}

.glass-card--glow::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: linear-gradient(135deg, rgba(22, 139, 230, 0.3), rgba(88, 189, 255, 0.1));
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.glass-card--glow:hover::before {
  opacity: 1;
}
</style>
