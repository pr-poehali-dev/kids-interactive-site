import { useState } from "react";
import { Button } from "@/components/ui/button";

const WordBuilderGame = () => {
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const targetWord = "КОСМОС";
  const availableLetters = ["К", "О", "С", "М", "О", "С", "Р", "А", "Т", "Л"];

  const handleLetterClick = (letter: string, index: number) => {
    if (selectedLetters.length < targetWord.length) {
      setSelectedLetters([...selectedLetters, letter]);
    }
  };

  const checkWord = () => {
    const word = selectedLetters.join("");
    setIsCorrect(word === targetWord);
  };

  const resetGame = () => {
    setSelectedLetters([]);
    setIsCorrect(null);
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
      <div className="text-center mb-8">
        <span className="text-4xl mb-4 block">🎯</span>
        <h3 className="text-2xl font-bold mb-2 text-purple-600 font-rubik">
          Составь слово "КОСМОС"
        </h3>
        <p className="text-gray-600 font-open-sans">
          Нажимай на буквы в правильном порядке!
        </p>
      </div>

      {/* Selected letters display */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2">
          {Array.from({ length: targetWord.length }).map((_, index) => (
            <div
              key={index}
              className="w-12 h-12 border-2 border-purple-300 rounded-lg flex items-center justify-center bg-white text-xl font-bold text-purple-600"
            >
              {selectedLetters[index] || ""}
            </div>
          ))}
        </div>
      </div>

      {/* Available letters */}
      <div className="grid grid-cols-5 gap-3 mb-8 max-w-md mx-auto">
        {availableLetters.map((letter, index) => (
          <Button
            key={index}
            onClick={() => handleLetterClick(letter, index)}
            className="w-12 h-12 text-lg font-bold bg-yellow-200 hover:bg-yellow-300 text-purple-700 rounded-lg transform hover:scale-105 transition-all duration-200"
            disabled={selectedLetters.length >= targetWord.length}
          >
            {letter}
          </Button>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <Button
          onClick={checkWord}
          disabled={selectedLetters.length !== targetWord.length}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-open-sans"
        >
          Проверить ✅
        </Button>
        <Button
          onClick={resetGame}
          variant="outline"
          className="px-6 py-2 rounded-full font-open-sans"
        >
          Сначала 🔄
        </Button>
      </div>

      {/* Result message */}
      {isCorrect !== null && (
        <div className="text-center">
          {isCorrect ? (
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 animate-bounce">
              <span className="text-2xl">🎉</span>
              <p className="text-green-700 font-bold font-open-sans">
                Молодец! Ты правильно составил слово!
              </p>
            </div>
          ) : (
            <div className="bg-red-100 border border-red-300 rounded-lg p-4">
              <span className="text-2xl">😅</span>
              <p className="text-red-700 font-bold font-open-sans">
                Попробуй ещё раз! Ты справишься!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WordBuilderGame;
