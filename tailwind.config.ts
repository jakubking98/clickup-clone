import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: "#323452",
        sarch: "#5A5C74",
        background: "var(--background)",
        foreground: "var(--foreground)",
        customColor: "rgba(8, 128, 234, 1)",
        whitev1: "#FFFFFF",
        whitev2: "#F0F1F3",
        bluev1: "#7F77F1",
        bluev2: "#9992F4",
        grayv1: "#656F7D",
        grayv2: "#4F5762",
        grayv3: "#3C414A",
        grayv4: "#2a2e34",
        grayv5: "rgb(60,65,74)",
        grayv6: "#2a2e3433",
        iconDarkMode: "#999b9e",
      },
      boxShadow: {
        custom:
          "0px 16px 48px 0px rgba(0, 0, 0, 0.24), 0px 24px 96px 0px rgba(0, 0, 0, 0.24)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      backgroundImage: {
        "text-gradient": `linear-gradient(54deg, rgba(8, 128, 234, 1) -3.99%, rgba(137, 32, 254, 1) 39.35%, rgba(233, 61, 130, 1) 72.09%, rgba(233, 61, 195, 1) 72.1%, rgba(198, 42, 182, 1) 92.75%)`,
        "login-page": "url('/background_login.svg')",
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(fill|stroke)-(white|gray|blue)-(100|200|300|400|500|600|700|800|900)$/,
    },
  ],
  plugins: [],
} satisfies Config;
