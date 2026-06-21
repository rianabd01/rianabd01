<template>
  <div class="claude-card p-6">
    <h3 class="font-semibold text-lg mb-2 font-display text-xs">{{ post.title }}</h3>
    <p class="text-muted-foreground mb-4 font-sans text-sm">{{ post.contentSnippet }}</p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span v-for="category in post.categories.slice(0, 2)" :key="category" class="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded font-sans">
        {{ category }}
      </span>
    </div>
    <NuxtLink :to="`/blog/${post.id}`" class="text-primary hover:underline font-sans text-sm">
      Read More
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types'

defineProps<{
  post: BlogPost
}>()
</script>
