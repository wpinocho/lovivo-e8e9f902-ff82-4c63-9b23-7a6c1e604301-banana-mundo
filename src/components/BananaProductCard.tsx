import { useState } from "react";
import { BananaProduct } from "@/types/banana";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BananaProductCardProps {
  product: BananaProduct;
  onAddToCart: (product: BananaProduct, quantity: number) => void;
}

export const BananaProductCard = ({ product, onAddToCart }: BananaProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();

  console.log("🍌 BananaProductCard rendered for:", product.name);

  const handleAddToCart = () => {
    console.log("🍌 Adding to cart:", product.name, "quantity:", quantity);
    onAddToCart(product, quantity);
    toast({
      title: "¡Banana añadida! 🍌",
      description: `${quantity}x ${product.name} agregado a tu canasta bananaera`,
      duration: 2000,
    });
  };

  const getBananaLevelColor = (level: number) => {
    if (level >= 9) return "bg-yellow-500";
    if (level >= 7) return "bg-yellow-400";
    if (level >= 5) return "bg-yellow-300";
    return "bg-yellow-200";
  };

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case "premium": return "👑";
      case "fresh": return "🌱";
      case "processed": return "⚡";
      case "accessories": return "🎯";
      default: return "🍌";
    }
  };

  return (
    <div
      className={`bg-white rounded-3xl shadow-lg border-4 border-yellow-200 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        isHovered ? "border-yellow-400" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header de la tarjeta */}
      <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 p-4 text-center relative">
        <div className="text-6xl mb-2 animate-bounce">{product.image}</div>
        <Badge className={`absolute top-2 right-2 ${getBananaLevelColor(product.bananaLevel)} text-yellow-900`}>
          {getCategoryEmoji(product.category)} {product.category.toUpperCase()}
        </Badge>
        
        {/* Nivel de bananidad */}
        <div className="flex justify-center items-center mt-2">
          <span className="text-sm font-bold text-yellow-900 mr-2">Nivel Bananaero:</span>
          <div className="flex">
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className={`text-lg ${i < product.bananaLevel ? "text-yellow-600" : "text-yellow-200"}`}
              >
                🍌
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-yellow-900 mb-2 font-comic">
          {product.name}
        </h3>
        
        <p className="text-yellow-700 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-500 fill-current"
                    : "text-yellow-200"
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-yellow-700 font-semibold">
            {product.rating} ⭐
          </span>
        </div>

        {/* Precio */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl font-bold text-yellow-900">
            ${product.price}
          </div>
          <Badge variant="outline" className="text-green-600 border-green-300">
            {product.inStock ? "¡En Stock! 📦" : "Agotado 😢"}
          </Badge>
        </div>

        {/* Selector de cantidad */}
        <div className="flex items-center justify-center mb-4 bg-yellow-50 rounded-full p-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="rounded-full w-8 h-8 p-0 border-yellow-300 hover:bg-yellow-100"
          >
            <Minus className="w-4 h-4" />
          </Button>
          
          <span className="mx-4 font-bold text-lg text-yellow-900 min-w-[2rem] text-center">
            {quantity}
          </span>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setQuantity(quantity + 1)}
            className="rounded-full w-8 h-8 p-0 border-yellow-300 hover:bg-yellow-100"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Botón de agregar al carrito */}
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {product.inStock ? (
            <>
              <span className="mr-2">🛒</span>
              ¡Añadir a mi Canasta Bananaera!
            </>
          ) : (
            <>
              <span className="mr-2">😢</span>
              No Disponible
            </>
          )}
        </Button>
      </div>

      <style jsx>{`
        .font-comic {
          font-family: 'Comic Sans MS', cursive, sans-serif;
        }
      `}</style>
    </div>
  );
};