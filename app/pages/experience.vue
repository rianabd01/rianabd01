<template>
  <div class="claude-container py-12">
    <h1 class="text-3xl font-bold mb-8">Experience</h1>
    
    <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-primary transform translate-x-[-50%]"></div>
      
      <!-- Timeline items -->
      <div class="space-y-12">
        <div class="relative pl-12">
          <div class="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <div class="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div class="claude-card p-6">
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h2 class="text-xl font-bold">Engineer</h2>
              <span class="text-sm text-muted-foreground">April 2025 – Now</span>
            </div>
            <h3 class="text-primary font-medium mb-3">PT Ganapatih Akasa Solutions - South Jakarta - Full time</h3>
            <ul class="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Developed and maintained an e-learning platform using Next.js, ensuring fast performance and responsive design</li>
              <li>Built and integrated RESTful APIs using Golang (Fiber framework) for high scalability and efficiency</li>
              <li>Integrated Telegram MTProto and headless automation services into the backend</li>
              <li>Implemented and managed job queues using RabbitMQ to optimize background processing</li>
            </ul>
          </div>
        </div>
        
        <div class="relative pl-12">
          <div class="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <div class="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div class="claude-card p-6">
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h2 class="text-xl font-bold">Full Stack Developer</h2>
              <span class="text-sm text-muted-foreground">October 2024 – April 2025</span>
            </div>
            <h3 class="text-primary font-medium mb-3">PT Evetech Solution - Sukoharjo - Full time</h3>
            <ul class="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Enhanced site visibility by implementing Next.js SSG, improving SEO rankings</li>
              <li>Developed 50+ modules in enterprise ERP project, reducing operational complexity</li>
              <li>Implemented real-time notifications system</li>
              <li>Constructed robust Express.js and MongoDB backend with comprehensive API documentation</li>
            </ul>
          </div>
        </div>
        
        <div class="relative pl-12">
          <div class="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <div class="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div class="claude-card p-6">
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h2 class="text-xl font-bold">React Developer</h2>
              <span class="text-sm text-muted-foreground">August 2024 – December 2024</span>
            </div>
            <h3 class="text-primary font-medium mb-3">Peluang.co - Remote - Internship</h3>
            <ul class="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Translated Figma designs into responsive React components</li>
              <li>Developed high-performance web application using Next.js and TypeScript</li>
              <li>Collaborated effectively in agile team environment</li>
            </ul>
          </div>
        </div>
        
        <div class="relative pl-12">
          <div class="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <div class="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <div class="claude-card p-6">
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h2 class="text-xl font-bold">Front End Developer Facilitator</h2>
              <span class="text-sm text-muted-foreground">July 2024 – September 2024</span>
            </div>
            <h3 class="text-primary font-medium mb-3">Dicoding - Remote - Freelance</h3>
            <ul class="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Mentored 18 educators in JavaScript and front-end development</li>
              <li>Improved participants' skills through hands-on guidance and feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Experience'
})

useHead({
  title: 'Experience',
  meta: [
    { name: 'description', content: 'Professional experience and career timeline' }
  ]
})
</script>