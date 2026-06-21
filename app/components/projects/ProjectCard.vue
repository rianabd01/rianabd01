<template>
  <div class="claude-card overflow-hidden">
    <UiPlaceholder />
    <div class="p-6">
      <h3 class="font-semibold text-lg mb-2 font-display text-xs">{{ project.name }}</h3>
      <p class="text-muted-foreground mb-4 font-sans text-sm">
        {{ project.description || "No description available" }}
      </p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-if="project.language" class="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded font-sans">
          {{ project.language }}
        </span>
        <span v-for="topic in project.topics.slice(0, 2)" :key="topic" class="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded font-sans">
          {{ topic }}
        </span>
      </div>
      <div class="flex space-x-3">
        <a v-if="project.homepage" :href="project.homepage" target="_blank" class="text-sm text-primary hover:underline font-sans">
          View Demo
        </a>
        <a :href="project.html_url" target="_blank" class="text-sm text-primary hover:underline font-sans">
          Source Code
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GitHubProject } from "~/types";

defineProps<{
	project: GitHubProject;
}>();
</script>
