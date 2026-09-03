<template>
  <div class="claude-container py-12">
    <h1 class="text-3xl font-bold mb-8">Blogs</h1>

    <div v-if="pending || error" class="text-center py-12">
      <UiSpinner v-if="pending" />
      <p v-if="pending" class="mt-4 text-muted-foreground font-sans">Loading blog posts...</p>
      <p v-if="error" class="text-[#b8653a] font-sans">Error loading blog posts</p>
    </div>

    <div v-else>
      <div class="grid grid-cols-1 gap-6">
        <div v-for="post in localPosts" :key="post.id" class="claude-card p-6">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
            <h2 class="text-xl font-bold mb-2 font-display text-xs">{{ post.title }}</h2>
            <div class="flex items-center gap-2 text-sm text-muted-foreground font-sans shrink-0">
              <span>{{ formatDate(post.pubDate) }}</span>
              <span v-if="post.readingTime">•</span>
              <span v-if="post.readingTime" class="flex items-center gap-1">
                <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                {{ post.readingTime }} min read
              </span>
            </div>
          </div>
          <p class="text-muted-foreground mb-4 font-sans text-sm">{{ post.contentSnippet }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="category in post.categories" :key="category" class="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded font-sans">
              {{ category }}
            </span>
          </div>
          <NuxtLink :to="`/blog/${post.id}`" class="text-primary hover:underline font-sans text-sm">
            Read More
          </NuxtLink>
        </div>
      </div>

      <p v-if="localPosts.length === 0" class="text-center py-12 text-muted-foreground font-sans">
        No blog posts found.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPostsApiResponse } from '~/types'

definePageMeta({
  title: 'Blogs'
})

useHead({
  title: 'Blogs',
  meta: [
    { name: 'description', content: 'Articles and tutorials on web development, programming, and technology' }
  ]
})

const { data, pending, error } = await useCachedAsyncData<BlogPostsApiResponse>(
  'blogs',
  () => $fetch('/api/blog-posts')
)

const localPosts = computed(() => {
  const posts = data.value?.success && data.value.posts ? data.value.posts : []
  return posts.map(post => {
    let id = ''
    if (post.link) {
      const urlWithoutParams = post.link.split('?')[0] ?? ''
      const urlParts = urlWithoutParams.split('-')
      id = urlParts[urlParts.length - 1] || ''
    }
    return { ...post, id }
  })
})

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
