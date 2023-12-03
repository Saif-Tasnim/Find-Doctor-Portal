/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e74e84",

          "secondary": "#101314",

          "accent": "#20c997",

          "neutral": "#253041",

          "heading" : "#373869" ,

          "teal" : "#74d1c6" ,

          "base-100": "#fcfcfd",

          "info": "#a7cbe2",

          "success": "#1cba90",

          "warning": "#f3c268",

          "error": "#f41528",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

