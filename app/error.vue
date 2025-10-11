<template>
  <div class="claude-container py-12 min-h-screen flex flex-col items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-primary mb-4">{{ error.statusCode }}</h1>
      <h2 class="text-2xl font-semibold mb-6">{{ error.message }}</h2>
      <p class="text-muted-foreground mb-8">Sorry, we couldn't find the page you're looking for.</p>
      <button @click="handleError" class="claude-btn-primary">
        Go back home
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>