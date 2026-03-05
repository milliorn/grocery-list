import { GroceryItem } from "./GroceryItem"

/**
 * Props for the ItemsQuantity component.
 *
 * Only the fields rendered by the component are required.
 *
 * @property {Pick<GroceryItem, "text" | "quantity">} item - The grocery item data containing the text and quantity.
 */
export type ItemsQuantityProps = {
  item: Pick<GroceryItem, "text" | "quantity">
}
