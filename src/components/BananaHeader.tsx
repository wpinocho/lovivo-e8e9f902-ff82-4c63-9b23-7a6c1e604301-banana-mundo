import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BananaHeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const BananaHeader = ({ cartItemsCount, onCartClick }: BananaHeaderProps) => {
  const navigate = useNavigate();

  console.log("🍌 BananaHeader rendered with cart items:", cartItemsCount);

  return (
    <header className="relative z-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => navigate("/")}
          >
            <span className="text-4xl">🍌</span>
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">
              Banana Store
            </h1>
            <span className="text-4xl">🍌</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              className="text-white hover:bg-yellow-300 hover:text-yellow-800 font-semibold"
              onClick={() => navigate("/")}
            >
              🏠 Inicio
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-yellow-300 hover:text-yellow-800 font-semibold"
              onClick={() => navigate("/sobre-nosotros")}
            >
              🍌 Sobre Nosotros
            </Button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="relative bg-white/20 border-white/30 hover:bg-white/30"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5 text-white" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="bg-white/20 border-white/30 hover:bg-white/30"
            >
              <User className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};