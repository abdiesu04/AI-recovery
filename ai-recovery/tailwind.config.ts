import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'sky-blue': '#87CEEB',
        'green-50': '#f0fff4',
        'green-100': '#d4edda',
      },
      boxShadow: {
        'neumorphic': '10px 10px 20px #babecc, -10px -10px 20px #ffffff',
      }
    },
  },
  plugins: [],
};
export default config;

