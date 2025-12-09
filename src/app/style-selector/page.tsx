"use client";
import { useEffect } from 'react';

export default function StyleSelector() {
    useEffect(() => {
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
            <header className="sticky top-0 z-50 bg-card-light/90 dark:bg-card-dark/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-primary text-3xl">palette</span>
                            <h1 className="text-xl font-display font-bold tracking-tight">StyleSelector</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400" id="theme-toggle" onClick={toggleTheme}>
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
                <div className="mb-12 text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                        Choose Your Aesthetic
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Select one or more design styles that resonate with your brand identity. Mix and match to create a unique mood board.
                    </p>
                </div>
                <form action="#" method="POST">
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Minimalist</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Clean &amp; Airy</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_minimalist" type="checkbox" value="modern" />
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
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_minimalist" type="checkbox" value="dark" />
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
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_minimalist" type="checkbox" value="pastel" />
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
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Clean &amp; Clear</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Readability Focus</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_clean" type="checkbox" value="clean_white" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-white border border-gray-100 p-6 flex flex-col items-center justify-center">
                                        <div className="w-16 h-16 bg-gray-50 rounded-full mb-4 flex items-center justify-center text-gray-300">img</div>
                                        <div className="h-2 w-24 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-2 w-16 bg-gray-100 rounded"></div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Clean White</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_clean" type="checkbox" value="crisp_edges" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-gray-50 p-4 flex flex-col relative">
                                        <div className="absolute inset-x-4 top-4 h-20 bg-white shadow-sm border border-gray-200 rounded-sm"></div>
                                        <div className="absolute inset-x-4 top-28 h-8 flex gap-2">
                                            <div className="flex-1 bg-blue-600 rounded-sm"></div>
                                            <div className="w-8 bg-gray-200 rounded-sm"></div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Crisp Edges</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_clean" type="checkbox" value="high_clarity" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-white p-4 flex flex-col justify-between">
                                        <h4 className="font-bold text-2xl text-gray-900 leading-none tracking-tight">Large<br />Title</h4>
                                        <div className="flex gap-2">
                                            <div className="h-12 w-24 bg-blue-50 border border-blue-100 rounded flex items-center justify-center text-[8px] text-blue-800 font-bold uppercase tracking-widest">Data</div>
                                            <div className="h-12 w-12 bg-gray-50 border border-gray-100 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">High Clarity</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_clean" type="checkbox" value="low_noise" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#F8FAFC] p-8 flex flex-col items-center justify-center text-center">
                                        <div className="w-12 h-12 bg-white rounded-full shadow-sm mb-3 flex items-center justify-center">
                                            <span className="block w-2 h-2 bg-green-400 rounded-full"></span>
                                        </div>
                                        <p className="text-gray-400 text-[10px] font-medium tracking-wider uppercase">Zero Distraction</p>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Low Noise</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Luxury &amp; Contrast</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Elegant &amp; Sharp</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_luxury" type="checkbox" value="high_end" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#1a1a1a] p-6 flex flex-col items-center justify-center text-center relative">
                                        <div className="border border-[#D4AF37] p-4 absolute inset-4"></div>
                                        <h4 className="text-[#D4AF37] font-serif italic text-2xl">Luxury</h4>
                                        <div className="w-8 h-[1px] bg-[#D4AF37] mt-2"></div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Premium Gold</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_luxury" type="checkbox" value="high_contrast" />
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
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_luxury" type="checkbox" value="monochromatic" />
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
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_luxury" type="checkbox" value="executive" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#F5F5DC] p-4 flex flex-col items-center justify-center relative border-t-4 border-[#8B4513]">
                                        <h4 className="font-serif text-[#5D4037] text-xl tracking-wide">ESTATE</h4>
                                        <p className="text-[8px] text-[#8D6E63] mt-1 tracking-widest uppercase">Consultancy</p>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Executive</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Cyber &amp; Future</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Tech &amp; Light</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_cyber" type="checkbox" value="neon_lit" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-black p-4 flex flex-col items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHY0MHptMS0xaDM4VjFIMXYzOHoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iLjIiLz48L2c+PC9zdmc+')]"></div>
                                        <div className="border-2 border-cyan-400 rounded-lg p-2 shadow-[0_0_10px_#22d3ee] z-10">
                                            <h4 className="text-cyan-400 font-bold font-mono tracking-widest drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">CYBER</h4>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Neon Lit</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_cyber" type="checkbox" value="futuristic" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-slate-900 p-4 flex flex-col items-center justify-center relative overflow-hidden">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-12 border border-blue-500/30 rounded-full transform rotate-x-60 perspective-1000"></div>
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 border border-blue-400/50 rounded-full transform rotate-x-60 perspective-1000"></div>
                                        <div className="text-blue-100 font-tech text-xs z-10">HOLOGRAPHIC</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Futuristic HUD</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_cyber" type="checkbox" value="synthwave" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-gradient-to-b from-[#2d1b4e] to-[#1a0b2e] p-4 flex flex-col items-center justify-end relative overflow-hidden">
                                        <div className="absolute top-4 w-12 h-12 rounded-full bg-gradient-to-b from-yellow-300 to-orange-500 shadow-[0_0_20px_rgba(255,165,0,0.5)]"></div>
                                        <div className="absolute bottom-0 w-full h-1/2 bg-[linear-gradient(0deg,transparent_24%,rgba(236,72,153,0.3)_25%,rgba(236,72,153,0.3)_26%,transparent_27%,transparent_74%,rgba(236,72,153,0.3)_75%,rgba(236,72,153,0.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(236,72,153,0.3)_25%,rgba(236,72,153,0.3)_26%,transparent_27%,transparent_74%,rgba(236,72,153,0.3)_75%,rgba(236,72,153,0.3)_76%,transparent_77%,transparent)] bg-[length:30px_30px] perspective-origin-bottom transform perspective-500 rotate-x-60"></div>
                                        <div className="relative z-10 font-display italic font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-purple-500 text-xl tracking-tighter drop-shadow-md">SYNTH</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Synthwave</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_cyber" type="checkbox" value="cyberpunk" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#0f0f1a] p-4 flex flex-col items-center justify-center relative overflow-hidden border-l-4 border-yellow-400">
                                        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>
                                        <h4 className="text-pink-500 font-bold font-mono text-2xl z-10 glitch-text" style={{ textShadow: '2px 0 #0ff, -2px 0 #f00' }}>GLITCH</h4>
                                        <div className="w-full h-1 bg-yellow-400 mt-2 z-10"></div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Cyberpunk</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </section>
                    <section className="mb-16">
                        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <h3 className="text-2xl font-display font-bold">Tangible &amp; Corporate</h3>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium uppercase tracking-wider rounded-full text-gray-600 dark:text-gray-300">Texture &amp; Structure</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_tangible" type="checkbox" value="industrial" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-zinc-400 p-4 flex flex-col items-center justify-center relative border-4 border-zinc-600">
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-50"></div>
                                        <div className="z-10 bg-black text-white px-3 py-1 font-bold font-display uppercase tracking-widest text-xs border border-white/20">Heavy Duty</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Industrial</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_tangible" type="checkbox" value="corporate" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-white p-0 flex flex-col">
                                        <div className="h-10 bg-blue-900 flex items-center px-4">
                                            <div className="w-20 h-2 bg-white/20 rounded"></div>
                                        </div>
                                        <div className="flex-1 p-4 bg-gray-100 flex gap-2">
                                            <div className="w-1/3 bg-white h-full shadow-sm"></div>
                                            <div className="w-2/3 bg-white h-full shadow-sm flex flex-col p-2">
                                                <div className="h-2 w-1/2 bg-gray-200 mb-2"></div>
                                                <div className="h-16 w-full bg-blue-50"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Corporate Blue</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_tangible" type="checkbox" value="artisanal" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#FDF6E3] p-4 flex flex-col items-center justify-center text-center relative">
                                        <div className="absolute inset-0 border-2 border-dashed border-[#8B4513]/30 m-2 rounded"></div>
                                        <h4 className="font-hand text-[#5D4037] text-xl rotate-[-5deg]">Hand Made</h4>
                                        <div className="mt-2 w-16 h-1 bg-[#D2B48C] rounded-full"></div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Artisanal</span>
                                        <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded-full peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center transition-colors">
                                            <span className="material-icons text-white text-[12px] opacity-0 peer-checked:opacity-100">check</span>
                                        </div>
                                    </div>
                                </div>
                            </label>
                            <label className="group relative cursor-pointer">
                                <input className="peer sr-only" name="style_tangible" type="checkbox" value="organic" />
                                <div className="bg-card-light dark:bg-card-dark rounded-xl overflow-hidden border-2 border-transparent peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                    <div className="aspect-[4/3] bg-[#E8F5E9] p-4 flex flex-col relative overflow-hidden">
                                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#C8E6C9] rounded-t-[50%] scale-x-150"></div>
                                        <div className="absolute bottom-[-10px] left-10 w-20 h-20 bg-[#A5D6A7] rounded-full opacity-60"></div>
                                        <div className="z-10 text-[#2E7D32] font-serif italic text-lg text-center mt-4">Natural Flow</div>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <span className="font-medium text-sm">Organic</span>
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
