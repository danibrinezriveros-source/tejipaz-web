"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type FloatingPromoProps = {
  icon?: string;
  title: string;
  href: string;
};

export default function FloatingPromo({
  icon,
  title,
  href,
}: FloatingPromoProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.6,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="flex justify-center py-12"
    >
      <Link
        href={href}
        className="
          group
          inline-flex
          items-center
          gap-4
          rounded-full
          border
          border-stone-200
          bg-white/90
          px-7
          py-5
          shadow-lg
          backdrop-blur
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#D9B56D]
          hover:shadow-xl
        "
      >
        {icon && (
          <span className="text-2xl">
            {icon}
          </span>
        )}

        <span className="font-semibold text-[#3D2D18]">
          {title}
        </span>

        <span
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </Link>
    </motion.div>
  );
}