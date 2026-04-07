import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ImageCard({ url, onDelete, theme }: any) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 12,
      }}
      className={`relative group w-full rounded-2xl overflow-hidden
      ${
        theme === "cute"
          ? "bg-white shadow-md hover:shadow-pink-300/40"
          : "bg-zinc-900 hover:shadow-2xl"
      }`}
    >

      {/* IMAGE */}
      <motion.img
        src={url}
        className="w-full object-cover"
        whileHover={{
          scale: 1.08,
          filter: "brightness(1.1)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* OVERLAY */}
      <motion.div
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* DELETE BUTTON */}
      <motion.button
        onClick={onDelete}
        className="absolute top-3 right-3 bg-black/70 p-2 rounded-full backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Trash2 size={16} color="white" />
      </motion.button>

    </motion.div>
  );
}