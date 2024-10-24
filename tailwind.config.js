/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'secondary':"#64ffda",
      'white': '#e6f1ff',
      'black': '#000',
      'red':'#ff3131',
      'blue500':'#448aff',
      'blue400':'#539aff',
      'navy500': '#0a192f',
      'navy400': '#172a45',
      'navy300': '#303C55',
      'slate500': '#8892b0',
      'slate400': '#a8b2d1',
      'slate300': '#ccd6f6',
      'green': '#64ffda',
    },
  },
  plugins: [],
};
