import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: "Shoping Cart Counter",
  description: "Contador de Productos",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span> Productos en el carrito: </span>
      {/* client server component */}
      <CartCounter value={10} />
    </div>
  );
}
