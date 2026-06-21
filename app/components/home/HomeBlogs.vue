<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-bold"><span class="claude-star" /> Latest Blog Posts</h2>
      <NuxtLink to="/blogs" class="text-primary hover:underline font-sans">
        View All Posts
      </NuxtLink>
    </div>

    <div v-if="pending || error" class="text-center py-8">
      <UiSpinner v-if="pending" />
      <p v-if="pending" class="mt-4 text-muted-foreground font-sans">Loading blog posts...</p>
      <p v-if="error" class="text-[#b8653a] font-sans">Error loading blog posts</p>
    </div>

    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BlogCard v-for="post in latestPosts" :key="post.link" :post="post" />
      </div>
      <p v-if="latestPosts.length === 0" class="text-center py-8 text-muted-foreground font-sans">
        No blog posts found.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPostsApiResponse } from '~/types'

const { data, pending, error } = await useCachedAsyncData<BlogPostsApiResponse>(
  'home-blogs',
  () => $fetch('/api/blog-posts')
)

const latestPosts = computed(() => {
  const posts = data.value?.success ? data.value.posts ?? [] : []
  return posts.slice(0, 4).map((post) => {
    let id = ''
    if (post.link) {
      const urlWithoutParams = post.link.split('?')[0] || ''
      const urlParts = urlWithoutParams.split('-')
      id = urlParts[urlParts.length - 1] || ''
    }
    return { ...post, id }
  })
})
</script>
