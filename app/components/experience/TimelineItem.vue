<template>
  <div class="relative pl-12">
    <div class="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
      <div class="w-3 h-3 rounded-full bg-card" />
    </div>
    <div class="claude-card p-6">
      <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <h2 class="text-xl font-bold font-display text-xs">{{ item.role }}</h2>
        <span class="text-sm text-muted-foreground font-sans">{{ item.period }}</span>
      </div>
      <h3 class="text-primary font-medium mb-3 font-sans text-sm">{{ item.company }}</h3>
      <ul class="list-disc pl-5 space-y-2 text-muted-foreground font-sans text-sm">
        <li v-for="(detail, i) in item.details" :key="i">{{ detail }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimelineItemData } from '~/types'

defineProps<{
  item: TimelineItemData
}>()
</script>
