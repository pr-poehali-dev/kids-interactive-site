import Navigation from "@/components/Navigation";
import WordBuilderGame from "@/components/WordBuilderGame";

const Page2 = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
        {/* Info Block */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-5xl mb-6 block">🌟</span>
            <h1 className="text-4xl font-bold mb-6 text-purple-600 font-rubik">
              Удивительный мир космоса
            </h1>
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
              <p className="text-lg text-gray-700 leading-relaxed font-open-sans">
                Космос — это огромное пространство, полное звёзд, планет и
                галактик! В нашей Солнечной системе есть 8 планет, и Земля —
                одна из них. Знаешь ли ты, что самая большая планета — это
                Юпитер? А самая горячая — Венера! Давай поиграем и узнаем
                больше! 🚀
              </p>
            </div>
          </div>
        </section>

        {/* Game Block */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <WordBuilderGame />
          </div>
        </section>
      </div>
    </>
  );
};

export default Page2;
