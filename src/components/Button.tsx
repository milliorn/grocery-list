import { JSX } from "react"
import { ButtonProps } from "../props/ButtonProps"

const COLOR_CLASS: Record<ButtonProps["color"], string> = {
  red: "bg-red-600",
  green: "bg-green-800"
}

/**
 * Button component renders a styled button element.
 *
 * @param {ButtonProps} props - The props for the Button component.
 * @param {"red" | "green"} props.color - The semantic color of the button.
 * @param {string} props.text - The text label to display on the button.
 * @param {() => void} props.onClick - The click event handler.
 *
 * @returns {JSX.Element} The rendered button element.
 */
function Button({ color, text, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-block px-5 py-3 m-1 text-sm no-underline border border-none rounded-md cursor-pointer sm:text-base btn ${COLOR_CLASS[color]} text-zinc-50 focus:text-zinc-50 focus:outline-none md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl`}
    >
      {text}
    </button>
  )
}

export default Button
