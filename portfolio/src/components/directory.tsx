"use client";

import { motion } from "framer-motion";

const sections = [
  { id: "about", title: "关于", page: "I" },
  { id: "work", title: "作品", page: "II" },
  { id: "thoughts", title: "随想", page: "III" },
  { id: "archive", title: "归档", page: "IV" },
];

export function Directory({ onSectionSelect }: { onSectionSelect: (sectionId: string) => void }) {
  return (
    <nav className="font-serif w-full max-w-xl">
      <ul className="flex flex-col items-center space-y-4">
        {sections.map((section) => (
          <motion.li 
            key={section.id} 
            className="w-full"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <button 
              onClick={() => onSectionSelect(section.id)} 
              className="w-full flex items-baseline justify-between text-2xl font-bold"
            >
              <motion.span variants={{ rest: { x: 0 }, hover: { x: 5 } }}>{section.title}</motion.span>
              <motion.span 
                className="flex-grow mx-4 border-b-2 border-dotted border-foreground/20"
                variants={{ rest: { scaleX: 1 }, hover: { scaleX: 1.03 } }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
              ></motion.span>
              <motion.span 
                className="font-light text-xl"
                variants={{ rest: { opacity: 0.6 }, hover: { opacity: 1, scale: 1.1 } }}
              >{section.page}</motion.span>
            </button>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
