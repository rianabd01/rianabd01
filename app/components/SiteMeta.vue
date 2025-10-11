<template>
  <div />
</template>

<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  image?: string
  url?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Full Stack Developer Portfolio | Rian',
  description: 'Portfolio of a Full Stack Developer showcasing skills, experience, projects, and blog.',
  image: 'images/3d-persona.png',
  url: 'https://rianspace.netlify.app'
})

useHead({
  title: props.title,
  meta: [
    { name: 'description', content: props.description },
    // Open Graph
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: props.url },
    { property: 'og:image', content: props.image },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: props.image }
  ]
})
</script>