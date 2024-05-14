"use client";

import { SimpleWidget } from "./SimpleWidget";
import {  useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";

interface Props {
  value?: number;
}

export const WidgetGrid = ({ value = 0 }: Props) => {
  const isCart = useAppSelector((state) => state.counter.count);


  return (
    <div className="flex flex-wrap items-center justify-center">
      <SimpleWidget
        count={isCart}
        subTitle="productos agregados"
        label="contador"
        href="/dashboard/counter"
        icon={<IoCartOutline size={70} className="text-blue-500" />}
      />
    </div>
  );
};
