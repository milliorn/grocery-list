import { JSX } from "react"
import { GroceryItemsProps } from "../props/GroceryItemsProps"

/**
 * ItemsQuantity component renders the details of a grocery item.
 *
 * This component displays the item name and its quantity in a formatted style,
 * using responsive text sizes and custom CSS classes for styling.
 *
 * @param {Object} props - The properties object.
 * @param {GroceryItemsProps} props.item - The grocery item data containing the text and quantity.
 * @returns {JSX.Element} The rendered component showing the grocery item's details.
 */
export function ItemsQuantity({
  item
}: {
  item: GroceryItemsProps
}): JSX.Element {
  return (
    <div className="text-zinc-900">
      {/* Display the item name with label */}
      <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <span className="font-bold itemBold">Item: </span>
        <span>{item.text}</span>
      </p>
      {/* Display the item quantity with label */}
      <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <span className="font-bold itemBold">Quantity: </span>
        {item.quantity}
      </p>
    </div>
  )
}
