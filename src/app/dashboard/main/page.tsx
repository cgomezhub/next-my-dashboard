import { SimpleWidget, WidgetGrid } from "@/components";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl"> Dasboard </h1>

      <span className="text-5xl my-4 font-bold text-center">
        Informacion General
      </span>
      <WidgetGrid />
    </div>
  );
}
