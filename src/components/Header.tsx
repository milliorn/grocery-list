import { JSX } from "react"
import Button from "./Button"
import { HeaderProps } from "../props/HeaderProps"

/**
 * Header component renders the application's header section.
 * It displays the title "Grocery List" and a button that toggles the form's visibility.
 *
 * @param {HeaderProps} props - The properties passed to this component.
 * @param {() => void} props.showForm - Callback function to toggle the display of the form.
 * @param {boolean} props.changeTextAndColor - Flag indicating the current state of the form,
 *                                              used to change the button's text and color.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
function Header({ showForm, changeTextAndColor }: HeaderProps): JSX.Element {
  return (
    <header className="flex items-center justify-between mb-4 header">
      {/* App title */}
      <h2 className="font-serif text-xl app-header sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        Grocery List
      </h2>
      {/*
        Button component:
        - The color toggles between red and green based on the changeTextAndColor flag.
        - The text toggles between "Close" and "Add" based on the changeTextAndColor flag.
        - Clicking the button triggers the showForm callback.
      */}
      <Button
        color={changeTextAndColor ? "red" : "green"}
        onClick={showForm}
        text={changeTextAndColor ? "Close" : "Add"}
      />
    </header>
  )
}

export default Header
