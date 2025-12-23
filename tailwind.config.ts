import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Redefine primary to be monochrome/sophisticated
        primary: {
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#D4D4D4",
          300: "#A3A3A3",
          400: "#737373",
          500: "#525252",
          600: "#404040",
          700: "#262626",
          800: "#171717",
          900: "#0A0A0A",
        },
        // Keep the blue for accents but make it sharper
        accent: {
          light: "#3B82F6", // Blue-500
          DEFAULT: "#2563EB", // Blue-600
          dark: "#1D4ED8", // Blue-700
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)", // Smoother ease
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: (theme: PluginAPI["theme"]) => ({
        DEFAULT: {
          css: {
            color: theme("colors.primary.800"),
            a: {
              color: theme("colors.accent.DEFAULT"),
              "&:hover": {
                color: theme("colors.accent.dark"),
              },
            },
            h1: {
              color: theme("colors.primary.900"),
              letterSpacing: "-0.025em",
            },
            h2: {
              color: theme("colors.primary.900"),
              letterSpacing: "-0.025em",
            },
            h3: {
              color: theme("colors.primary.800"),
            },
            strong: {
              color: theme("colors.primary.900"),
            },
            code: {
              color: theme("colors.primary.900"),
              backgroundColor: theme("colors.primary.100"),
              padding: "0.25rem",
              borderRadius: "0.25rem",
            },
            blockquote: {
              borderLeftColor: theme("colors.primary.300"),
              color: theme("colors.primary.600"),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
