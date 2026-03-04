/**
 * Props for a Button component.
 *
 * @property {string} color - The color of the button. This can be any valid CSS color value.
 * @property {string} text - The text displayed on the button.
 * @property {() => void} onClick - Callback function that is invoked when the button is clicked.
 */
export type ButtonProps = {
  color: string
  text: string
  onClick: () => void
}
