<template>
  <div class="min-h-screen bg-background">
    <header class="claude-container py-6">
      <nav class="flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">Portfolio</NuxtLink>
        <div class="flex space-x-6">
          <NuxtLink to="/" class="claude-nav-link" active-class="claude-nav-link-active">Home</NuxtLink>
          <NuxtLink to="/experience" class="claude-nav-link" active-class="claude-nav-link-active">Experience</NuxtLink>
          <NuxtLink to="/projects" class="claude-nav-link" active-class="claude-nav-link-active">Projects</NuxtLink>
          <NuxtLink to="/blogs" class="claude-nav-link" active-class="claude-nav-link-active">Blogs</NuxtLink>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="claude-container py-8 mt-12 border-t border-gray-200">
      <div class="text-center text-sm text-muted-foreground">
        © {{ new Date().getFullYear() }} Full Stack Developer Portfolio. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s - Full Stack Developer Portfolio',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>