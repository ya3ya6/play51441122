export interface TabBoxPT {
  active: boolean;
  id: number;
  title: string;
  activeHandler: (id: number) => void;
}
export interface RequirementListPT {
  id: number;
  description: string[];
  address: string;
}
export interface RequirementBoxPT {
  description: string;
}
