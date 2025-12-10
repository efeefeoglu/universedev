"use client";
import { useEffect } from 'react';

export default function StylesPage() {
    useEffect(() => {
        // Dark Mode Toggle Logic
        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-sans min-h-screen transition-colors duration-200">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-card-light/90 dark:bg-card-dark/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-primary text-3xl">palette</span>
                            <h1 className="text-xl font-display font-bold tracking-tight">StyleSelector</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
                                id="theme-toggle"
                                onClick={toggleTheme}
                            >
                                <span className="material-icons dark:hidden">dark_mode</span>
                                <span className="material-icons hidden dark:block">light_mode</span>
                            </button>
                            <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2">
                                <span>Save Selection</span>
                                <span className="material-icons text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Intro */}
                <div className="mb-12 text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                        Choose Your Aesthetic
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Select one or more design styles that resonate with your brand identity. Mix and match to create a unique mood board.
                    </p>
                </div>

                <form action="#" method="POST">
                    {/* Minimalist Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Minimalist</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Clean &amp; Airy</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Classic Type */}
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_minimalist" type="checkbox" value="classic" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-gray-50 dark:bg-gray-800 p-4 flex flex-col justify-center items-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-white dark:bg-gray-900 opacity-90"></div>
                                        <div className="relative z-10 w-full max-w-[80%] space-y-3">
                                            <div className="h-2 w-12 bg-gray-900 dark:bg-gray-100"></div>
                                            <div className="h-8 w-full bg-gray-200 dark:bg-gray-700"></div>
                                            <div className="h-2 w-3/4 bg-gray-300 dark:bg-gray-600"></div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Classic Type</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            {/* Modern */}
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_minimalist" type="checkbox" value="modern"/>
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 p-4 flex flex-col relative">
                                        <div className="w-full h-full bg-[#E5E7EB] dark:bg-[#374151] rounded-sm flex items-center p-4">
                                            <div className="w-1/2 space-y-2">
                                                <div className="h-4 w-20 bg-gray-400 dark:bg-gray-500"></div>
                                                <div className="h-2 w-full bg-gray-300 dark:bg-gray-600"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Structured</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            {/* Dark Mode */}
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_minimalist" type="checkbox" value="dark"/>
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#4B5563] p-6 flex flex-col justify-center items-center text-center">
                                        <div className="text-white font-serif italic text-lg opacity-80">Less is more</div>
                                        <div className="mt-4 px-3 py-1 border border-white/30 text-white text-[10px] rounded-full">Explore</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Dark Mode</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            {/* Pastel */}
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_minimalist" type="checkbox" value="pastel"/>
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#D1FAE5] dark:bg-[#064E3B] p-6 flex flex-col justify-center items-center text-center">
                                        <div className="text-emerald-900 dark:text-emerald-100 font-medium text-lg">Soft Focus</div>
                                        <div className="mt-2 text-emerald-700 dark:text-emerald-300 text-[10px]">Simple elegance</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Pastel Calm</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Atmosphere & Contrast Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Atmosphere &amp; Contrast</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Tone &amp; Mood</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Luxury */}
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_atmosphere" type="checkbox" value="luxury" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#1a1a1a] p-6 flex flex-col items-center justify-center text-center relative">
                                        <div className="border border-[#D4AF37] p-4 absolute inset-4"></div>
                                        <h4 className="text-[#D4AF37] font-serif italic text-2xl">Luxury</h4>
                                        <div className="w-8 h-[1px] bg-[#D4AF37] mt-2"></div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Luxury Gold</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            {/* High Contrast */}
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_atmosphere" type="checkbox" value="high_contrast" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] flex">
                                        <div className="w-1/2 bg-black flex items-center justify-center">
                                            <span className="text-white font-bold text-2xl">B</span>
                                        </div>
                                        <div className="w-1/2 bg-yellow-400 flex items-center justify-center">
                                            <span className="text-black font-bold text-2xl">W</span>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">High Contrast</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            {/* Low Contrast */}
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_atmosphere" type="checkbox" value="low_contrast" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 p-4 flex flex-col items-center justify-center text-center">
                                         <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mb-3 flex items-center justify-center">
                                              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                         </div>
                                         <p className="text-gray-400 dark:text-gray-500 font-medium text-sm">Soft Tones</p>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Low Contrast</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            {/* Monochrome */}
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_atmosphere" type="checkbox" value="monochrome" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-zinc-900 p-4 flex flex-col gap-2">
                                        <div className="h-1/2 bg-zinc-800 rounded"></div>
                                        <div className="flex gap-2 h-1/2">
                                            <div className="flex-1 bg-zinc-700 rounded"></div>
                                            <div className="flex-1 bg-zinc-600 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Monochrome</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Ultra-minimal Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Ultra-minimal</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Negative Space</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_ultra" type="checkbox" value="singleword" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-white dark:bg-black border border-gray-100 dark:border-gray-800 p-4 flex items-center justify-center">
                                        <span className="text-black dark:text-white font-bold text-xl tracking-tight">Word.</span>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Single Focus</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_ultra" type="checkbox" value="menu" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-white dark:bg-black border border-gray-100 dark:border-gray-800 p-4 flex flex-col justify-between">
                                        <div className="w-full flex justify-end"><div className="h-1 w-4 bg-gray-800 dark:bg-white"></div></div>
                                        <div className="text-center text-gray-400 dark:text-gray-500 text-sm">Meniu</div>
                                        <div></div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Nav Only</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_ultra" type="checkbox" value="symbol" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-white dark:bg-black border border-gray-100 dark:border-gray-800 p-4 flex items-center justify-center">
                                        <div className="text-2xl font-light">✕</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Symbolic</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_ultra" type="checkbox" value="hamburger" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-white dark:bg-black border border-gray-100 dark:border-gray-800 p-4 flex items-center justify-center">
                                        <span className="material-icons text-gray-800 dark:text-gray-200 text-3xl">menu</span>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Iconography</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Brutalist Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Brutalist</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Bold &amp; Raw</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_brutalist" type="checkbox" value="yellow" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#D4AF37] dark:bg-[#856b1e] p-2 flex flex-col relative overflow-hidden">
                                        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[1px] bg-black/10"></div>
                                        <h4 className="font-black text-4xl leading-none uppercase text-black mix-blend-multiply break-all z-10">KARK ROGGER</h4>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Industrial Type</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_brutalist" type="checkbox" value="neon" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#CCFF00] dark:bg-[#7a9900] p-2 flex flex-col relative">
                                        <div className="absolute inset-0 border-2 border-black m-2"></div>
                                        <h4 className="font-black text-3xl leading-none uppercase text-black z-10 p-2">CREATIST <br/> SCR[MBLS</h4>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Acid Green</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_brutalist" type="checkbox" value="blue" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#0000FF] dark:bg-[#00008b] p-2 flex flex-col relative">
                                        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 border border-white/20">
                                            <div className="border border-white/20"></div><div className="border border-white/20"></div><div className="border border-white/20"></div>
                                            <div className="border border-white/20"></div><div className="border border-white/20"></div><div className="border border-white/20"></div>
                                            <div className="border border-white/20"></div><div className="border border-white/20"></div><div className="border border-white/20"></div>
                                        </div>
                                        <h4 className="font-black text-4xl leading-none uppercase text-black z-10 mix-blend-overlay">MAILE<br/>STARDY</h4>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">System Blue</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_brutalist" type="checkbox" value="orange" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#FF4500] dark:bg-[#a32cc4] p-2 flex flex-col relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <h4 className="font-black text-[50px] leading-[0.8] text-center uppercase text-black dark:text-white dark:mix-blend-overlay">CRAL MTFH<br/>IMAGNA DAIL</h4>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">High Contrast</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Soft-brutalist Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Soft-brutalist</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Neo-Brutalism</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_soft" type="checkbox" value="mint" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#F3E8FF] dark:bg-[#312e81] p-2 flex flex-col relative">
                                        <div className="h-full w-full border border-black/10 dark:border-white/10 rounded-lg p-2 grid grid-cols-2 gap-2">
                                            <div className="col-span-2 h-8 bg-[#A7F3D0] dark:bg-[#065f46] rounded-md border border-black/5 dark:border-white/5 flex items-center px-2 text-[10px] font-bold">Header</div>
                                            <div className="bg-[#A7F3D0] dark:bg-[#065f46] rounded-md border border-black/5 dark:border-white/5 col-span-1 row-span-2 p-2 text-[10px]">Content Block</div>
                                            <div className="bg-[#DDD6FE] dark:bg-[#4c1d95] rounded-md border border-black/5 dark:border-white/5 col-span-1 h-full"></div>
                                            <div className="bg-[#FBCFE8] dark:bg-[#831843] rounded-md border border-black/5 dark:border-white/5 col-span-1 h-full"></div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Pastel Blocks</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_soft" type="checkbox" value="purple" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#FEF3C7] dark:bg-[#451a03] p-2 flex flex-col relative">
                                        <div className="h-full w-full border border-black/10 dark:border-white/10 rounded-lg p-2 flex flex-col gap-2">
                                            <div className="flex-1 bg-[#C4B5FD] dark:bg-[#5b21b6] rounded-lg border border-black/5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] p-2">
                                                <div className="text-xs font-bold">Soft-brutalist</div>
                                            </div>
                                            <div className="h-1/3 flex gap-2">
                                                <div className="flex-1 bg-[#93C5FD] dark:bg-[#1e3a8a] rounded-lg border border-black/5"></div>
                                                <div className="flex-1 bg-[#FCA5A5] dark:bg-[#7f1d1d] rounded-lg border border-black/5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Purple Shade</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_soft" type="checkbox" value="peach" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#ECFCCB] dark:bg-[#14532d] p-2 flex flex-col relative">
                                        <div className="h-full w-full bg-white/50 dark:bg-black/20 rounded-lg p-2 flex flex-col gap-2 border border-black/10">
                                            <div className="bg-[#FDBA74] dark:bg-[#9a3412] h-1/2 rounded-lg border-2 border-black/5 dark:border-white/5 p-2 flex items-center">
                                                <span className="text-[10px] font-bold">Meeting a<br/>Soft-brutalist</span>
                                            </div>
                                            <div className="flex-1 grid grid-cols-2 gap-2">
                                                <div className="bg-[#FDE047] dark:bg-[#854d0e] rounded-lg border border-black/5"></div>
                                                <div className="bg-[#6EE7B7] dark:bg-[#064e3b] rounded-lg border border-black/5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Peach Tone</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_soft" type="checkbox" value="mixed" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#FFE4E6] dark:bg-[#881337] p-2 flex flex-col relative">
                                        <div className="h-full w-full flex flex-col gap-2">
                                            <div className="flex gap-2 h-2/3">
                                                <div className="w-2/3 bg-[#D8B4FE] dark:bg-[#581c87] rounded-lg border border-black/5 p-2">
                                                    <span className="text-[10px]">Reading: o</span>
                                                </div>
                                                <div className="w-1/3 bg-[#FEF08A] dark:bg-[#713f12] rounded-lg border border-black/5"></div>
                                            </div>
                                            <div className="flex gap-2 h-1/3">
                                                <div className="w-1/2 bg-[#FFedd5] dark:bg-[#7c2d12] rounded-lg border border-black/5"></div>
                                                <div className="w-1/2 bg-[#C7D2FE] dark:bg-[#312e81] rounded-lg border border-black/5 relative overflow-hidden">
                                                    <div className="absolute bottom-[-10px] right-[-10px] w-10 h-10 rotate-45 bg-white opacity-50"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Playful Mix</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Flat Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Flat</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Clean &amp; Simple</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_flat" type="checkbox" value="cyan" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#00BCD4] p-4 flex flex-col items-center justify-center text-center">
                                        <div className="w-12 h-12 bg-white/20 rounded-full mb-2"></div>
                                        <div className="text-white text-xs opacity-90">Simple UI</div>
                                        <div className="mt-2 h-1 w-16 bg-white/40 rounded-full"></div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Solid Cyan</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_flat" type="checkbox" value="orange" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#FF9800] p-4 flex flex-col items-center justify-center">
                                        <span className="material-icons text-white text-4xl mb-2">cloud_queue</span>
                                        <div className="text-white font-bold text-sm">Cloud Sync</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Vibrant Orange</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_flat" type="checkbox" value="purple" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#673AB7] p-4 flex flex-col items-center justify-center relative">
                                        <div className="w-24 h-16 bg-[#512DA8] rounded-md flex items-center justify-center mb-2">
                                            <div className="w-8 h-8 bg-[#D1C4E9] rounded-full"></div>
                                        </div>
                                        <div className="text-white text-xs">Mobile First</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Deep Purple</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_flat" type="checkbox" value="green" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#4CAF50] p-4 flex flex-col items-center justify-center">
                                        <div className="flex gap-2 mb-2">
                                            <div className="w-8 h-10 bg-[#388E3C] rounded-sm"></div>
                                            <div className="w-8 h-10 bg-[#C8E6C9] rounded-sm"></div>
                                        </div>
                                        <div className="text-white font-bold text-xs">Eco Flat</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Material Green</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Flat 2.0 Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Flat 2.0</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Semi-Flat &amp; Depth</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_flat2" type="checkbox" value="blue" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#42A5F5] p-4 flex flex-col items-center justify-center">
                                        <div className="flex gap-4">
                                            <div className="bg-white p-3 rounded-lg shadow-lg transform -rotate-6">
                                                <div className="w-4 h-4 bg-blue-200 rounded-full"></div>
                                            </div>
                                            <div className="bg-white p-3 rounded-lg shadow-lg transform rotate-3">
                                                <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-white font-medium text-sm drop-shadow-sm">Subtle Shadows</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Layered Blue</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_flat2" type="checkbox" value="purple_gradient" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-gradient-to-br from-[#7E57C2] to-[#512DA8] p-4 flex flex-col items-center justify-center">
                                        <div className="grid grid-cols-3 gap-2 w-full max-w-[80%]">
                                            <div className="bg-white rounded-md h-10 shadow-md flex items-center justify-center"><div className="w-4 h-1 bg-purple-200"></div></div>
                                            <div className="bg-white rounded-md h-10 shadow-md flex items-center justify-center"><div className="w-4 h-1 bg-purple-200"></div></div>
                                            <div className="bg-white rounded-md h-10 shadow-md flex items-center justify-center"><div className="w-4 h-1 bg-purple-200"></div></div>
                                        </div>
                                        <div className="mt-3 text-white text-xs font-medium">Card Layout</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Soft Gradients</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_flat2" type="checkbox" value="peach_ui" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#FFCC80] p-4 flex items-center justify-center relative">
                                        <div className="bg-white p-4 rounded-xl shadow-xl w-3/4">
                                            <div className="h-2 w-1/2 bg-orange-200 mb-2 rounded"></div>
                                            <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                                            <div className="mt-4 flex justify-end">
                                                <div className="px-3 py-1 bg-[#FF7043] text-white text-[8px] rounded shadow-md">Action</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Elevated UI</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_flat2" type="checkbox" value="pink_gradient" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-gradient-to-r from-[#F48FB1] to-[#F06292] p-4 flex flex-col items-center justify-center">
                                        <div className="w-full max-w-[70%] bg-white rounded-lg shadow-lg p-3 flex gap-2 items-center">
                                            <div className="w-8 h-8 bg-pink-100 rounded-full"></div>
                                            <div className="flex-1 space-y-1">
                                                <div className="h-2 bg-gray-100 w-full rounded"></div>
                                                <div className="h-2 bg-gray-100 w-2/3 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Pink Depth</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Modernist Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Modernist</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Bauhaus &amp; Grid</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_modernist" type="checkbox" value="red_blue" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-gray-100 p-4 flex items-center justify-center">
                                        <div className="grid grid-cols-2 gap-2 w-full h-full">
                                            <div className="bg-[#D32F2F] flex items-center justify-center text-white font-bold text-xs p-2">Form</div>
                                            <div className="bg-[#1976D2] flex items-center justify-center">
                                                <div className="w-6 h-6 bg-[#FBC02D] rounded-full"></div>
                                            </div>
                                            <div className="col-span-2 bg-white flex items-center px-2 border border-gray-200">
                                                <span className="text-xs font-bold text-black">Function</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Primary Colors</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_modernist" type="checkbox" value="grid_system" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-white border border-gray-200 p-4 flex flex-col">
                                        <div className="flex gap-4 mb-4">
                                            <div className="w-12 h-12 bg-[#F44336]"></div>
                                            <div className="w-12 h-12 bg-[#FFEB3B]"></div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2 text-[8px] font-mono">
                                            <div className="border border-black p-1">GRID</div>
                                            <div className="border border-black p-1">TYPE</div>
                                            <div className="border border-black p-1">SPACE</div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Strict Grid</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_modernist" type="checkbox" value="swiss" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-gray-50 p-4 flex flex-col justify-between">
                                        <div className="flex gap-2">
                                            <div className="bg-[#D32F2F] w-1/2 h-20"></div>
                                            <div className="bg-[#1976D2] w-1/2 h-20 p-2 text-white text-[8px]">
                                                Modern design<br/>principles.
                                            </div>
                                        </div>
                                        <div className="text-right font-bold text-xl tracking-tighter">SWISS<br/>STYLE</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Swiss Style</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_modernist" type="checkbox" value="geometric" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-white p-4 flex items-center justify-center relative border border-gray-100">
                                        <div className="absolute top-4 left-4 text-xs font-bold">1920</div>
                                        <div className="w-20 h-20 bg-[#1565C0]"></div>
                                        <div className="w-20 h-20 bg-[#FDD835] absolute top-8 left-16 mix-blend-multiply opacity-90"></div>
                                        <div className="absolute bottom-4 right-4 text-xs font-bold">2024</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Geometric</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Neo-modern Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Neo-modern</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Fluid &amp; Organic</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_neomodern" type="checkbox" value="abstract" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#E0E0E0] p-4 flex flex-col relative overflow-hidden">
                                        <div className="absolute top-[-20px] left-[-20px] w-32 h-32 bg-[#D7CCC8] rounded-full opacity-70"></div>
                                        <div className="absolute bottom-[-10px] right-[-30px] w-40 h-40 bg-[#FFCCBC] rounded-full opacity-60"></div>
                                        <div className="relative z-10 p-2">
                                            <h4 className="font-serif text-lg leading-tight mb-2">Abstract<br/>Shapes</h4>
                                            <div className="w-16 h-6 bg-[#FF5722] rounded-full text-white text-[8px] flex items-center justify-center">Button</div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Organic Shapes</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_neomodern" type="checkbox" value="asymmetric" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#F5F5F5] p-4 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[#D1C4E9] rounded-bl-full"></div>
                                        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#FFAB91] rounded-tr-full"></div>
                                        <div className="relative z-10 pt-4 pl-2">
                                            <h4 className="font-display font-bold text-sm">Asymmetric<br/>Balance</h4>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Asymmetry</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_neomodern" type="checkbox" value="typography_fluid" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#B2DFDB] p-4 flex flex-col justify-between relative overflow-hidden">
                                        <div className="absolute top-0 right-[-20%] w-[80%] h-full bg-[#FFCC80] rounded-l-full transform skew-x-12"></div>
                                        <div className="relative z-10">
                                            <h4 className="text-2xl font-serif">Fluid<br/>Type</h4>
                                            <p className="text-[8px] mt-2 max-w-[60%]">Blending traditional layout with organic forms.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Fluid Layout</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_neomodern" type="checkbox" value="gradient_mesh" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-gradient-to-tr from-[#7E57C2] via-[#EC407A] to-[#FF7043] p-4 flex flex-col justify-end">
                                        <div className="text-white">
                                            <h4 className="font-bold text-lg mb-1">Vibrant Mesh</h4>
                                            <div className="h-1 w-12 bg-white/50 rounded-full"></div>
                                        </div>
                                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/30"></div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Mesh Gradients</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>
                </form>
            </main>

            <footer className="bg-white dark:bg-card-dark border-t border-gray-200 dark:border-gray-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="material-icons text-primary">palette</span>
                        <span className="font-display font-bold">StyleSelector</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        © 2023 StyleSelector Inc. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">Twitter</a>
                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">Instagram</a>
                        <a className="text-gray-400 hover:text-primary transition-colors" href="#">Dribbble</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
