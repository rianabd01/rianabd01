<template>
  <div class="claude-container py-12">
    <section class="mb-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span class="text-primary">Rian</span>
          </h1>
          <h2
            class="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6"
          >
            Software Engineer
          </h2>
          <p class="text-lg mb-8 text-muted-foreground">
            I craft fast, accessible, and visually engaging digital experiences.
            My focus is on building products that people love to use — and that
            make your brand stand out.
          </p>
          <div class="flex space-x-4">
            <NuxtLink to="/projects" class="claude-btn-primary">
              View My Work
            </NuxtLink>
            <NuxtLink to="/experience" class="claude-btn-secondary">
              Experience
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center">
          <img
            src="/images/3d-persona.png"
            alt="Profile"
            class="object-contain rounded-xl w-80 h-80"
          />
          <!-- <div class="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80" /> -->
        </div>
      </div>
    </section>

    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Skills</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="claude-card p-6">
          <h3 class="font-semibold mb-2">Frontend</h3>
          <p class="text-sm text-muted-foreground">Next.js, Vanilla Js</p>
        </div>
        <div class="claude-card p-6">
          <h3 class="font-semibold mb-2">Backend</h3>
          <p class="text-sm text-muted-foreground">Node.js, Golang</p>
        </div>
        <div class="claude-card p-6">
          <h3 class="font-semibold mb-2">Database</h3>
          <p class="text-sm text-muted-foreground">
            MySQL, PostgreSQL, MongoDB
          </p>
        </div>
        <div class="claude-card p-6">
          <h3 class="font-semibold mb-2">DevOps</h3>
          <p class="text-sm text-muted-foreground">Docker, AWS, CI/CD</p>
        </div>
      </div>
    </section>

    <section>
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold">Latest Blog Posts</h2>
        <NuxtLink to="/blogs" class="text-primary hover:underline">
          View All Posts
        </NuxtLink>
      </div>

      <div v-if="pending" class="text-center py-8">
        <div
          class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"
        ></div>
        <p class="mt-4 text-muted-foreground">Loading blog posts...</p>
      </div>

      <div v-else-if="error" class="text-center py-8">
        <p class="text-red-500">
          Error loading blog posts: {{ error.message }}
        </p>
      </div>

      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="post in latestPosts"
            :key="post.link"
            class="claude-card p-6"
          >
            <h3 class="font-semibold text-lg mb-2">{{ post.title }}</h3>
            <p class="text-muted-foreground mb-4">{{ post.contentSnippet }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="category in post.categories.slice(0, 2)"
                :key="category"
                class="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded"
              >
                {{ category }}
              </span>
            </div>
            <NuxtLink
              :to="`/blog/${post.id}`"
              class="text-primary hover:underline"
            >
              Read More
            </NuxtLink>
          </div>
        </div>

        <div v-if="latestPosts.length === 0" class="text-center py-8">
          <p class="text-muted-foreground">No blog posts found.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Home",
});

useHead({
  title: "Home",
  meta: [
    { name: "description", content: "Full Stack Developer Portfolio - Home" },
  ],
});

const { data, pending, error } = await useFetch("/api/blog-posts");

const latestPosts = computed(() => {
  const posts = data.value?.posts || [];

  for (const post of posts) {
    let id = "";
    if (post.link) {
      // First, remove query parameters
      const urlWithoutParams = post.link.split("?")[0];

      // Then extract the ID from the clean URL
      const urlParts = urlWithoutParams.split("-");
      id = urlParts[urlParts.length - 1] || "";
    }
    post.id = id;
  }

  return posts.slice(0, 4); // Show only the latest 4 posts
});
</script>
