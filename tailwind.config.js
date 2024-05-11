/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
module.exports = {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '200v': '200vh', // '200v' is a custom name for a utility class that applies a height of 200vh
      },
      colors: {
        'regal-brown': '#B1A58B',
        'light-regal': '#f1e9da',
        'dark-slate': '#8B97B1',
         'dark-red': '#B1928B',
        'light-green-custom': '#AAB18B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))', // Defines a radial gradient background
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))', // Defines a conic gradient background starting from 180 degrees
      },
    },
  },
  plugins: [daisyui],
};

