<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-bold"><span class="claude-star" /> Latest Projects</h2>
      <NuxtLink to="/projects" class="text-primary hover:underline font-sans">
        View All Projects
      </NuxtLink>
    </div>

    <div v-if="pending || error" class="text-center py-8">
      <UiSpinner v-if="pending" />
      <p v-if="pending" class="mt-4 text-muted-foreground font-sans">Loading projects...</p>
      <p v-if="error" class="text-[#b8653a] font-sans">Error loading projects</p>
    </div>

    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard v-for="project in latestProjects" :key="project.id" :project="project" />
      </div>
      <p v-if="latestProjects.length === 0" class="text-center py-8 text-muted-foreground font-sans">
        No projects found.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GitHubApiResponse } from '~/types'

const { data, pending, error } = await useAsyncData<GitHubApiResponse>(
  'home-projects',
  () => $fetch('/api/github-projects')
)

const latestProjects = computed(() => {
  const projects = data.value?.success ? data.value.projects ?? [] : []
  return projects.slice(0, 3)
})
</script>
