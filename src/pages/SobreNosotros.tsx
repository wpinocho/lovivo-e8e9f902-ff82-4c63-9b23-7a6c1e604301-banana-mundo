import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Star, Award, Users } from "lucide-react";

const SobreNosotros = () => {
  const navigate = useNavigate();

  console.log("🍌 SobreNosotros page loaded - ¡La página más bananaera!");

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-300 to-orange-300">
      <div className="banana-pattern absolute inset-0 opacity-10"></div>
      
      {/* Header con botón de regreso */}
      <div className="relative z-10 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className="text-white hover:bg-yellow-300 hover:text-yellow-800 font-semibold"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              🍌 Volver a la Tienda
            </Button>
            <h1 className="text-3xl font-bold text-white drop-shadow-lg flex items-center">
              <span className="text-4xl mr-2">🍌</span>
              Sobre Nosotros
              <span className="text-4xl ml-2">🍌</span>
            </h1>
            <div></div>
          </div>
        </div>
      </div>

      <main className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-yellow-800 mb-6 animate-bounce">
            🍌 ¡SOMOS LA TIENDA MÁS BANANAERA! 🍌
          </h2>
          <p className="text-2xl text-yellow-700 font-semibold mb-8">
            Desde 1985, llevando la mejor banana del mundo mundial a tu mesa
          </p>
          <div className="flex justify-center space-x-4 text-6xl animate-pulse">
            <span>🍌</span>
            <span>🌴</span>
            <span>🍌</span>
            <span>🌴</span>
            <span>🍌</span>
          </div>
        </div>

        {/* Nuestra Historia */}
        <Card className="mb-12 bg-gradient-to-r from-yellow-100 to-orange-100 border-4 border-yellow-400 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-yellow-800 flex items-center justify-center">
              <span className="text-5xl mr-3">📖</span>
              Nuestra Historia Bananaera
              <span className="text-5xl ml-3">📖</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-yellow-700 leading-relaxed">
            <p className="mb-6">
              🍌 Todo comenzó en 1985 cuando Don Banana, un apasionado cultivador de bananas, 
              decidió crear la tienda más bananaera del mundo mundial. Con una visión clara: 
              <strong className="text-yellow-800"> "¡Que todo el mundo disfrute de las mejores bananas del planeta!"</strong>
            </p>
            <p className="mb-6">
              🌴 Desde nuestros humildes inicios con un pequeño puesto de bananas, hemos crecido 
              hasta convertirnos en la cadena de tiendas de bananas más grande y amarilla del universo. 
              Nuestro secreto: <strong className="text-yellow-800">¡AMOR POR LAS BANANAS!</strong>
            </p>
            <p className="mb-6">
              🍌 Hoy en día, servimos a más de 1 millón de clientes bananaeros al año, 
              ofreciendo desde bananas clásicas hasta las más exóticas variedades del mundo. 
              ¡Porque creemos que la vida es mejor cuando es amarilla!
            </p>
          </CardContent>
        </Card>

        {/* Estadísticas Bananaeras */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-b from-yellow-300 to-yellow-400 border-4 border-yellow-500 text-center hover:scale-105 transition-transform">
            <CardContent className="pt-6">
              <div className="text-5xl mb-4">🍌</div>
              <div className="text-3xl font-bold text-yellow-800">1M+</div>
              <div className="text-yellow-700 font-semibold">Bananas Vendidas</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-b from-orange-300 to-orange-400 border-4 border-orange-500 text-center hover:scale-105 transition-transform">
            <CardContent className="pt-6">
              <div className="text-5xl mb-4">😊</div>
              <div className="text-3xl font-bold text-orange-800">500K+</div>
              <div className="text-orange-700 font-semibold">Clientes Felices</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-b from-yellow-300 to-yellow-400 border-4 border-yellow-500 text-center hover:scale-105 transition-transform">
            <CardContent className="pt-6">
              <div className="text-5xl mb-4">🌍</div>
              <div className="text-3xl font-bold text-yellow-800">50+</div>
              <div className="text-yellow-700 font-semibold">Países Servidos</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-b from-orange-300 to-orange-400 border-4 border-orange-500 text-center hover:scale-105 transition-transform">
            <CardContent className="pt-6">
              <div className="text-5xl mb-4">⭐</div>
              <div className="text-3xl font-bold text-orange-800">4.9/5</div>
              <div className="text-orange-700 font-semibold">Calificación</div>
            </CardContent>
          </Card>
        </div>

        {/* Nuestros Valores */}
        <Card className="mb-12 bg-gradient-to-r from-orange-100 to-yellow-100 border-4 border-orange-400 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-orange-800 flex items-center justify-center">
              <span className="text-5xl mr-3">💛</span>
              Nuestros Valores Bananaeros
              <span className="text-5xl ml-3">💛</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Heart className="h-8 w-8 text-red-500 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">🍌 Pasión por las Bananas</h3>
                  <p className="text-orange-700">Cada banana que vendemos está seleccionada con amor y cuidado.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Star className="h-8 w-8 text-yellow-500 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">⭐ Calidad Premium</h3>
                  <p className="text-orange-700">Solo las mejores bananas del mundo llegan a nuestras tiendas.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-blue-500 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">👥 Comunidad Bananaera</h3>
                  <p className="text-orange-700">Creamos una familia de amantes de las bananas en todo el mundo.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Award className="h-8 w-8 text-purple-500 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-orange-800 mb-2">🏆 Excelencia</h3>
                  <p className="text-orange-700">Siempre buscamos ser la tienda más bananaera del universo.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Equipo Bananaero */}
        <Card className="mb-12 bg-gradient-to-r from-yellow-100 to-orange-100 border-4 border-yellow-400 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-yellow-800 flex items-center justify-center">
              <span className="text-5xl mr-3">👨‍👩‍👧‍👦</span>
              Nuestro Equipo Bananaero
              <span className="text-5xl ml-3">👨‍👩‍👧‍👦</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-yellow-200 p-6 rounded-lg border-2 border-yellow-400">
                <div className="text-6xl mb-4">🍌</div>
                <h3 className="text-2xl font-bold text-yellow-800 mb-2">Don Banana</h3>
                <p className="text-yellow-700 font-semibold">Fundador & CEO Bananaero</p>
                <p className="text-sm text-yellow-600 mt-2">"¡La banana perfecta existe, y está aquí!"</p>
              </div>
              
              <div className="bg-orange-200 p-6 rounded-lg border-2 border-orange-400">
                <div className="text-6xl mb-4">🌴</div>
                <h3 className="text-2xl font-bold text-orange-800 mb-2">María Tropical</h3>
                <p className="text-orange-700 font-semibold">Directora de Calidad</p>
                <p className="text-sm text-orange-600 mt-2">"Cada banana debe ser una experiencia tropical"</p>
              </div>
              
              <div className="bg-yellow-200 p-6 rounded-lg border-2 border-yellow-400">
                <div className="text-6xl mb-4">🍌</div>
                <h3 className="text-2xl font-bold text-yellow-800 mb-2">Carlos Amarillo</h3>
                <p className="text-yellow-700 font-semibold">Jefe de Innovación</p>
                <p className="text-sm text-yellow-600 mt-2">"Siempre pensando en la próxima banana revolucionaria"</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-yellow-400 to-orange-400 p-12 rounded-3xl border-4 border-yellow-500 shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            🍌 ¡ÚNETE A LA REVOLUCIÓN BANANAERA! 🍌
          </h2>
          <p className="text-xl text-white mb-8">
            Descubre por qué somos la tienda de bananas más bananaera del mundo mundial
          </p>
          <Button
            size="lg"
            className="bg-white text-yellow-600 hover:bg-yellow-100 font-bold text-xl px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
            onClick={() => navigate("/")}
          >
            🛒 ¡Comprar Bananas Ahora! 🍌
          </Button>
        </div>
      </main>

      <style jsx>{`
        .banana-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};

export default SobreNosotros;