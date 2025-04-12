/**
 * PostCSS Configuration File
 *
 * This configuration sets up PostCSS with two primary plugins:
 *
 * - tailwindcss:
 *   Processes Tailwind CSS classes based on your tailwind.config.js file,
 *   generating the necessary utility classes for your project.
 *
 * - autoprefixer:
 *   Automatically adds vendor prefixes to your CSS rules to ensure compatibility
 *   across different browsers.
 *
 * For more information on these plugins, see:
 * - Tailwind CSS: https://tailwindcss.com/
 * - Autoprefixer: https://github.com/postcss/autoprefixer
 */
module.exports = {
  plugins: {
    // Processes Tailwind CSS directives and generates utility classes.
    tailwindcss: {},

    // Adds vendor prefixes to CSS rules for cross-browser compatibility.
    autoprefixer: {}
  }
}
