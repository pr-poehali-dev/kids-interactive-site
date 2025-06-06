import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-pink-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-blue-300 rounded-full animate-bounce delay-300 opacity-50"></div>
        <div className="absolute bottom-20 right-32 w-14 h-14 bg-green-300 rounded-full animate-pulse delay-500 opacity-70"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="mb-8">
          <span className="text-6xl mb-4 block animate-bounce delay-100">
            🚀
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent font-rubik">
            Космическое Путешествие
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-open-sans">
            Удивительные открытия ждут тебя!
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-open-sans">
            Присоединяйся к нашему увлекательному путешествию в мир знаний, игр
            и открытий. Здесь каждый может стать настоящим исследователем! ✨
          </p>
        </div>

        <Button
          onClick={() => navigate("/page2")}
          size="lg"
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
        >
          🌟 Начать Путешествие 🌟
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
