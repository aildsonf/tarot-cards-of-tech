import { useState, useEffect } from "react";
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex flex-col">
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            Hora de vislumbrar o futuro
          </h1>
          <p className="text-xl text-center text-purple-200 mb-6">
            {selectedCards.length < 3
              ? `Selecione  mais 0${3 - selectedCards.length} ${3 - selectedCards.length !== 1 ? "cartas" : "carta"}`
              : "As cartas foram reveladas"}
          </p>
          <div className="text-center">
            <button
              onClick={handleReset}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              Reiniciar leitura
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
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
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Significados das Cartas</h2>
              <div className="space-y-4">
                {selectedCards.map((card, index) => (
                  <div key={card.id} className="border-b border-purple-300/30 pb-4 last:border-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{card.icon}</span>
                      <h3 className="text-xl font-semibold text-purple-100">
                        {index + 1}. {card.name}
                      </h3>
                    </div>
                    <p className="text-purple-200 ml-12">{card.meaning}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleSeeAllCards}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
              >
                Ver todas as Cartas
              </button>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}
