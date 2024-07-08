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
import { useState, useEffect } from "react";

import { Nav } from "@/components/dashboard/Nav";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/utils";

type Props = {role: string};

export default function SideNavbar() {
  //console.log("sidenavbar: "+role)
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(true);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  const logoutSession = () => {
    const session = getSession();
    localStorage.removeItem('user')
    window.location.href = "/";
  }

  useEffect(()=>{
    const session = getSession();
    if(session.userData?.nombrePerfil === "administrador"){
      setIsAdmin(true)
    }else{
      setIsAdmin(false)
    }
  }, [])

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
        // links={isAdmin ? [
        //   {
        //     title: "Citas",
        //     href: "/panel",
        //     icon: LayoutDashboard,
        //     variant: "default",
        //   },
        //   {
        //     title: "Usuarios",
        //     href: "/panel/usuarios",
        //     icon: UsersRound,
        //     variant: "ghost",
        //   },
        //   {
        //     title: "Perfil",
        //     href: "/panel/perfil",
        //     icon: UsersRound,
        //     variant: "ghost",
        //   }
        // ] : [
        //   {
        //     title: "Mis cotizaciones",
        //     href: "/panel/usuarios",
        //     icon: UsersRound,
        //     variant: "ghost",
        //   },
        //   {
        //     title: "Perfil",
        //     href: "/panel/perfil",
        //     icon: UsersRound,
        //     variant: "ghost",
        //   }
        // ]}

        links={[
          {
            title: "Citas",
            href: "/panel",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Cotizaciones",
            href: "/panel/cotizaciones",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Perfil",
            href: "/panel/perfil",
            icon: UsersRound,
            variant: "ghost",
          }
        ]}




        // links={[
        //   {
        //     title: "Citas",
        //     href: "/panel",
        //     icon: LayoutDashboard,
        //     variant: "default",
        //   },
        //   {
        //     title: "Cotizaciones",
        //     href: "/panel/usuarios",
        //     icon: UsersRound,
        //     variant: "ghost",
        //   },
        //   // {
        //   //   title: "Pedidos",
        //   //   href: "/panel/pedidos",
        //   //   icon: ShoppingCart,
        //   //   variant: "ghost",
        //   // },
        //   // {
        //   //   title: "Ajustes",
        //   //   href: "/panel/ajustes",
        //   //   icon: Settings,
        //   //   variant: "ghost",
        //   // },
        //   // {
        //   //   title: "Regresar web",
        //   //   href: "/",
        //   //   icon: SquareMousePointer,
        //   //   variant: "ghost",
        //   // },
        // ]}
      />
      <div className="w-full h-[80%]">

      </div>
      <Button
            onClick={logoutSession}
            variant="secondary"
            className="p-2 w-full"
          >
            Cerrar sesión
      </Button>
    </div>
  );
}
