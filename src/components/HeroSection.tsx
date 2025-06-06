import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="parchment" patternUnits="userSpaceOnUse" width="100" height="100"><rect width="100" height="100" fill="%23f7f3e9"/><path d="M10,10 Q50,5 90,10 Q95,50 90,90 Q50,95 10,90 Q5,50 10,10" fill="none" stroke="%23d4af37" stroke-width="0.5" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23parchment)"/></svg>')`,
        backgroundSize: "200px 200px",
      }}
    >
      {/* Анимированные буквы кириллицы */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-4xl text-amber-600 animate-bounce opacity-70 font-serif">
          А
        </div>
        <div className="absolute top-40 right-20 text-3xl text-orange-600 animate-pulse opacity-60 font-serif">
          Б
        </div>
        <div className="absolute bottom-32 left-20 text-5xl text-yellow-600 animate-bounce delay-300 opacity-50 font-serif">
          В
        </div>
        <div className="absolute bottom-20 right-32 text-3xl text-amber-700 animate-pulse delay-500 opacity-70 font-serif">
          Г
        </div>
        <div className="absolute top-60 left-1/3 text-4xl text-orange-500 animate-bounce delay-700 opacity-60 font-serif">
          Д
        </div>
        <div className="absolute top-80 right-1/3 text-3xl text-yellow-700 animate-pulse delay-1000 opacity-50 font-serif">
          Е
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="mb-8">
          <span className="text-6xl mb-4 block animate-bounce delay-100">
            📜
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 bg-clip-text text-transparent font-serif leading-tight">
            Как родилась русская азбука?
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-4 font-serif">
            Удивительная история письменности!
          </p>
          <p className="text-lg text-amber-700 mb-8 max-w-2xl mx-auto font-serif leading-relaxed">
            Привет, юный историк! Узнай, как Кирилл и Мефодий придумали первые
            буквы, а дети Древней Руси писали на бересте! ✨
          </p>
        </div>

        <Button
          onClick={() => navigate("/page2")}
          size="lg"
          className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-xl rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-serif border-2 border-amber-400"
        >
          📚 Начать путешествие 📚
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
