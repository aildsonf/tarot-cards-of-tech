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
    if (selectedCards.length < 3 && !selectedCards.includes(card)) {
      setSelectedCards([...selectedCards, card]);
      return;
    }
    if (selectedCards.includes(card)) {
      setSelectedCards(selectedCards.filter((c) => c.id !== card.id));
      return;
    }
  };

  const handleSeeAllCards = () => {
    navigate("/deck");
  };

  const handleReset = () => {
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    setAvailableCards(shuffled.slice(0, 4));
    setSelectedCards([]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-400 via-red-500 to-sky-700">
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-100 text-center text-shadow-lg antialiased mb-2">
            Hora de vislumbrar o futuro
          </h1>
          <p className="text-2xl text-center text-gray-100 text-shadow-lg font-medium antialiased mb-6">
            {selectedCards.length < 3
              ? `Selecione ${3 - selectedCards.length} ${3 - selectedCards.length !== 1 ? "cartas" : "carta"}`
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

        {selectedCards.length === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto my-auto w-full"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
              <h2 className="mb-6 text-2xl font-bold text-gray-100 text-shadow-lg antialiased">
                Significados das cartas
              </h2>
              <div className="space-y-4">
                {selectedCards.map((card, index) => (
                  <div
                    key={card.id}
                    className="border-b border-gray-300/30 pb-4 last:border-0"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-100 text-shadow-md antialiased">
                        {index + 1}. {card.name}
                      </h3>
                    </div>
                    <p className="text-gray-200 text-shadow-xs antialiased whitespace-pre-line ml-12">
                      {card.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-6 justify-center">
              <button
                onClick={handleReset}
                className="bg-amber-500 hover:bg-amber-600 text-gray-100 antialiased px-8 py-4 rounded-2xl text-lg font-bold text-shadow-md transition-colors shadow-xl"
              >
                Reiniciar leitura
              </button>
              <button
                onClick={handleSeeAllCards}
                className="bg-sky-500 hover:bg-sky-600 text-gray-100 antialiased px-8 py-4 rounded-2xl text-lg font-bold text-shadow-md transition-colors shadow-xl"
              >
                Ver todas as cartas
              </button>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}
