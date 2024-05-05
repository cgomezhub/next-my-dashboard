import React from "react";
import Image from "next/image";
import {
  IoBasketball,
  IoBrowsersOutline,
  IoCalculator,
  IoLogoReact,
} from "react-icons/io5";
import { SideBarMenuItem } from "./SideBarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    title: "Dashboard",
    subtitle: "Visualización de Datos",
    icon: <IoBrowsersOutline size={40} />,
  },
  {
    path: "/dashboard/counter",
    title: "Counter",
    subtitle: "Contador Clientes",
    icon: <IoCalculator size={40} />,
  },
  {
    path: "/dashboard/pokemons",
    title: "Pokemons",
    subtitle: "Generación estática",
    icon: <IoBasketball size={40} />,
  },
];
export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0  overflow-y-scroll "
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="inline-block" size={30} />
          <span> Dash </span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width={50}
              height={50}
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User Profile Picture"
              priority={true}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Carlos Gomez</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SideBarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
