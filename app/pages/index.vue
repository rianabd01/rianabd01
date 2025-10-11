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

    <section class="mb-16">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold">Latest Projects</h2>
        <NuxtLink to="/projects" class="text-primary hover:underline">
          View All Projects
        </NuxtLink>
      </div>

      <div v-if="projectsPending || projectsError" class="text-center py-8">
        <div
          v-if="projectsPending"
          class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"
        ></div>
        <p v-if="projectsPending" class="mt-4 text-muted-foreground">Loading projects...</p>
        <p v-if="projectsError" class="text-red-500">
          Error loading projects
        </p>
      </div>

      <div v-else>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="project in latestProjects"
            :key="project.id"
            class="claude-card overflow-hidden"
          >
            <div class="bg-gray-200 border-2 border-dashed w-full h-48" />
            <div class="p-6">
              <h3 class="font-semibold text-lg mb-2">{{ project.name }}</h3>
              <p class="text-muted-foreground mb-4">
                {{ project.description || "No description available" }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-if="project.language"
                  class="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded"
                  >{{ project.language }}</span
                >
                <span
                  v-for="topic in project.topics.slice(0, 2)"
                  :key="topic"
                  class="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded"
                >
                  {{ topic }}
                </span>
              </div>
              <div class="flex space-x-3">
                <a
                  v-if="project.homepage"
                  :href="project.homepage"
                  target="_blank"
                  class="text-sm text-primary hover:underline"
                  >Live Demo</a
                >
                <a
                  :href="project.html_url"
                  target="_blank"
                  class="text-sm text-primary hover:underline"
                  >Source Code</a
                >
              </div>
            </div>
          </div>
        </div>

        <div v-if="latestProjects.length === 0" class="text-center py-8">
          <p class="text-muted-foreground">No projects found.</p>
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

      <div v-if="postsPending || postsError" class="text-center py-8">
        <div
          v-if="postsPending"
          class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"
        ></div>
        <p v-if="postsPending" class="mt-4 text-muted-foreground">Loading blog posts...</p>
        <p v-if="postsError" class="text-red-500">
          Error loading blog posts
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

// Fetch blog posts using static data fetching
const { data: postsData, pending: postsPending, error: postsError } = await useAsyncData(
  'homepage-posts',
  () => $fetch('/api/blog-posts'),
  {
    server: true,
    lazy: false
  }
);

// Fetch projects using static data fetching
const { data: projectsData, pending: projectsPending, error: projectsError } = await useAsyncData(
  'homepage-projects',
  () => $fetch('/api/github-projects'),
  {
    server: true,
    lazy: false
  }
);

const latestPosts = computed(() => {
  const posts = postsData.value?.success ? postsData.value.posts : [];

  // Add ID to each post
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

const latestProjects = computed(() => {
  const projects = projectsData.value?.success
    ? projectsData.value.projects
    : [];
  return projects.slice(0, 3); // Show only the latest 3 projects
});
</script>