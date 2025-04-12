import { JSX } from "react"
import { ButtonProps } from "../props/ButtonProps"

/**
 * Button component renders a styled button element.
 *
 * @param {ButtonProps} props - The props for the Button component.
 * @param {string} props.color - The background color for the button.
 * @param {string} props.text - The text label to display on the button.
 * @param {() => void} props.onClick - The click event handler.
 *
 * @returns {JSX.Element} The rendered button element.
 */
function Button({ color, text, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      type="button" // Specify button type to prevent form submissions when clicked.
      onClick={onClick} // Attach the click event handler.
      style={{ backgroundColor: color }} // Apply inline style to set the background color.
      className="inline-block px-5 py-3 m-1 text-sm no-underline border border-none rounded-md cursor-pointer sm:text-base btn bg-zinc-900 text-zinc-50 focus:text-zinc-50 focus:outline-none md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
      // CSS classes manage responsive text sizes, spacing, border, and focus styles.
    >
      {text} {/* Render the button's text label */}
    </button>
  )
}

export default Button
