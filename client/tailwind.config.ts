import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        dark: "var(--color-dark)",
        green: "var(--color-green)",
      },
    },
  },
} satisfies Config;
