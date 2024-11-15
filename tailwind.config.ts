import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#229954',
        secondry: '#85c1e9'
      }
    },
    fontFamily:{
      bodyFont:'Poppins'
    }
  },
  plugins: [],
};
export default config;
