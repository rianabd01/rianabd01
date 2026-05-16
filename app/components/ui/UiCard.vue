<template>
  <div class="claude-card" :class="paddingClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  padding?: 'md' | 'lg'
}>(), {
  padding: 'md',
})

const paddingClass = computed(() => ({
  'p-6': padding === 'md',
  'p-8': padding === 'lg',
}))
</script>
