<template>
  <div class="claude-container py-12">
    <h1 class="text-3xl font-bold mb-8">Experience</h1>

    <div class="relative">
      <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-primary transform translate-x-[-50%]" />
      <div class="space-y-12">
        <TimelineItem v-for="(item, i) in items" :key="i" :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TimelineItemData } from './TimelineItem.vue'

definePageMeta({
  title: 'Experience'
})

useHead({
  title: 'Experience',
  meta: [
    { name: 'description', content: 'Professional experience and career timeline' }
  ]
})

const items: TimelineItemData[] = [
  {
    role: 'Engineer',
    period: 'April 2025 – Now',
    company: 'PT Ganapatih Akasa Solutions - South Jakarta - Full time',
    details: [
      'Developed and maintained an e-learning platform using Next.js, ensuring fast performance and responsive design',
      'Built and integrated RESTful APIs using Golang (Fiber framework) for high scalability and efficiency',
      'Integrated Telegram MTProto and headless automation services into the backend',
      'Implemented and managed job queues using RabbitMQ to optimize background processing',
    ],
  },
  {
    role: 'Full Stack Developer',
    period: 'October 2024 – April 2025',
    company: 'PT Evetech Solution - Sukoharjo - Full time',
    details: [
      'Enhanced site visibility by implementing Next.js SSG, improving SEO rankings',
      'Developed 50+ modules in enterprise ERP project, reducing operational complexity',
      'Implemented real-time notifications system',
      'Constructed robust Express.js and MongoDB backend with comprehensive API documentation',
    ],
  },
  {
    role: 'React Developer',
    period: 'August 2024 – December 2024',
    company: 'Peluang.co - Remote - Internship',
    details: [
      'Translated Figma designs into responsive React components',
      'Developed high-performance web application using Next.js and TypeScript',
      'Collaborated effectively in agile team environment',
    ],
  },
  {
    role: 'Front End Developer Facilitator',
    period: 'July 2024 – September 2024',
    company: 'Dicoding - Remote - Freelance',
    details: [
      'Mentored 18 educators in JavaScript and front-end development',
      "Improved participants' skills through hands-on guidance and feedback",
    ],
  },
]
</script>
