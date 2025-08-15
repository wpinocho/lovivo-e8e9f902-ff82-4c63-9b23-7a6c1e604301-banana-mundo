import { CartItem } from "@/types/banana";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BananaCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export const BananaCart = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onUpdateQuantity,
}: BananaCartProps) => {
  const { toast } = useToast();

  console.log("🍌 BananaCart rendered with items:", items);

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    console.log("🍌 Processing checkout with items:", items);
    toast({
      title: "¡Compra Bananaera Exitosa! 🎉",
      description: `¡Gracias por tu compra de ${getTotalItems()} productos bananaeros por $${getTotalPrice().toFixed(2)}!`,
      duration: 5000,
    });
    // Aquí iría la lógica real de checkout
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Panel del carrito */}
      <div className="relative ml-auto h-full w-full max-w-md bg-gradient-to-b from-yellow-100 to-yellow-200 shadow-2xl transform transition-transform">
        {/* Header del carrito */}
        <div className="bg-yellow-400 p-6 border-b-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-6 h-6 text-yellow-900" />
              <h2 className="text-2xl font-bold text-yellow-900 font-comic">
                Mi Canasta Bananaera
              </h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-yellow-900 hover:bg-yellow-300 rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="mt-2 flex items-center space-x-4">
            <Badge className="bg-yellow-600 text-white">
              {getTotalItems()} productos
            </Badge>
            <span className="text-yellow-900 font-bold">
              Total: ${getTotalPrice().toFixed(2)}
            </span>
          </div>
        </div>

        {/* Contenido del carrito */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🍌</div>
              <h3 className="text-xl font-bold text-yellow-900 mb-2">
                ¡Tu canasta está vacía!
              </h3>
              <p className="text-yellow-700">
                Agrega algunas bananas deliciosas para empezar tu aventura bananaera.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 shadow-md border-2 border-yellow-200"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">{item.image}</div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-yellow-900 text-sm">
                        {item.name}
                      </h4>
                      <p className="text-yellow-700 text-xs mt-1">
                        ${item.price} c/u
                      </p>
                      
                      {/* Controles de cantidad */}
                      <div className="flex items-center mt-2 space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 p-0 rounded-full border-yellow-300"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        
                        <span className="font-bold text-yellow-900 min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 p-0 rounded-full border-yellow-300"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-yellow-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 mt-1 p-1"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer del carrito */}
        {items.length > 0 && (
          <div className="bg-yellow-300 p-6 border-t-4 border-yellow-400">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-yellow-900">Subtotal:</span>
                <span className="font-bold text-yellow-900">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-yellow-800">Envío:</span>
                <span className="text-green-600 font-bold">
                  {getTotalPrice() >= 50 ? "¡GRATIS! 🎉" : "$5.99"}
                </span>
              </div>
              <div className="border-t-2 border-yellow-400 pt-2">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-yellow-900">Total:</span>
                  <span className="text-xl font-bold text-yellow-900">
                    ${(getTotalPrice() + (getTotalPrice() >= 50 ? 0 : 5.99)).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            
            <Button
              onClick={handleCheckout}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              <span className="mr-2">🎉</span>
              ¡Finalizar Compra Bananaera!
            </Button>
            
            {getTotalPrice() < 50 && (
              <p className="text-center text-yellow-800 text-xs mt-2">
                ¡Agrega ${(50 - getTotalPrice()).toFixed(2)} más para envío gratis! 🚚
              </p>
            )}
          </div>
        )}

        <style jsx>{`
          .font-comic {
            font-family: 'Comic Sans MS', cursive, sans-serif;
          }
        `}</style>
      </div>
    </div>
  );
};