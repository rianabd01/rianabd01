<template>
  <div class="claude-container py-12">
    <NuxtLink to="/blogs" class="flex items-center text-primary hover:underline mb-6">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      Back to Blogs
    </NuxtLink>
    
    <div v-if="pending || error" class="text-center py-12">
      <div v-if="pending" class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      <p v-if="pending" class="mt-4 text-muted-foreground">Loading blog post...</p>
      <p v-if="error" class="text-red-500">Error loading blog post</p>
    </div>
    
    <article v-else-if="post" class="claude-card p-6">
      <header class="mb-8">
        <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
        <div class="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>{{ formatDate(post.pubDate) }}</span>
          <span>•</span>
          <span>{{ post.categories?.join(', ') }}</span>
        </div>
      </header>
      
      <div class="prose max-w-none" v-html="post.content"></div>
    </article>
    
    <div v-else class="claude-card p-6 text-center">
      <p class="text-muted-foreground">Blog post not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Blog Post'
})

const route = useRoute()
const postId = route.params.slug

// Fetch blog post using server-side fetching
const { data, pending, error } = await useAsyncData(
  `blog-post-${postId}`,
  () => $fetch(`/api/blog-post?id=${postId}`)
)

const post = computed(() => {
  return data.value?.success ? data.value.post : null
})

useHead({
  title: computed(() => post.value?.title || 'Blog Post'),
  meta: [
    { 
      name: 'description', 
      content: computed(() => post.value?.content?.substring(0, 160) + '...' || 'Blog post') 
    }
  ]
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