import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { TarotCard } from "../components/TarotCard";
import { Footer } from "../components/Footer";
import { tarotCards, type TarotCard as TarotCardType } from "../data/cards";

export function Selection() {
  const [availableCards, setAvailableCards] = useState<TarotCardType[]>([]);
  const [selectedCards, setSelectedCards] = useState<TarotCardType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Select 4 random cards
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    setAvailableCards(shuffled.slice(0, 4));
  }, []);

  const handleCardClick = (card: TarotCardType) => {
    if (selectedCards.length < 2 && !selectedCards.includes(card)) {
      setSelectedCards([...selectedCards, card]);
      return;
    }
    if (selectedCards.includes(card)) {
      setSelectedCards(selectedCards.filter((c) => c.id !== card.id));
      return;
    }
  };

  const handleSeeAllCards = () => {
    navigate("/baralho");
  };

  const handleReset = () => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    setAvailableCards(shuffled.slice(0, 4));
    setSelectedCards([]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-400 via-red-500 to-sky-700">
      <motion.div
        key="selection"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex-1 p-8"
      >
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-100 text-center text-shadow-lg antialiased mb-2">
            Descubra como antecipar impactos
          </h1>
          <p className="text-2xl text-center text-gray-100 text-shadow-lg font-medium antialiased mb-6">
            {selectedCards.length < 2
              ? `Selecione ${2 - selectedCards.length} ${2 - selectedCards.length !== 1 ? "cartas" : "carta"}`
              : "As cartas foram reveladas"}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 my-12">
          {availableCards.map((card) => (
            <TarotCard
              key={card.id}
              card={card}
              isFlipped={selectedCards.includes(card)}
              showBack={!selectedCards.includes(card)}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>

        {selectedCards.length === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-4xl mx-auto my-auto w-full"
          >
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 mb-8">
              <h2 className="mb-16 text-2xl font-bold text-gray-100 text-shadow-lg text-center antialiased">
                Agora vamos pausar e refletir sobre o que estamos fazendo
              </h2>

              <div className="space-y-6">
                {selectedCards.map((card, index) => (
                  <div
                    key={card.id}
                    className="border-b border-gray-300/30 pb-6 last:border-0"
                  >
                    <h3 className="text-xl font-semibold text-gray-100 text-shadow-md antialiased mb-4">
                      {index + 1}. {card.name}
                    </h3>
                    <p className="text-gray-200 text-shadow-xs italic subpixel-antialiased whitespace-pre-line">
                      {card.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
              <button
                onClick={handleReset}
                className="flex gap-3 justify-center bg-black/40 hover:bg-black/60 backdrop-blur-md text-gray-100 antialiased px-4 py-2 rounded-2xl text-lg text-shadow-md transition-colors shadow-xl cursor-pointer"
              >
                <p>&#x21BB;</p>
                <p>Refazer a tiragem</p>
              </button>
              <button
                onClick={handleSeeAllCards}
                className="flex gap-3 justify-center bg-black/40 hover:bg-black/60 backdrop-blur-md text-gray-100 antialiased px-4 py-2 rounded-2xl text-lg text-shadow-md transition-colors shadow-xl cursor-pointer"
              >
                <p>Ver o baralho completo</p>
                <p>&#x203A;</p>
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>

      <Footer />
    </div>
  );
}
