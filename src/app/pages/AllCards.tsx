import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { TarotCard } from "../components/TarotCard";
import { Footer } from "../components/Footer";
import { tarotCards } from "../data/cards";

export function AllCards() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-400 via-red-500 to-sky-700">
      <div className="flex-1 p-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Todas as Cartas
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-8 mx-auto w-full">
          {tarotCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <TarotCard card={card} isFlipped={true} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mb-10">
        <button
          onClick={() => navigate("/leitura")}
          className="bg-sky-500 hover:bg-sky-600 text-gray-100 antialiased px-8 py-4 rounded-2xl text-lg font-bold text-shadow-md transition-colors shadow-xl"
        >
          ← Voltar para a seleção
        </button>
      </div>

      <Footer />
    </div>
  );
}
