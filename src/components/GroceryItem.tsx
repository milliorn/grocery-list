import { ItemsDeleteEdit } from "./ItemsDeleteEdit";
import { ItemsQuantity } from "./ItemsQuantity";
/**
 * @param {*}
 * @returns
 */
function GroceryItem({ item, onDelete, onEdit }: any): JSX.Element {
  return (
    <div className="flex justify-between max-w-full px-5 py-3 mx-auto my-2 overflow-scroll rounded-md cursor-pointer item bg-zinc-100">
      <ItemsQuantity item={item} />
      <ItemsDeleteEdit onDelete={onDelete} item={item} onEdit={onEdit} />
    </div>
  );
}

export default GroceryItem;
