/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#000000'
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
}
