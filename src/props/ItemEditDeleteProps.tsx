export type ItemEditDeleteProps = {
  item: { id: string };
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};
