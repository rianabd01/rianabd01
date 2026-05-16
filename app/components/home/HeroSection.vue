<template>
  <section class="mb-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span class="text-primary">Rian</span>
        </h1>
        <h2 class="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
          Software Engineer
        </h2>
        <p class="text-lg mb-8 text-muted-foreground font-sans">
         I design fast, accessible, and scalable digital experiences. My
            focus is on creating products that are useful for people to use.
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
        <svg viewBox="0 0 80 96" shape-rendering="crispEdges" class="w-60 h-72 md:w-80 md:h-96 border-2 border-[#c4b89a] bg-[#faf6ed] shadow-pixel">
          <rect x="20" y="4" width="40" height="8" fill="#3a2a1a"/>
          <rect x="16" y="12" width="48" height="8" fill="#3a2a1a"/>
          <rect x="12" y="20" width="56" height="8" fill="#3a2a1a"/>
          <rect x="8" y="28" width="64" height="8" fill="#3a2a1a"/>
          <rect x="8" y="36" width="64" height="8" fill="#3a2a1a"/>
          <rect x="4" y="44" width="16" height="4" fill="#3a2a1a"/>
          <rect x="60" y="44" width="16" height="4" fill="#3a2a1a"/>
          <rect x="20" y="36" width="40" height="40" fill="#f5d6b8"/>
          <rect x="24" y="44" width="8" height="8" fill="#3a2a1a"/>
          <rect x="48" y="44" width="8" height="8" fill="#3a2a1a"/>
          <rect x="16" y="52" width="8" height="4" fill="#e8b88a"/>
          <rect x="56" y="52" width="8" height="4" fill="#e8b88a"/>
          <rect x="32" y="56" width="16" height="4" fill="#b8653a"/>
          <rect x="32" y="72" width="16" height="8" fill="#f5d6b8"/>
          <rect x="16" y="76" width="48" height="12" fill="#5e7d4e"/>
          <rect x="12" y="80" width="8" height="8" fill="#5e7d4e"/>
          <rect x="60" y="80" width="8" height="8" fill="#5e7d4e"/>
          <rect x="32" y="80" width="16" height="8" fill="#4e6e3e"/>
          <rect x="8" y="76" width="8" height="8" fill="#f5d6b8"/>
          <rect x="64" y="76" width="8" height="8" fill="#f5d6b8"/>
          <rect x="8" y="84" width="8" height="8" fill="#f5d6b8"/>
          <rect x="64" y="84" width="8" height="8" fill="#f5d6b8"/>
        </svg>
      </div>
    </div>
  </section>
</template>
