import { useState } from "react";
import { BananaProduct } from "@/types/banana";
import { BananaProductCard } from "@/components/BananaProductCard";
import { Button } from "@/components/ui/button";

interface BananaProductsProps {
  onAddToCart: (product: BananaProduct, quantity: number) => void;
}

const bananaProducts: BananaProduct[] = [
  {
    id: "1",
    name: "Banana Suprema Dorada",
    price: 2.99,
    image: "🍌",
    description: "La banana más perfecta del universo. Cultivada con amor y rayos de sol.",
    category: "premium",
    inStock: true,
    rating: 5.0,
    bananaLevel: 10
  },
  {
    id: "2",
    name: "Banana Gigante Tropical",
    price: 4.50,
    image: "🍌",
    description: "¡Una banana del tamaño de tu brazo! Perfecta para compartir... o no.",
    category: "premium",
    inStock: true,
    rating: 4.8,
    bananaLevel: 9
  },
  {
    id: "3",
    name: "Pack Familiar Bananaero",
    price: 8.99,
    image: "🍌🍌🍌",
    description: "12 bananas frescas para toda la familia. ¡Diversión garantizada!",
    category: "fresh",
    inStock: true,
    rating: 4.7,
    bananaLevel: 8
  },
  {
    id: "4",
    name: "Banana Chips Crujientes",
    price: 3.25,
    image: "🥨",
    description: "Bananas deshidratadas y crujientes. ¡El snack perfecto!",
    category: "processed",
    inStock: true,
    rating: 4.5,
    bananaLevel: 7
  },
  {
    id: "5",
    name: "Batido de Banana Mágico",
    price: 5.75,
    image: "🥤",
    description: "Un batido que te transportará al paraíso bananaero.",
    category: "processed",
    inStock: true,
    rating: 4.9,
    bananaLevel: 9
  },
  {
    id: "6",
    name: "Gorra Banana Style",
    price: 12.99,
    image: "🧢",
    description: "Luce tu amor por las bananas con estilo. ¡100% bananaero!",
    category: "accessories",
    inStock: true,
    rating: 4.3,
    bananaLevel: 6
  }
];

export const BananaProducts = ({ onAddToCart }: BananaProductsProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  console.log("🍌 BananaProducts rendered with category:", selectedCategory);

  const categories = [
    { id: "all", name: "Todo Bananaero", emoji: "🍌" },
    { id: "premium", name: "Premium", emoji: "👑" },
    { id: "fresh", name: "Frescas", emoji: "🌱" },
    { id: "processed", name: "Procesadas", emoji: "⚡" },
    { id: "accessories", name: "Accesorios", emoji: "🎯" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? bananaProducts 
    : bananaProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-yellow-900 mb-4 font-comic">
          ¡Bienvenido al Paraíso Bananaero! 🍌
        </h2>
        <p className="text-xl text-yellow-800 max-w-2xl mx-auto">
          Descubre nuestra increíble selección de bananas y productos bananaeros. 
          ¡Todo lo que necesitas para vivir la vida más bananaera!
        </p>
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-4xl animate-bounce" style={{animationDelay: `${i * 0.1}s`}}>
              🍌
            </span>
          ))}
        </div>
      </div>

      {/* Filtros de categoría */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-200 ${
              selectedCategory === category.id
                ? "bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg scale-105"
                : "bg-white hover:bg-yellow-100 text-yellow-700 border-yellow-300"
            }`}
          >
            <span className="mr-2 text-lg">{category.emoji}</span>
            {category.name}
          </Button>
        ))}
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <BananaProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* Sección de garantía bananaera */}
      <div className="mt-16 bg-yellow-300 rounded-3xl p-8 text-center border-4 border-yellow-400">
        <h3 className="text-3xl font-bold text-yellow-900 mb-4">
          🏆 Garantía 100% Bananaera 🏆
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🚚</div>
            <h4 className="font-bold text-yellow-900">Envío Rápido</h4>
            <p className="text-yellow-800">¡Tus bananas llegan súper frescas!</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">💯</div>
            <h4 className="font-bold text-yellow-900">Calidad Premium</h4>
            <p className="text-yellow-800">Solo las mejores bananas del mundo</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">😊</div>
            <h4 className="font-bold text-yellow-900">Satisfacción Total</h4>
            <p className="text-yellow-800">¡O te devolvemos tu dinero!</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-comic {
          font-family: 'Comic Sans MS', cursive, sans-serif;
        }
      `}</style>
    </div>
  );
};