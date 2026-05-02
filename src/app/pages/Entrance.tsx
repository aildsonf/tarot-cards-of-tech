import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

export function Entrance() {
  const [stage, setStage] = useState<"title" | "start" | "description">("title");
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
        navigate("/leitura");
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [stage, navigate]);

  const handleStart = () => {
    setStage("description");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {stage === "title" && (
            <motion.h1
              key="title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-6xl font-bold text-white"
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
              onClick={handleStart}
              className="w-64 h-96 rounded-2xl border-4 border-purple-900 bg-gradient-to-br from-purple-100 to-pink-100 shadow-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="text-4xl font-bold text-purple-900">Iniciar</div>
            </motion.div>
          )}

          {stage === "description" && (
            <motion.div
              key="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-center px-8 max-w-3xl"
            >
              <h2 className="text-3xl font-bold mb-6">Tarot Cards of Tech</h2>
              <p className="text-lg leading-relaxed mb-4">
                Criado pelo Artefact Group, essa ferramenta é uma espécie de tarô que possui perguntas provocativas para ajudar designers e equipes a pensarem além da funcionalidade da tecnologia e assim criarem futuros melhores, colocando a humanidade como o centro desse processo.
              </p>
              <p className="text-lg leading-relaxed">
                A ideia principal é vislumbrar o futuro e assim antecipar impactos, principalmente os não intencionais, como riscos sociais, éticos e comportamentais.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
