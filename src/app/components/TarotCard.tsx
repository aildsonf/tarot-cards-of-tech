import React from "react";
import { motion } from "motion/react";
import type { TarotCard as TarotCardType } from "../data/cards";

interface TarotCardProps {
  card?: TarotCardType;
  isFlipped?: boolean;
  showBack?: boolean;
  onClick?: () => void;
}

export function TarotCard({
  card,
  isFlipped = false,
  showBack = false,
  onClick,
}: TarotCardProps) {
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
          className="absolute w-full h-full backface-hidden rounded-2xl shadow-xl overflow-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <img
            src={card?.image}
            alt={card?.name}
            className="object-fit w-full h-full"
          />
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-xl overflow-hidden">
          <img
            src="/assets/toolkit-logo.png"
            alt="Tarot Cards of Tech logo"
            className="object-fit w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
