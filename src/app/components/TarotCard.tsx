import { motion } from "motion/react";
import type { TarotCard as TarotCardType } from "../data/cards";

interface TarotCardProps {
  card?: TarotCardType;
  isFlipped?: boolean;
  onClick?: () => void;
  showBack?: boolean;
}

export function TarotCard({ card, isFlipped = false, onClick, showBack = false }: TarotCardProps) {
  const displayBack = showBack && !isFlipped;

  return (
    <motion.div
      className="relative w-48 h-72 cursor-pointer perspective-1000"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front (face up) */}
        <div
          className="absolute w-full h-full backface-hidden rounded-2xl border-4 border-purple-900 bg-gradient-to-br from-purple-100 to-pink-100 shadow-xl flex flex-col items-center justify-between p-6"
          style={{ transform: "rotateY(180deg)" }}
        >
          {card && (
            <>
              <div className="text-2xl font-bold text-purple-900">{card.id}</div>
              <div className="text-6xl">{card.icon}</div>
              <div className="text-center text-lg font-semibold text-purple-900">{card.name}</div>
            </>
          )}
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl border-4 border-purple-900 bg-gradient-to-br from-indigo-600 to-purple-800 shadow-xl flex items-center justify-center">
          <div className="text-6xl text-purple-200">🔮</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
