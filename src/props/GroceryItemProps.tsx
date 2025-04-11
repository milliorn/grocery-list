import { GroceryItemsProps } from "./GroceryItemsProps"

export type GroceryItemProps = {
  item: GroceryItemsProps
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}
