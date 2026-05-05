import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { TarotCard } from "../components/TarotCard";
import { Footer } from "../components/Footer";
import { tarotCards } from "../data/cards";

export function AllCards() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/tiragem");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-400 via-red-500 to-sky-700">
      <div className="flex-1 p-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-100 antialiased text-shadow-lg mb-16"
        >
          Todas as cartas
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-8 mx-auto w-full lg:max-w-5xl">
          {tarotCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
            >
              <TarotCard card={card} isFlipped={true} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 p-8 w-full md:w-fit">
        <button
          onClick={handleBack}
          className="flex gap-3 justify-center bg-black/40 hover:bg-black/60 backdrop-blur-md text-gray-100 antialiased px-4 py-2 rounded-2xl text-lg text-shadow-md transition-colors shadow-xl cursor-pointer w-full"
        >
          <p>&#x2039;</p>
          <p>Voltar para a tiragem</p>
        </button>
      </div>

      <Footer />
    </div>
  );
}
