<template>
  <div class="claude-card p-6 flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-between text-xs text-muted-foreground font-sans mb-3">
        <span v-if="post.pubDate">{{ formatDate(post.pubDate) }}</span>
        <span v-if="post.readingTime" class="flex items-center gap-1">
          <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          {{ post.readingTime }} min read
        </span>
      </div>

      <h3 class="font-semibold text-lg mb-3 font-display text-xs leading-relaxed">{{ post.title }}</h3>
      
      <p class="text-muted-foreground mb-4 font-sans text-sm line-clamp-3 leading-relaxed">
        {{ post.contentSnippet || "Click to read full article..." }}
      </p>

      <div v-if="post.categories && post.categories.length" class="flex flex-wrap gap-2 mb-4">
        <span v-for="category in post.categories.slice(0, 2)" :key="category" class="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded font-sans">
          {{ category }}
        </span>
      </div>
    </div>

    <div class="pt-2">
      <NuxtLink :to="`/blog/${post.id}`" class="text-primary hover:underline font-sans text-sm font-bold inline-flex items-center gap-1.5">
        <span>Read More</span>
        <span aria-hidden="true">&rarr;</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types'

defineProps<{
  post: BlogPost
}>()

const formatDate = (dateString?: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>
