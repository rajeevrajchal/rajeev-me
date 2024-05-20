import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        /* Firefox */
        ".scrollbar-thin": {
          "scrollbar-width": "thin",
        },
        /* Webkit */
        ".scrollbar-thin::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        ".scrollbar-thin::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        ".scrollbar-thin::-webkit-scrollbar-thumb": {
          background: "#888",
          "border-radius": "4px",
        },
        ".scrollbar-thin::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      });
    },
  ],
};
export default config;
