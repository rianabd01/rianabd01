<template>
  <div class="claude-container py-12">
    <h1 class="text-3xl font-bold mb-8">Projects</h1>

    <div v-if="pending || error" class="text-center py-12">
      <UiSpinner v-if="pending" />
      <p v-if="pending" class="mt-4 text-muted-foreground font-sans">Loading projects...</p>
      <p v-if="error" class="text-[#b8653a] font-sans">Error loading projects</p>
    </div>

    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>

      <p v-if="projects.length === 0" class="text-center py-12 text-muted-foreground font-sans">
        No projects found with "portofolio" topic.
      </p>
      <p v-if="projects.length === 0" class="text-sm text-muted-foreground mt-2 text-center font-sans">
        Make sure your GitHub repositories have the "portofolio" topic assigned.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GitHubApiResponse } from '~/types'

definePageMeta({
  title: 'Projects'
})

useHead({
  title: 'Projects',
  meta: [
    { name: 'description', content: 'Showcase of my development projects and applications' }
  ]
})

const { data, pending, error } = await useAsyncData<GitHubApiResponse>(
  'projects',
  () => $fetch('/api/github-projects')
)

const projects = computed(() => {
  if (!data.value) return []
  if (!data.value.success) return []
  return data.value.projects || []
})
</script>
