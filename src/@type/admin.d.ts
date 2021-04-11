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
