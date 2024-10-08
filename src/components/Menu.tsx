import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Historial de Transacciones",
    key: "transactions",
  },
  {
    label: "Aperturas",
    key: "subscribe",
  },
  {
    label: "Cancelaciones",
    key: "unsubscribe",
  },
];

interface MenuComponentProps {
  currentRender: string;
  setCurrentRender: React.Dispatch<React.SetStateAction<string>>;
}

const MenuComponent: React.FC<MenuComponentProps> = ({
  currentRender,
  setCurrentRender,
}: MenuComponentProps) => {
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrentRender(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[currentRender]}
      mode="horizontal"
      items={items}
      className="rounded-xl"
    />
  );
};

export default MenuComponent;
