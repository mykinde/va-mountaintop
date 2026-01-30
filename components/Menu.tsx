import { motion } from "framer-motion";
import { BookOpen, Home, Mail, PenTool } from "lucide-react";

interface MenuProps {
    onNavigate: (index: number) => void;
    currentPage: number;
}

const items = [
    { icon: Home, label: "Cover", index: 0 },
    { icon: PenTool, label: "About", index: 1 },
    { icon: BookOpen, label: "Blog", index: 2 },
    { icon: Mail, label: "Contact", index: 3 },
];

export default function Menu({ onNavigate, currentPage }: MenuProps) {
    return (
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 hidden md:flex">
            {items.map((item, i) => (
                <motion.button
                    key={item.label}
                    onClick={() => onNavigate(item.index)}
                    className={`group flex items-center gap-3 p-3 rounded-xl transition-all duration-300
            ${currentPage === item.index
                            ? "bg-black/10 dark:bg-white/20 backdrop-blur-md shadow-lg"
                            : "hover:bg-black/5 dark:hover:bg-white/10"
                        }`}
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="p-2 rounded-lg bg-white dark:bg-neutral-800 shadow-sm text-neutral-700 dark:text-neutral-200">
                        <item.icon size={20} />
                    </div>
                    <span className="font-medium text-neutral-700 dark:text-neutral-200 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                        {item.label}
                    </span>
                </motion.button>
            ))}
        </div>
    );
}
