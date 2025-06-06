const WelcomeBlock = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-4xl mb-4 block">👋</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-600 font-rubik">
            Привет, юный исследователь!
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <span className="text-3xl mb-3 block">🎮</span>
            <h3 className="text-xl font-bold mb-2 text-gray-800 font-rubik">
              Играй
            </h3>
            <p className="text-gray-600 font-open-sans">
              Увлекательные игры и головоломки ждут тебя на каждой странице!
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <span className="text-3xl mb-3 block">📚</span>
            <h3 className="text-xl font-bold mb-2 text-gray-800 font-rubik">
              Учись
            </h3>
            <p className="text-gray-600 font-open-sans">
              Открывай новые знания в интересной и понятной форме!
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
            <span className="text-3xl mb-3 block">🌟</span>
            <h3 className="text-xl font-bold mb-2 text-gray-800 font-rubik">
              Исследуй
            </h3>
            <p className="text-gray-600 font-open-sans">
              Каждая страница — новое приключение и удивительные открытия!
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl">
          <p className="text-lg text-gray-700 leading-relaxed font-open-sans">
            Мы создали этот сайт специально для тебя! Здесь ты найдёшь
            интересные истории, весёлые игры и много полезной информации. Каждая
            страница — это новое приключение. Не забывай нажимать на кнопки,
            играть в игры и изучать всё вокруг!
            <span className="text-2xl ml-2">🚀✨</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBlock;
