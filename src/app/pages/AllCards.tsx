import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { TarotCard } from "../components/TarotCard";
import { Footer } from "../components/Footer";
import { tarotCards } from "../data/cards";

export function AllCards() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex flex-col">
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto mb-8">
          <button
            onClick={() => navigate("/leitura")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
          >
            ← Voltar para a seleção
          </button>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Todas as Cartas
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
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
      <Footer />
    </div>
  );
}
