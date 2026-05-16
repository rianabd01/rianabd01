<template>
  <section class="mb-16">
    <h2 class="text-3xl font-bold mb-8"><span class="claude-star" /> Skills</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="skill in skills" :key="skill.title" class="claude-card p-6">
        <h3 class="font-semibold mb-2 font-display text-xs">{{ skill.title }}</h3>
        <p class="text-sm text-muted-foreground font-sans">{{ skill.items }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
	{ title: "Frontend", items: "Next.js, React, TypeScript" },
	{ title: "Backend", items: "Golang, Express.js, Node.js" },
	{ title: "Database", items: "MongoDB, PostgreSQL, MySQL" },
	{ title: "DevOps", items: "Docker, RabbitMQ, CI/CD" },
];
</script>
