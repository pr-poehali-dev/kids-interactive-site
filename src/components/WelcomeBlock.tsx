const WelcomeBlock = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        {/* Блок с текстом и картой */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-amber-200">
            <div className="mb-6">
              <span className="text-4xl mb-4 block">👋</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-700 font-serif">
                Привет, юный историк!
              </h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-serif">
              Узнай, как Кирилл и Мефодий придумали первые буквы, а дети Древней
              Руси писали на бересте! Это удивительная история о том, как
              появились буквы, которыми мы пользуемся до сих пор.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
              alt="Древняя карта Руси"
              className="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-amber-300"
            />
            <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-serif">
              📍 Киев
            </div>
            <div className="absolute bottom-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-serif">
              📍 Новгород
            </div>
          </div>
        </div>

        {/* Информационные карточки */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 border-2 border-amber-200">
            <span className="text-3xl mb-3 block">📜</span>
            <h3 className="text-xl font-bold mb-2 text-amber-800 font-serif">
              История
            </h3>
            <p className="text-gray-700 font-serif">
              Узнай, как появились первые буквы и письменность на Руси!
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-200">
            <span className="text-3xl mb-3 block">🎮</span>
            <h3 className="text-xl font-bold mb-2 text-orange-800 font-serif">
              Играй
            </h3>
            <p className="text-gray-700 font-serif">
              Интерактивные игры и задания о древней письменности!
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-amber-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 border-2 border-yellow-200">
            <span className="text-3xl mb-3 block">✨</span>
            <h3 className="text-xl font-bold mb-2 text-yellow-800 font-serif">
              Открывай
            </h3>
            <p className="text-gray-700 font-serif">
              Каждая страница — новые знания о русской азбуке!
            </p>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-2xl border-2 border-amber-300">
          <p className="text-lg text-gray-700 leading-relaxed font-serif text-center">
            Мы создали этот сайт специально для тебя! Здесь ты узнаешь
            удивительную историю о том, как святые Кирилл и Мефодий создали
            азбуку, как буквы приехали на Русь, и как дети писали на бересте.
            Готов к путешествию в прошлое?
            <span className="text-2xl ml-2">📚✨</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBlock;
