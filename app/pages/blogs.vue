<template>
  <div class="claude-container py-12">
    <h1 class="text-3xl font-bold mb-8">Blogs</h1>
    
    <div v-if="pending" class="text-center py-12">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      <p class="mt-4 text-muted-foreground">Loading blog posts...</p>
    </div>
    
    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-500">Error loading blog posts: {{ error.message }}</p>
      <button @click="refresh" class="claude-btn-primary mt-4">Retry</button>
    </div>
    
    <div v-else>
      <div class="grid grid-cols-1 gap-6">
        <div v-for="post in localPosts" :key="post.id" class="claude-card p-6">
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
            <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
            <span class="text-sm text-muted-foreground">{{ formatDate(post.pubDate) }}</span>
          </div>
          <p class="text-muted-foreground mb-4">{{ post.contentSnippet }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="category in post.categories" :key="category" class="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
              {{ category }}
            </span>
          </div>
          <NuxtLink :to="`/blog/${post.id}`" class="text-primary hover:underline">
            Read More
          </NuxtLink>
        </div>
      </div>
      
      <div v-if="localPosts.length === 0" class="text-center py-12">
        <p class="text-muted-foreground">No blog posts found.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Blogs'
})

useHead({
  title: 'Blogs',
  meta: [
    { name: 'description', content: 'Articles and tutorials on web development, programming, and technology' }
  ]
})

const { data, pending, error, refresh } = await useFetch('/api/blog-posts')

const localPosts = computed(() => {
  if (!data.value?.posts) return []
  
  return data.value.posts.map(post => {
    // Extract ID from Medium link
    let id = ''
    if (post.link) {
      // First, remove query parameters
      const urlWithoutParams = post.link.split('?')[0]
      
      // Then extract the ID from the clean URL
      const urlParts = urlWithoutParams.split('-')
      id = urlParts[urlParts.length - 1] || ''
    }
    
    return {
      ...post,
      id
    }
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