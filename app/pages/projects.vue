<template>
  <div class="claude-container py-12">
    <h1 class="text-3xl font-bold mb-8">Projects</h1>
    
    <div v-if="pending || error" class="text-center py-12">
      <div v-if="pending" class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      <p v-if="pending" class="mt-4 text-muted-foreground">Loading projects...</p>
      <p v-if="error" class="text-red-500">Error loading projects</p>
    </div>
    
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.id" class="claude-card overflow-hidden">
          <div class="bg-gray-200 border-2 border-dashed w-full h-48" />
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2">{{ project.name }}</h2>
            <p class="text-muted-foreground mb-4">{{ project.description || 'No description available' }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-if="project.language" class="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">{{ project.language }}</span>
              <span v-for="topic in project.topics" :key="topic" class="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">
                {{ topic }}
              </span>
            </div>
            <div class="flex space-x-3">
              <a v-if="project.homepage" :href="project.homepage" target="_blank" class="text-sm text-primary hover:underline">Live Demo</a>
              <a :href="project.html_url" target="_blank" class="text-sm text-primary hover:underline">Source Code</a>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="projects.length === 0" class="text-center py-12">
        <p class="text-muted-foreground">No projects found with "portofolio" topic.</p>
        <p class="text-sm text-muted-foreground mt-2">Make sure your GitHub repositories have the "portofolio" topic assigned.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Projects'
})

useHead({
  title: 'Projects',
  meta: [
    { name: 'description', content: 'Showcase of my development projects and applications' }
  ]
})

// Define the type for the API response
interface GitHubApiResponse {
  success: boolean
  projects?: Project[]
  error?: string
  timestamp?: string
  fetchedAt?: number
}

interface Project {
  id: number
  name: string
  description: string
  topics: string[]
  html_url: string
  homepage: string
  stargazers_count: number
  language: string
}

// Fetch projects using static data fetching
const { data, pending, error } = await useAsyncData<GitHubApiResponse>(
  'projects',
  () => $fetch('/api/github-projects'),
  {
    server: true,
    lazy: false
  }
)

const projects = computed<Project[]>(() => {
  if (!data.value) return []
  if (!data.value.success) return []
  return data.value.projects || []
});
</script>