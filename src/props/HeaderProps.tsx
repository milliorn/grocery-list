/**
 * Props for the Header component.
 *
 * This type defines the properties expected by the Header component.
 * It includes a callback function to toggle the visibility of a form
 * and a boolean flag that indicates whether to change the text and color
 * (which might be used to reflect the current state in the UI).
 *
 * @property {() => void} showForm - Callback function to toggle the form's visibility.
 * @property {boolean} changeTextAndColor - Flag indicating if text and color should change.
 */
export type HeaderProps = {
  showForm: () => void
  changeTextAndColor: boolean
}
