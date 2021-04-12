export type Child = { title: string; id?: string };
export type Item = {
  title: string;
  children: Child[];
  visible?: boolean;
  id?: string;
};
export type Param = {
  collection: string;
  type: string;
};

export type RelationType =
  | "rel_artists"
  | "rel_publications"
  | "rel_exhibitions"
  | "rel_events";
export interface SortableItemType {
  name: string;
  id: string;
}
