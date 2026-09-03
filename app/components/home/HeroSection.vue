<script setup lang="ts">
import heroData from '~/assets/json/hero.json'
import type { HeroData } from '~/types'

const hero = heroData as HeroData

const getIconType = (nameOrIcon?: string) => {
  const normalized = (nameOrIcon || '').toLowerCase()
  if (normalized.includes('github')) return 'github'
  if (normalized.includes('linkedin')) return 'linkedin'
  if (normalized.includes('medium')) return 'medium'
  if (normalized.includes('mail') || normalized.includes('email')) return 'email'
  if (normalized.includes('twitter') || normalized === 'x') return 'twitter'
  return 'link'
}
</script>

<template>
  <section class="mb-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          {{ hero.greeting }} <span class="text-primary">{{ hero.name }}</span>
        </h1>
        <h2 class="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
          {{ hero.role }}
        </h2>
        <p class="text-lg mb-6 text-muted-foreground font-sans">
          {{ hero.description }}
        </p>
        
        <!-- Social Media Links -->
        <div v-if="hero.socials && hero.socials.length" class="flex flex-wrap gap-2.5 mb-8">
          <a
            v-for="social in hero.socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="claude-card px-3 py-1.5 text-xs font-sans font-bold flex items-center gap-2 hover:bg-[#eae2cf] hover:border-primary transition-all duration-150 transform hover:-translate-y-0.5"
            :title="social.name"
          >
            <!-- GitHub Icon -->
            <svg v-if="getIconType(social.icon || social.name) === 'github'" viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-current">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <!-- LinkedIn Icon -->
            <svg v-else-if="getIconType(social.icon || social.name) === 'linkedin'" viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-current">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8-1.8.81-1.8 1.8.81 1.8 1.8 1.8m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
            </svg>
            <!-- Medium Icon -->
            <svg v-else-if="getIconType(social.icon || social.name) === 'medium'" viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-current">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            <!-- Email Icon -->
            <svg v-else-if="getIconType(social.icon || social.name) === 'email'" viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <!-- Twitter/X Icon -->
            <svg v-else-if="getIconType(social.icon || social.name) === 'twitter'" viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <!-- Default Link Icon -->
            <svg v-else viewBox="0 0 24 24" class="w-3.5 h-3.5 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            <span>{{ social.name }}</span>
          </a>
        </div>

        <div class="flex space-x-4">
          <NuxtLink v-if="hero.primaryCta" :to="hero.primaryCta.link" class="claude-btn-primary">
            {{ hero.primaryCta.text }}
          </NuxtLink>
          <NuxtLink v-if="hero.secondaryCta" :to="hero.secondaryCta.link" class="claude-btn-secondary">
            {{ hero.secondaryCta.text }}
          </NuxtLink>
        </div>
      </div>
      <div class="flex justify-center">
        <svg viewBox="0 0 80 96" shape-rendering="crispEdges" class="w-60 h-72 md:w-80 md:h-96 select-none">
          <!-- Medium Hair -->
          <rect x="20" y="8" width="40" height="8" fill="#3a2a1a"/>
          <rect x="16" y="16" width="48" height="8" fill="#3a2a1a"/>
          <rect x="12" y="24" width="56" height="8" fill="#3a2a1a"/>
          <rect x="12" y="32" width="56" height="8" fill="#3a2a1a"/>
          <!-- Front bangs & textured strands -->
          <rect x="16" y="40" width="16" height="4" fill="#3a2a1a"/>
          <rect x="48" y="40" width="16" height="4" fill="#3a2a1a"/>
          <rect x="20" y="44" width="8" height="4" fill="#3a2a1a"/>
          <rect x="52" y="44" width="8" height="4" fill="#3a2a1a"/>
          <!-- Side locks framing face -->
          <rect x="12" y="40" width="4" height="8" fill="#3a2a1a"/>
          <rect x="64" y="40" width="4" height="8" fill="#3a2a1a"/>

          <!-- Face -->
          <rect x="20" y="36" width="40" height="40" fill="#f5d6b8"/>
          <rect x="24" y="44" width="8" height="8" fill="#3a2a1a"/>
          <rect x="48" y="44" width="8" height="8" fill="#3a2a1a"/>
          <rect x="16" y="52" width="8" height="4" fill="#e8b88a"/>
          <rect x="56" y="52" width="8" height="4" fill="#e8b88a"/>

          <!-- Mouth (Static) -->
          <rect x="36" y="58" width="8" height="3" fill="#b8653a"/>

          <rect x="32" y="72" width="16" height="8" fill="#f5d6b8"/>

          <!-- Body & Left Arm -->
          <rect x="16" y="76" width="48" height="12" fill="#5e7d4e"/>
          <rect x="12" y="80" width="8" height="8" fill="#5e7d4e"/>
          <rect x="32" y="80" width="16" height="8" fill="#4e6e3e"/>
          <rect x="8" y="76" width="8" height="8" fill="#f5d6b8"/>
          <rect x="8" y="84" width="8" height="8" fill="#f5d6b8"/>

          <!-- Animated Waving Right Arm -->
          <g class="pixel-arm-wave">
            <rect x="60" y="68" width="8" height="10" fill="#5e7d4e"/>
            <rect x="64" y="54" width="8" height="14" fill="#f5d6b8"/>
            <rect x="60" y="42" width="12" height="12" fill="#f5d6b8"/>
            <rect x="72" y="44" width="4" height="6" fill="#f5d6b8"/>
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pixel-arm-wave {
  transform-box: view-box;
  transform-origin: 64px 76px;
  animation: wave-animation 2.2s ease-in-out infinite;
}

@keyframes wave-animation {
  0%, 100% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(-16deg);
  }
  30% {
    transform: rotate(14deg);
  }
  45% {
    transform: rotate(-12deg);
  }
  60% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(0deg);
  }
}
</style>
