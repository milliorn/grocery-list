import { GroceryItemsProps } from "./GroceryItemsProps"

export type ItemsProps = {
  items: GroceryItemsProps[]
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}
