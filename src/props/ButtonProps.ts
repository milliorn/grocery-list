/**
 * Props for a Button component.
 *
 * @property {"red" | "green"} color - The color of the button. Must be either "red" or "green".
 * @property {string} text - The text displayed on the button.
 * @property {() => void} onClick - Callback function that is invoked when the button is clicked.
 */
export type ButtonProps = {
  color: "red" | "green"
  text: string
  onClick: () => void
}
