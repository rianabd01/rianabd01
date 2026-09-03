<template>
  <div class="claude-card overflow-hidden flex flex-col justify-between">
    <div>
      <UiPlaceholder />
      <div class="p-6 pb-2">
        <div v-if="formattedUpdatedDate" class="text-xs text-muted-foreground font-sans mb-3 flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{{ formattedUpdatedDate }}</span>
        </div>
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
      </div>
    </div>

    <div class="px-6 pb-6 pt-2">


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

const props = defineProps<{
	project: GitHubProject;
}>();

const formattedUpdatedDate = computed(() => {
	if (!props.project.updated_at) return null;
	const date = new Date(props.project.updated_at);
	if (isNaN(date.getTime())) return null;
	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
});
</script>
