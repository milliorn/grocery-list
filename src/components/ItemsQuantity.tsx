/**
 * @param param0
 * @returns
 */
export function ItemsQuantity({ item }: { item: any }): JSX.Element {
  return (
    <div className="text-zinc-900">
      <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <span className="font-bold itemBold">Item: </span>
        <span>{item.text}</span>
      </p>
      <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <span className="font-bold itemBold">Quantity: </span>
        {item.quantity}
      </p>
    </div>
  );
}
