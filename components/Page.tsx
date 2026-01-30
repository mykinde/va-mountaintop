import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils"; // We might need to create this or import clsx/tailwind-merge directly if not exists

// Simple utility since we might not have the lib/utils setup yet
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface PageProps {
  index: number;
  currentPage: number;
  frontContent: ReactNode;
  backContent: ReactNode;
  zIndex: number;
}

export default function Page({
  index,
  currentPage,
  frontContent,
  backContent,
  zIndex,
}: PageProps) {
  // If this page is effectively "before" the current page, it should be flipped.
  // Actually, let's simplify:
  // If index < currentPage, it's flipped to the left (showing back).
  // If index >= currentPage, it's on the right (showing front).
  const isFlipped = index < currentPage;

  return (
    <motion.div
        className="absolute top-0 w-[50%] h-full origin-left preserve-3d cursor-pointer shadow-xl rounded-r-2xl border-l-[1px] border-neutral-200 dark:border-neutral-800"
        initial={false}
        animate={{
            rotateY: isFlipped ? -180 : 0,
            zIndex: zIndex, // Dynamic z-index is crucial for stacking
        }}
        transition={{
            duration: 0.8,
            ease: [0.15, 0.55, 0.55, 1], // Cubic-bezier for realistic feel
        }}
        style={{
            transformStyle: "preserve-3d",
            right: 0, // Pivot from the center (which is the "spine")
        }}
    >
        {/* Front Face */}
        <div
            className="absolute inset-0 backface-hidden bg-white dark:bg-neutral-900 overflow-hidden flex flex-col p-8 md:p-12 shadow-inner rounded-r-2xl"
            style={{ backfaceVisibility: "hidden" }}
        >
            <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />
            {frontContent}
        </div>

        {/* Back Face */}
        <div
            className="absolute inset-0 backface-hidden bg-white dark:bg-neutral-900 overflow-hidden flex flex-col p-8 md:p-12 shadow-inner rounded-l-2xl"
            style={{ 
                backfaceVisibility: "hidden", 
                transform: "rotateY(180deg)",
                // When flipped, it becomes a "left" page, so we need to round left corners
                // but the container rotates, so standard rounding applies to the container physically.
                // However, visually it's the "back" of the right page.
            }}
        >
             <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
            {backContent}
        </div>
    </motion.div>
  );
}
