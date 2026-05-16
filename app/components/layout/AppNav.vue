<template>
  <header class="claude-container py-6">
    <nav class="flex justify-between items-center">
      <NuxtLink to="/" class="font-display text-sm">
        <span class="typing-text">{{ displayText }}<span class="cursor">_</span></span>
      </NuxtLink>

      <div class="hidden md:flex space-x-6">
        <NuxtLink to="/" class="claude-nav-link" active-class="claude-nav-link-active">Home</NuxtLink>
        <NuxtLink to="/experience" class="claude-nav-link" active-class="claude-nav-link-active">Experience</NuxtLink>
        <NuxtLink to="/projects" class="claude-nav-link" active-class="claude-nav-link-active">Projects</NuxtLink>
        <NuxtLink to="/blogs" class="claude-nav-link" active-class="claude-nav-link-active">Blogs</NuxtLink>
      </div>

      <div class="md:hidden">
        <button
          @click="toggleMobileMenu"
          class="text-[#8b7d6b] hover:text-[#5e7d4e] focus:outline-none"
        >
          <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <div v-if="mobileMenuOpen" class="md:hidden mt-4 py-4 border-t border-[#c4b89a]">
      <div class="flex flex-col space-y-4">
        <NuxtLink to="/" class="claude-nav-link" active-class="claude-nav-link-active" @click="mobileMenuOpen = false">Home</NuxtLink>
        <NuxtLink to="/experience" class="claude-nav-link" active-class="claude-nav-link-active" @click="mobileMenuOpen = false">Experience</NuxtLink>
        <NuxtLink to="/projects" class="claude-nav-link" active-class="claude-nav-link-active" @click="mobileMenuOpen = false">Projects</NuxtLink>
        <NuxtLink to="/blogs" class="claude-nav-link" active-class="claude-nav-link-active" @click="mobileMenuOpen = false">Blogs</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false);

const text = "Hey!";
const displayText = ref("");
let index = 0;
let isDeleting = false;
let typingInterval: ReturnType<typeof setInterval> | null = null;

const startTyping = () => {
	if (!isDeleting) {
		if (index < text.length) {
			displayText.value += text.charAt(index);
			index++;
		} else {
			isDeleting = true;
			if (typingInterval) clearInterval(typingInterval);
			typingInterval = setTimeout(() => {
				typingInterval = setInterval(startTyping, 80);
			}, 1000);
		}
	} else {
		if (displayText.value.length > 0) {
			displayText.value = displayText.value.slice(0, -1);
		} else {
			isDeleting = false;
			index = 0;
			if (typingInterval) clearInterval(typingInterval);
			typingInterval = setTimeout(() => {
				typingInterval = setInterval(startTyping, 150);
			}, 500);
		}
	}
};

onMounted(() => {
	typingInterval = setInterval(startTyping, 150);
	window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
	if (typingInterval) clearInterval(typingInterval);
	window.removeEventListener("resize", handleResize);
});

const toggleMobileMenu = () => {
	mobileMenuOpen.value = !mobileMenuOpen.value;
};

const handleResize = () => {
	if (window.innerWidth >= 768) {
		mobileMenuOpen.value = false;
	}
};
</script>
