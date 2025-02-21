
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0066CC",
          foreground: "#FFFFFF",
          dark: "#004C99",
          light: "#3399FF",
        },
        secondary: {
          DEFAULT: "#4C2A85",
          foreground: "#FFFFFF",
          dark: "#371F61",
          light: "#6B3DB8",
        },
        accent: {
          DEFAULT: "#FF5722",
          foreground: "#FFFFFF",
          dark: "#E64A19",
          light: "#FF7D47",
        },
        destructive: {
          DEFAULT: "#FF3B30",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F5F5F5",
          foreground: "#6B7280",
        },
        custom: {
          purple: "#7E57C2",
          blue: "#2196F3",
          green: "#4CAF50",
          orange: "#FF9800",
        },
      },
      boxShadow: {
        glow: "0 0 10px rgba(66, 153, 225, 0.5)",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
