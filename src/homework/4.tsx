import { createContext, useMemo, useState, useContext, ReactNode } from "react";
import noop from "lodash/noop";

type MenuIds = "first" | "second" | "last";
type Menu = { id: MenuIds; title: string };

// Додати тип Menu Selected

type MenuSelected = {
  selectedMenu: SelectedMenu | null;
};

const MenuSelectedContext = createContext<MenuSelected>({
  selectedMenu: null,
});

// Додайте тип MenuAction

type MenuAction = {
  onSelectedMenu: (menu: Menu) => void;
};

const MenuActionContext = createContext<MenuAction>({
  onSelectedMenu: noop,
});

type PropsProvider = {
  children: ReactNode; // Додати тип для children
};

type SelectedMenu = {
  id: string;
};

const MenuProvider = ({ children }: PropsProvider) => {
  // Додати тип для SelectedMenu він повинен містити { id }
  const [selectedMenu, setSelectedMenu] = useState<SelectedMenu | null>(null);

  const menuContextAction = useMemo(
    () => ({
      onSelectedMenu: setSelectedMenu,
    }),
    []
  );

  const menuContextSelected = useMemo(
    () => ({
      selectedMenu,
    }),
    [selectedMenu]
  );

  return (
    <MenuActionContext.Provider value={menuContextAction}>
      <MenuSelectedContext.Provider value={menuContextSelected}>
        {children}
      </MenuSelectedContext.Provider>
    </MenuActionContext.Provider>
  );
};

type PropsMenu = {
  menus: Menu[]; // Додайте вірний тип для меню
};

const MenuComponent = ({ menus }: PropsMenu) => {
  const { onSelectedMenu } = useContext(MenuActionContext);
  const { selectedMenu } = useContext(MenuSelectedContext);

  return (
    <>
      {menus.map((menu) => (
        <div
          key={menu.id}
          onClick={() => onSelectedMenu({ id: menu.id, title: menu.title })}
        >
          {menu.title}
          {selectedMenu?.id === menu.id ? " Selected" : " Not selected"}
        </div>
      ))}
    </>
  );
};

export const ComponentApp = () => {
  const menus: Menu[] = [
    {
      id: "first",
      title: "first",
    },
    {
      id: "second",
      title: "second",
    },
    {
      id: "last",
      title: "last",
    },
  ];

  return (
    <MenuProvider>
      <MenuComponent menus={menus} />
    </MenuProvider>
  );
};
