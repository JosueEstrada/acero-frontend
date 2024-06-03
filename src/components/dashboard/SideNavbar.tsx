/** @format */

"use client";

import { useWindowWidth } from "@react-hook/window-size";
import {
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  SquareMousePointer,
  UsersRound,
} from "lucide-react";
import { useState } from "react";

import { Nav } from "@/components/dashboard/Nav";
import { Button } from "@/components/ui/button";

type Props = {};

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Tablero",
            href: "/panel",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Usuarios",
            href: "/panel/usuarios",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Pedidos",
            href: "/panel/pedidos",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Ajustes",
            href: "/panel/ajustes",
            icon: Settings,
            variant: "ghost",
          },
          {
            title: "Regresar web",
            href: "/",
            icon: SquareMousePointer,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
