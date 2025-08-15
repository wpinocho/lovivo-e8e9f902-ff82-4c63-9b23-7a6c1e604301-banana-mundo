import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BananaHeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const BananaHeader = ({ cartItemsCount, onCartClick }: BananaHeaderProps) => {
  console.log("🍌 BananaHeader rendered with cart items:", cartItemsCount);

  return (
    <header className="sticky top-0 z-50 bg-yellow-400 shadow-lg border-b-4 border-yellow-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo bananaero */}
          <div className="flex items-center space-x-2">
            <div className="text-6xl animate-bounce">🍌</div>
            <div>
              <h1 className="text-3xl font-bold text-yellow-900 font-comic">
                BANANA WORLD
              </h1>
              <p className="text-yellow-800 text-sm font-semibold">
                ¡La tienda más bananaera del mundo mundial!
              </p>
            </div>
          </div>

          {/* Barra de búsqueda */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-600 w-4 h-4" />
              <Input
                placeholder="Busca tu banana perfecta... 🍌"
                className="pl-10 bg-yellow-100 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Carrito bananaero */}
          <Button
            onClick={onCartClick}
            className="relative bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            <span className="font-bold">Mi Canasta</span>
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
                {cartItemsCount}
              </span>
            )}
          </Button>
        </div>

        {/* Mensaje promocional */}
        <div className="mt-4 text-center">
          <div className="bg-yellow-300 rounded-full px-6 py-2 inline-block border-2 border-yellow-500">
            <span className="text-yellow-900 font-bold text-sm">
              🎉 ¡OFERTA BANANAERA! 🎉 Envío gratis en compras mayores a $50
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-comic {
          font-family: 'Comic Sans MS', cursive, sans-serif;
        }
      `}</style>
    </header>
  );
};