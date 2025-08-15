import { Heart, Mail, Phone, MapPin } from "lucide-react";

export const BananaFooter = () => {
  console.log("🍌 BananaFooter rendered");

  return (
    <footer className="bg-yellow-600 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-4xl">🍌</div>
              <h3 className="text-2xl font-bold font-comic">BANANA WORLD</h3>
            </div>
            <p className="text-yellow-100 mb-4 leading-relaxed">
              La tienda más bananaera del mundo mundial. Desde 2024 trayendo las mejores 
              bananas directamente a tu mesa. ¡Vivimos y respiramos bananas! 🍌
            </p>
            <div className="flex space-x-4">
              <div className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer">
                <span className="text-xl">📘</span>
              </div>
              <div className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer">
                <span className="text-xl">📷</span>
              </div>
              <div className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer">
                <span className="text-xl">🐦</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-comic">Enlaces Bananaeros</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-yellow-100 hover:text-white transition-colors">
                  🏠 Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-100 hover:text-white transition-colors">
                  🍌 Productos
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-100 hover:text-white transition-colors">
                  📖 Nuestra Historia
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-100 hover:text-white transition-colors">
                  📞 Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-yellow-100 hover:text-white transition-colors">
                  🎁 Ofertas Especiales
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-comic">Contáctanos</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-300" />
                <span className="text-yellow-100 text-sm">
                  123 Banana Street, Tropical City
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-300" />
                <span className="text-yellow-100 text-sm">
                  +1 (555) BANANA-1
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-300" />
                <span className="text-yellow-100 text-sm">
                  hola@bananaworld.com
                </span>
              </div>
            </div>

            {/* Horarios */}
            <div className="mt-4">
              <h5 className="font-bold text-yellow-200 mb-2">Horarios Bananaeros:</h5>
              <p className="text-yellow-100 text-sm">
                Lun - Vie: 8:00 AM - 8:00 PM<br />
                Sáb - Dom: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Sección de newsletter */}
        <div className="bg-yellow-500 rounded-2xl p-6 mb-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-yellow-900 mb-2 font-comic">
              🎉 ¡Únete al Club Bananaero! 🎉
            </h4>
            <p className="text-yellow-800 mb-4">
              Recibe ofertas exclusivas, recetas bananaeras y noticias del mundo de las bananas
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu-email@bananaero.com"
                className="flex-1 px-4 py-2 rounded-full border-2 border-yellow-400 focus:border-yellow-600 focus:outline-none"
              />
              <button className="bg-yellow-700 hover:bg-yellow-800 text-white px-6 py-2 rounded-full font-bold transition-colors">
                ¡Suscríbeme! 🍌
              </button>
            </div>
          </div>
        </div>

        {/* Garantías y certificaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl mb-2">🌱</div>
            <h5 className="font-bold text-yellow-200">100% Orgánico</h5>
            <p className="text-yellow-100 text-sm">Cultivado sin químicos dañinos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚚</div>
            <h5 className="font-bold text-yellow-200">Envío Rápido</h5>
            <p className="text-yellow-100 text-sm">Entrega en 24-48 horas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💯</div>
            <h5 className="font-bold text-yellow-200">Satisfacción Garantizada</h5>
            <p className="text-yellow-100 text-sm">O te devolvemos tu dinero</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-yellow-500 pt-6 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-yellow-100 text-sm mb-2 sm:mb-0">
              © 2024 Banana World. Todos los derechos bananaeros reservados.
            </p>
            <div className="flex items-center space-x-1 text-yellow-100 text-sm">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>y muchas</span>
              <span className="text-lg">🍌</span>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-yellow-200">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Devoluciones</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-comic {
          font-family: 'Comic Sans MS', cursive, sans-serif;
        }
      `}</style>
    </footer>
  );
};