import Navigation from "@/components/Navigation";

const Page3 = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-purple-600 font-rubik">
            🌍 Планеты и звёзды
          </h1>

          {/* Block 1 */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=400&fit=crop"
                alt="Космос"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2 flex items-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 font-rubik">
                  ⭐ Звёзды светят ярко
                </h3>
                <p className="text-gray-700 leading-relaxed font-open-sans">
                  Звёзды — это огромные шары из горячего газа, которые светят
                  собственным светом! Наше Солнце тоже звезда, только очень
                  близкая к нам. Вечером мы видим множество звёзд на небе —
                  каждая из них находится очень далеко от Земли!
                </p>
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600 font-rubik">
                  🪐 Планеты вокруг нас
                </h3>
                <p className="text-gray-700 leading-relaxed font-open-sans">
                  Планеты — это большие шары, которые вращаются вокруг звёзд.
                  Наша Земля — планета, и она вращается вокруг Солнца! У
                  некоторых планет есть кольца, как у Сатурна, а у других есть
                  спутники, как наша Луна!
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=500&h=400&fit=crop"
                alt="Планеты"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
