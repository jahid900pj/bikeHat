/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#13c6c0",

          secondary: "#136b82",

          accent: "#ef7f73",

          neutral: "#1E1924",

          "base-100": "#f3f4f6",

          info: "#879BF8",

          success: "#28A49A",

          warning: "#DB7B06",

          error: "#F05451",
        },
      }

    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}