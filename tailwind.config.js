/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/composables/**/*.ts",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Press Start 2P"', 'monospace'],
        sans: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        pixel: '4px 4px 0 0 rgba(93, 78, 56, 0.25)',
        'pixel-sm': '2px 2px 0 0 rgba(93, 78, 56, 0.25)',
      },
    },
  },
  plugins: [],
}