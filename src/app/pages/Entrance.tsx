import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export function Entrance() {
  const [stage, setStage] = useState<"title" | "start" | "description">(
    "title",
  );
  const navigate = useNavigate();

  useEffect(() => {
    // Show title for 5 seconds then show start card
    const timer1 = setTimeout(() => {
      setStage("start");
    }, 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    if (stage === "description") {
      const timer = setTimeout(() => {
        navigate("/tiragem");
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [stage, navigate]);

  const handleStart = () => {
    setStage("description");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-400 via-red-500 to-sky-700">
      <div className="flex-1 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {stage === "title" && (
            <motion.h1
              key="title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-6xl font-bold text-gray-100 text-center text-shadow-lg antialiased"
            >
              Tarot Cards of Tech
            </motion.h1>
          )}

          {stage === "start" && (
            <motion.div
              key="start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center gap-12"
            >
              <img
                src="/assets/toolkit-logo.png"
                alt="Tarot Cards of Tech logo"
                className="object-fit w-64 h-96 backface-hidden rounded-2xl shadow-2xl"
              />
              <button
                onClick={handleStart}
                className="bg-black/40 hover:bg-black/60 backdrop-blur-md text-gray-100 antialiased px-4 py-2 rounded-2xl text-lg text-shadow-md transition-colors shadow-xl cursor-pointer w-full"
              >
                Iniciar
              </button>
            </motion.div>
          )}

          {stage === "description" && (
            <motion.div
              key="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gray-100 text-shadow-lg antialiased text-center italic px-8 max-w-3xl"
            >
              <p className="text-xl leading-relaxed mb-4">
                A Artefact criou as Cartas de Tarô da Tecnologia para ajudar
                criadores de todos os tipos a considerarem o impacto da
                tecnologia.
              </p>
              <p className="text-xl leading-relaxed">
                Cada carta contém provocações que não só ajudarão você a prever
                consequências não intencionais, mas também revelar oportunidades
                para criar mudanças positivas. Leve as Cartas de Tarô da
                Tecnologia para sua próxima sessão de brainstorming ou reunião
                de equipe para vislumbrar o futuro e entender melhor o potencial
                impacto de seus produtos.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
