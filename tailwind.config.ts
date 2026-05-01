import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101820",
        panel: "#f7f8fa",
        line: "#dfe4ea",
        gain: "#0f8b62",
        loss: "#d64545",
        warn: "#b7791f"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(16, 24, 32, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
