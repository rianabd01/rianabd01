<template>
  <div class="claude-container py-12">
    <h1 class="text-3xl font-bold mb-8">Experience</h1>

    <div class="relative">
      <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-primary transform translate-x-[-50%]" />
      <div class="space-y-12">
        <TimelineItem v-for="(item, i) in items" :key="i" :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import experienceData from '~/assets/json/experience.json'
import type { TimelineItemData } from '~/types'

definePageMeta({
  title: 'Experience'
})

useHead({
  title: 'Experience',
  meta: [
    { name: 'description', content: 'Professional experience and career timeline' }
  ]
})

const items: TimelineItemData[] = experienceData
</script>
