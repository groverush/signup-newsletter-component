/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern-mob":
          "url('./src/assets/images/illustration-sign-up-mobile.svg')",
        "hero-pattern-desk":
          "url('./src/assets/images/illustration-sign-up-desktop.svg')"
      }
    }
  },
  plugins: []
}
