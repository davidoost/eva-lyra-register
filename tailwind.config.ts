import type { Config } from "tailwindcss";
import { adminPreset } from "@new-black/lyra";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@new-black/lyra/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  presets: [adminPreset],
  plugins: [],
};
export default config;
