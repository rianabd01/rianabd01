<template>
  <div class="min-h-screen bg-background">
    <header class="claude-container py-6">
      <nav class="flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">Portfolio</NuxtLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-6">
          <NuxtLink to="/" class="claude-nav-link" active-class="claude-nav-link-active">Home</NuxtLink>
          <NuxtLink to="/experience" class="claude-nav-link" active-class="claude-nav-link-active">Experience</NuxtLink>
          <NuxtLink to="/projects" class="claude-nav-link" active-class="claude-nav-link-active">Projects</NuxtLink>
          <NuxtLink to="/blogs" class="claude-nav-link" active-class="claude-nav-link-active">Blogs</NuxtLink>
        </div>
        
        <!-- Mobile Hamburger Menu -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>
      
      <!-- Mobile Navigation Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 py-4 border-t border-gray-200">
        <div class="flex flex-col space-y-4">
          <NuxtLink to="/" class="claude-nav-link" active-class="claude-nav-link-active" @click="mobileMenuOpen = false">Home</NuxtLink>
          <NuxtLink to="/experience" class="claude-nav-link" active-class="claude-nav-link-active" @click="mobileMenuOpen = false">Experience</NuxtLink>
          <NuxtLink to="/projects" class="claude-nav-link" active-class="claude-nav-link-active" @click="mobileMenuOpen = false">Projects</NuxtLink>
          <NuxtLink to="/blogs" class="claude-nav-link" active-class="claude-nav-link-active" @click="mobileMenuOpen = false">Blogs</NuxtLink>
        </div>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer class="claude-container py-8 mt-12 border-t border-gray-200">
      <div class="text-center text-sm text-muted-foreground">
        {{ new Date().getFullYear() }} Rian's Space.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: "%s - Rian's Portfolio",
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

// Mobile menu state
const mobileMenuOpen = ref(false)

// Function to toggle mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Close mobile menu when window is resized to desktop size
const handleResize = () => {
  if (window.innerWidth >= 768) { // md breakpoint
    mobileMenuOpen.value = false
  }
}

// Add event listener for window resize
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

// Remove event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>