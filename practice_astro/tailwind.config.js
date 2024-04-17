const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    linearGradientColors: theme => ({
      'gradient-custom': '70deg, #121212 45%, #FFF 50%, #121212 55%',
    }),
  },
  extend: {
    backgroundImage: theme => ({
      'gradient-custom': 'linear-gradient(to right, var(--gradient-custom))',
    }),
    animation: {
      shine: 'shine 5s infinite',
    },
    keyframes: {
      shine: {
        '0%': { opacity: 0 },
        '50%': { opacity: 1 },
        '100%': { opacity: 0 },
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities}) {
      const newUtilities = {
        '.bg-gradient-custom': {
          backgroundImage: 'var(--gradient-custom)',
        }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
    {
      // Custom plugin logic here
    },
  ],
};
