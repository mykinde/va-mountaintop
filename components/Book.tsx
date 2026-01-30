"use client";

import { useState } from "react";
import Page from "./Page";
import Menu from "./Menu";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";

export default function Book() {
    const [page, setPage] = useState(0);

    // Example content for pages
    const totalPages = 4; // Cover, About, Blog, Contact (mapped to indices 0, 1, 2, 3)

    const handleNext = () => {
        if (page < totalPages) setPage(page + 1);
    };

    const handlePrev = () => {
        if (page > 0) setPage(page - 1);
    };

    return (
        <div className="min-h-screen app-bg flex items-center justify-center p-4 md:p-8 overflow-hidden select-none">
            <Menu onNavigate={setPage} currentPage={page} />

            {/* Book Container */}
            <div className="relative w-full max-w-6xl aspect-[3/2] perspective-1500 mx-auto">
                <div className="relative w-full h-full preserve-3d">

                    {/* The "Back Cover" or left side base */}
                    <div className="absolute top-0 left-0 w-[50%] h-full bg-neutral-100 dark:bg-neutral-800 rounded-l-2xl shadow-2xl border-r border-neutral-200 dark:border-neutral-700 z-0 flex items-center justify-center text-neutral-300">
                        <span className="rotate-90 text-2xl font-bold tracking-widest opacity-20">MOUNTAIN TOP</span>
                    </div>

                    {/* The "Front Cover" base slot (right side) - usually empty as pages sit on top */}
                    <div className="absolute top-0 right-0 w-[50%] h-full bg-white dark:bg-neutral-900 rounded-r-2xl shadow-xl -z-10" />

                    {/* Pages */}
                    {/* Page 0: Cover / Intro */}
                    <Page
                        index={0}
                        currentPage={page}
                        zIndex={page === 0 ? 20 : 0}
                        frontContent={
                            <div className="h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-xl font-bold text-neutral-400">01.</h2>
                                    <div className="h-2 w-20 bg-neutral-900 dark:bg-neutral-100" />
                                </div>
                                <div className="space-y-6">
                                    <motion.h1
                                        className="text-6xl md:text-8xl font-serif font-black tracking-tighter text-neutral-900 dark:text-white"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        THE<br />ANTIGRAVITY<br /><span className="text-indigo-600">CHRONICLES</span>
                                    </motion.h1>
                                    <p className="text-xl text-neutral-500 max-w-md">
                                        A journey through thoughts, code, and design. Explore the static noise of creativity.
                                    </p>
                                    <button
                                        onClick={handleNext}
                                        className="px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:scale-105 transition-transform"
                                    >
                                        Open Book
                                    </button>
                                </div>
                                <div className="text-sm font-mono text-neutral-400">
                                    Vol. 1 &mdash; 2026 Edition
                                </div>
                            </div>
                        }
                        backContent={
                            <div className="h-full flex flex-col justify-center items-center text-center p-8">
                                <span className="text-9xl mb-4">👋</span>
                                <h2 className="text-4xl font-bold mb-4">Welcome Inside</h2>
                                <p className="text-lg text-neutral-500 max-w-sm">
                                    You've just flipped the first page. Continue to explore the author's mind.
                                </p>
                            </div>
                        }
                    />

                    {/* Page 1: About */}
                    <Page
                        index={1}
                        currentPage={page}
                        zIndex={page === 1 ? 19 : 1}
                        frontContent={
                            <div className="h-full flex flex-col">
                                <h2 className="text-[10rem] leading-none font-black text-neutral-100 dark:text-neutral-800 absolute -right-10 -top-10 select-none pointer-events-none">
                                    ABOUT
                                </h2>
                                <div className="relative z-10 mt-20">
                                    <h3 className="text-4xl font-bold mb-8">The Author</h3>
                                    <div className="flex gap-8 items-start">
                                        <div className="w-32 h-32 bg-neutral-200 rounded-full shrink-0 animate-pulse" /> {/* Placeholder avatar */}
                                        <div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-300">
                                            <p>
                                                I am a digital artisan, crafting experiences on the web. This blog is a collection of my experiments in UI/UX and motion design.
                                            </p>
                                            <p>
                                                Based in the cloud, living on the edge.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-12 grid grid-cols-2 gap-4">
                                        {["Design", "Code", "Motion", "Story"].map((skill) => (
                                            <div key={skill} className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                                                <span className="font-bold">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-auto flex justify-end">
                                    <button onClick={handleNext} className="text-indigo-600 font-bold hover:underline">Next Chapter &rarr;</button>
                                </div>
                            </div>
                        }
                        backContent={
                            <div className="h-full flex items-center justify-center bg-indigo-50 dark:bg-indigo-900/20">
                                <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-200">Thoughts &rarr;</h3>
                            </div>
                        }
                    />

                    {/* Page 2: Blog List */}
                    <Page
                        index={2}
                        currentPage={page}
                        zIndex={page === 2 ? 18 : 2}
                        frontContent={
                            <div className="h-full overflow-y-auto custom-scrollbar pr-4">
                                <h2 className="text-4xl font-bold mb-10 sticky top-0 bg-white dark:bg-neutral-900 pb-4 z-10 border-b">Latest Stories</h2>
                                <div className="space-y-8">
                                    {[1, 2, 3].map((post) => (
                                        <motion.div
                                            key={post}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            className="group cursor-pointer"
                                        >
                                            <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 rounded-xl mb-4 overflow-hidden">
                                                <div className="w-full h-full bg-neutral-300 dark:bg-neutral-700 group-hover:scale-105 transition-transform duration-500" />
                                            </div>
                                            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Design</span>
                                            <h3 className="text-2xl font-bold mt-2 group-hover:text-indigo-600 transition-colors">The Art of Static Motion {post}</h3>
                                            <p className="text-neutral-500 mt-2 line-clamp-2">
                                                How to create fluid experiences without sacrificing performance. A deep dive into modern CSS and FLIP techniques.
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        }
                        backContent={
                            <div className="h-full flex items-center justify-center p-12">
                                <div className="text-center space-y-4">
                                    <Mail size={48} className="mx-auto text-neutral-400" />
                                    <h3 className="text-2xl font-bold">Get in Touch</h3>
                                    <p>Moving on to the final chapter...</p>
                                </div>
                            </div>
                        }
                    />

                    {/* Page 3: Contact */}
                    <Page
                        index={3}
                        currentPage={page}
                        zIndex={page === 3 ? 17 : 3}
                        frontContent={
                            <div className="h-full flex flex-col justify-center max-w-lg mx-auto w-full">
                                <h2 className="text-5xl font-black mb-12">Say Hello.</h2>
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">Email</label>
                                        <input type="email" className="w-full p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg border-2 border-transparent focus:border-indigo-600 outline-none transition-colors" placeholder="you@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold mb-2">Message</label>
                                        <textarea rows={4} className="w-full p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg border-2 border-transparent focus:border-indigo-600 outline-none transition-colors" placeholder="Your thoughts..." />
                                    </div>
                                    <button className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-lg hover:opacity-90 transition-opacity">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        }
                        backContent={
                            <div className="h-full flex items-center justify-center bg-neutral-900 text-white">
                                <h1 className="text-4xl font-serif italic">Fin.</h1>
                            </div>
                        }
                    />

                </div>
            </div>

            {/* Mobile Nav helper */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 md:hidden z-50">
                <button onClick={handlePrev} disabled={page === 0} className="p-4 bg-white shadow-lg rounded-full disabled:opacity-50">&larr;</button>
                <span className="px-4 py-4 bg-black/80 text-white rounded-full font-mono">{page + 1}/{totalPages + 1}</span>
                <button onClick={handleNext} disabled={page === totalPages} className="p-4 bg-white shadow-lg rounded-full disabled:opacity-50">&rarr;</button>
            </div>

        </div>
    );
}
