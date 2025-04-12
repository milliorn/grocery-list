/**
 * Vite Configuration File
 *
 * This configuration sets up Vite for a React-based project.
 * It includes the React plugin for enabling React-specific functionalities
 * such as JSX transformation and fast refresh, and it specifies a PostCSS
 * configuration file to process CSS.
 *
 * @returns {import('vite').UserConfig} Vite configuration object.
 */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  // Register the React plugin to enable JSX support and fast refresh in development.
  plugins: [react()],

  // CSS configuration: specify a custom PostCSS configuration file.
  css: {
    postcss: "./postcss.config.cjs"
  },
  base: "/grocery-list/"
})
