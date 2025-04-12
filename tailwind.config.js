/**
 * Tailwind CSS Configuration
 *
 * This configuration file tells Tailwind CSS where to look for class names,
 * allows extending the default theme, and supports adding plugins if needed.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  // Define the paths to all of the template files in your project.
  // Tailwind uses these paths to purge unused styles in production.
  content: [
    "./index.html",                       // Main HTML file
    "./src/**/*.{js,jsx,ts,tsx}"           // All JavaScript/TypeScript files in the src directory
  ],
  // Customize the default theme by extending it.
  // This object can include colors, fonts, spacing, and much more.
  theme: {
    extend: {} // Add custom values here to extend the default Tailwind theme without replacing it.
  },
  // Add Tailwind CSS plugins here.
  // Plugins can provide additional utility classes and component styles.
  plugins: []
};
