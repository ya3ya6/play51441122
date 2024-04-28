export type GetMenuAPIArgsType = {
  slug: string;
};

interface IMenu {
  id: number;
  name: string;
  slug: string;
  url: string;
  parent_id: number;
  children: IMenu[];
}

export type GetMenuAPIResponseType = IMenu;
