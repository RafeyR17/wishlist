import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a1628",
        foreground: "#f8fafc",
        brand: {
          navy: "#0a1628",
          card: "#193546",
          secondary: "#065B98",
          primary: "#1B7FDC",
          accent: "#0DB8D3",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0a1628 0%, #065B98 40%, #1B7FDC 70%, #0DB8D3 100%)",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
      borderRadius: {
        'button': '8px',
        'card': '12px',
        'pill': '999px',
      }
    },
  },
  plugins: [],
};
export default config;

