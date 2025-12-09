export default function LayoutSelector() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased transition-colors duration-200">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                {/* Top Navigation Bar */}
                <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 py-3 md:px-10">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                            <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>design_services</span>
                            </div>
                            <h2 className="text-lg font-bold leading-tight tracking-tight">DesignStudio</h2>
                        </div>
                        <nav className="hidden md:flex items-center gap-6">
                            <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Styles</a>
                            <a className="text-primary text-sm font-bold leading-normal" href="#">Layouts</a>
                            <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Components</a>
                            <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Export</a>
                        </nav>
                    </div>
                    <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
                        <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64 relative group">
                            <div className="flex w-full flex-1 items-center rounded-lg h-full bg-white dark:bg-[#282e39] border border-border-light dark:border-transparent group-focus-within:ring-2 ring-primary/50 transition-all overflow-hidden">
                                <div className="text-slate-400 flex items-center justify-center pl-3" data-icon="MagnifyingGlass">
                                    <span className="material-symbols-outlined text-[20px]">search</span>
                                </div>
                                <input className="w-full bg-transparent border-none text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 text-sm font-normal leading-normal h-full px-3" placeholder="Search layouts..." value="" />
                            </div>
                        </label>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-border-light dark:ring-border-dark cursor-pointer hover:ring-primary transition-all" data-alt="User profile avatar showing a generic gradient" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDutbpYH38MQ1wsDt-pEvcBt0FV8eAatmITzMkHw8-qlt8Fl2V9vl7c04GGd-XeBJtjsVpNY6Le9xnX0_7WYS6doh4Ub_TKUa93nOS3tWL-8vPQo3YkEdlEXFXnJFRcq_Yz_DbiVSpPKY_zfJwTWX1wBZ8Iq_-65EDQ-PEhO438JLfQM2CM6anbgP7GaKDxSP-Lfs0LL6qAw_cN0AhI8bz4_hIcsTyQ6F2rQ9IGW0Ak-NxUJMYuUXj-I-7j5OQD5oD0qQP9_F37P39N")' }}></div>
                    </div>
                </header>
                {/* Main Content Layout */}
                <div className="flex flex-1 justify-center py-8 px-4 md:px-8">
                    <div className="flex flex-col max-w-[1200px] flex-1 w-full gap-8">
                        {/* Page Heading */}
                        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
                            <div className="flex flex-col gap-2 max-w-2xl">
                                <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Layout Structures</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-normal leading-relaxed">
                                    Choose a structural foundation for your project. Select a layout to view details or apply it directly to your canvas.
                                </p>
                            </div>
                            {/* Action Buttons for Context (Optional based on typical tool UI) */}
                            <div className="flex gap-3">
                                <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-white dark:bg-[#282e39] border border-border-light dark:border-border-dark hover:bg-slate-50 dark:hover:bg-[#323b49] transition-colors">
                                    <span className="material-symbols-outlined text-[18px]">tune</span>
                                    <span className="text-sm font-medium">Filters</span>
                                </button>
                            </div>
                        </div>
                        {/* Chips / Categories */}
                        <div className="flex overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                            <div className="flex gap-2 min-w-max">
                                <button className="flex h-9 items-center justify-center px-4 rounded-full bg-primary text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90">
                                    <p className="text-sm font-medium leading-normal">All</p>
                                </button>
                                <button className="flex h-9 items-center justify-center px-4 rounded-full bg-white dark:bg-[#282e39] border border-border-light dark:border-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#323b49] transition-all">
                                    <p className="text-sm font-medium leading-normal">Landing Page</p>
                                </button>
                                <button className="flex h-9 items-center justify-center px-4 rounded-full bg-white dark:bg-[#282e39] border border-border-light dark:border-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#323b49] transition-all">
                                    <p className="text-sm font-medium leading-normal">Dashboard</p>
                                </button>
                                <button className="flex h-9 items-center justify-center px-4 rounded-full bg-white dark:bg-[#282e39] border border-border-light dark:border-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#323b49] transition-all">
                                    <p className="text-sm font-medium leading-normal">Mobile-First</p>
                                </button>
                                <button className="flex h-9 items-center justify-center px-4 rounded-full bg-white dark:bg-[#282e39] border border-border-light dark:border-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#323b49] transition-all">
                                    <p className="text-sm font-medium leading-normal">E-commerce</p>
                                </button>
                                <button className="flex h-9 items-center justify-center px-4 rounded-full bg-white dark:bg-[#282e39] border border-border-light dark:border-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#323b49] transition-all">
                                    <p className="text-sm font-medium leading-normal">Blog</p>
                                </button>
                            </div>
                        </div>
                        {/* Layout Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {/* Card 1: Single Column */}
                            <div className="group relative flex flex-col rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark overflow-hidden hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer">
                                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-[16px]">check</span>
                                    </div>
                                </div>
                                <div className="w-full aspect-[4/3] bg-slate-100 dark:bg-[#0f1521] relative p-4 flex items-center justify-center">
                                    {/* Abstract Representation */}
                                    <div className="w-1/2 h-3/4 bg-slate-300 dark:bg-[#2d3748] rounded-sm shadow-sm flex flex-col gap-1 p-1">
                                        <div className="w-full h-2 bg-slate-400 dark:bg-[#4a5568] rounded-[1px]"></div>
                                        <div className="w-full flex-1 bg-slate-400/50 dark:bg-[#4a5568]/50 rounded-[1px]"></div>
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col gap-1">
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Single Column</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Linear flow, best for long-form reading.</p>
                                </div>
                            </div>
                            {/* Card 2: Split Screen */}
                            <div className="group relative flex flex-col rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark overflow-hidden hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer">
                                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-[16px]">check</span>
                                    </div>
                                </div>
                                <div className="w-full aspect-[4/3] bg-slate-100 dark:bg-[#0f1521] relative p-4 flex items-center justify-center gap-1">
                                    <div className="w-1/2 h-3/4 bg-slate-300 dark:bg-[#2d3748] rounded-sm shadow-sm"></div>
                                    <div className="w-1/2 h-3/4 bg-slate-400 dark:bg-[#4a5568] rounded-sm shadow-sm"></div>
                                </div>
                                <div className="p-4 flex flex-col gap-1">
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Split Screen</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Divides content equally, great for contrast.</p>
                                </div>
                            </div>
                            {/* Card 3: Asymmetric */}
                            <div className="group relative flex flex-col rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark overflow-hidden hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer">
                                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-[16px]">check</span>
                                    </div>
                                </div>
                                <div className="w-full aspect-[4/3] bg-slate-100 dark:bg-[#0f1521] relative p-4 flex items-center justify-center gap-1">
                                    <div className="w-2/3 h-3/4 bg-slate-300 dark:bg-[#2d3748] rounded-sm shadow-sm"></div>
                                    <div className="w-1/3 h-3/4 flex flex-col gap-1">
                                        <div className="flex-1 bg-slate-400 dark:bg-[#4a5568] rounded-sm"></div>
                                        <div className="flex-1 bg-slate-400 dark:bg-[#4a5568] rounded-sm"></div>
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col gap-1">
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Asymmetric</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Dynamic visual interest with unequal weights.</p>
                                </div>
                            </div>
                            {/* Card 4: Masonry Grid */}
                            <div className="group relative flex flex-col rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark overflow-hidden hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer">
                                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-[16px]">check</span>
                                    </div>
                                </div>
                                <div className="w-full aspect-[4/3] bg-slate-100 dark:bg-[#0f1521] relative p-6 flex gap-1 items-start justify-center">
                                    <div className="flex flex-col gap-1 w-1/3 pt-2">
                                        <div className="h-8 bg-slate-300 dark:bg-[#2d3748] rounded-sm"></div>
                                        <div className="h-12 bg-slate-400 dark:bg-[#4a5568] rounded-sm"></div>
                                    </div>
                                    <div className="flex flex-col gap-1 w-1/3">
                                        <div className="h-14 bg-slate-400 dark:bg-[#4a5568] rounded-sm"></div>
                                        <div className="h-6 bg-slate-300 dark:bg-[#2d3748] rounded-sm"></div>
                                    </div>
                                    <div className="flex flex-col gap-1 w-1/3 pt-4">
                                        <div className="h-6 bg-slate-300 dark:bg-[#2d3748] rounded-sm"></div>
                                        <div className="h-10 bg-slate-400 dark:bg-[#4a5568] rounded-sm"></div>
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col gap-1">
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Masonry Grid</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Pinterest-style variable height organization.</p>
                                </div>
                            </div>
                            {/* Card 5: Dashboard / Sidebar */}
                            <div className="group relative flex flex-col rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark overflow-hidden hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer">
                                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-[16px]">check</span>
                                    </div>
                                </div>
                                <div className="w-full aspect-[4/3] bg-slate-100 dark:bg-[#0f1521] relative p-4 flex gap-1 justify-center">
                                    <div className="w-1/4 h-3/4 bg-slate-400 dark:bg-[#4a5568] rounded-sm self-center"></div>
                                    <div className="w-2/3 h-3/4 bg-slate-300 dark:bg-[#2d3748] rounded-sm flex flex-col gap-1 p-1 self-center">
                                        <div className="w-full h-1/2 bg-slate-400/20 dark:bg-[#4a5568]/20 rounded-[1px]"></div>
                                        <div className="w-full flex-1 flex gap-1">
                                            <div className="flex-1 bg-slate-400/20 dark:bg-[#4a5568]/20 rounded-[1px]"></div>
                                            <div className="flex-1 bg-slate-400/20 dark:bg-[#4a5568]/20 rounded-[1px]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col gap-1">
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Dashboard</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Fixed sidebar navigation with large content area.</p>
                                </div>
                            </div>
                            {/* Card 6: F-Pattern */}
                            <div className="group relative flex flex-col rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark overflow-hidden hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer">
                                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-[16px]">check</span>
                                    </div>
                                </div>
                                <div className="w-full aspect-[4/3] bg-slate-100 dark:bg-[#0f1521] relative p-4 flex flex-col gap-2 items-center justify-center">
                                    <div className="w-3/4 h-2 bg-primary/60 rounded-sm self-start ml-4"></div>
                                    <div className="w-3/4 h-12 bg-slate-300 dark:bg-[#2d3748] rounded-sm self-start ml-4"></div>
                                    <div className="w-1/2 h-2 bg-primary/60 rounded-sm self-start ml-4"></div>
                                    <div className="w-3/4 h-8 bg-slate-300 dark:bg-[#2d3748] rounded-sm self-start ml-4"></div>
                                </div>
                                <div className="p-4 flex flex-col gap-1">
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">F-Pattern</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Optimized for scanning, standard for e-commerce.</p>
                                </div>
                            </div>
                            {/* Card 7: Z-Pattern */}
                            <div className="group relative flex flex-col rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark overflow-hidden hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer">
                                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-[16px]">check</span>
                                    </div>
                                </div>
                                <div className="w-full aspect-[4/3] bg-slate-100 dark:bg-[#0f1521] relative p-4 flex flex-col gap-1 items-center justify-center">
                                    <div className="w-3/4 h-2 bg-primary/60 rounded-sm flex justify-between"></div>
                                    <div className="w-3/4 h-16 bg-transparent rounded-sm relative">
                                        {/* Z stroke representation */}
                                        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-b-2 border-slate-300 dark:border-[#2d3748]"></div>
                                        <div className="absolute top-0 right-0 w-[110%] h-[2px] bg-slate-300 dark:bg-[#2d3748] rotate-[25deg] origin-top-right translate-y-[2px]"></div>
                                    </div>
                                    <div className="w-1/3 h-3 bg-primary rounded-sm self-center mt-1"></div>
                                </div>
                                <div className="p-4 flex flex-col gap-1">
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Z-Pattern</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Guides the eye across the page, ideal for landing pages.</p>
                                </div>
                            </div>
                            {/* Card 8: Bento Grid (New Trend) */}
                            <div className="group relative flex flex-col rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark overflow-hidden hover:shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-all cursor-pointer">
                                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                                        <span className="material-symbols-outlined text-[16px]">check</span>
                                    </div>
                                </div>
                                <div className="w-full aspect-[4/3] bg-slate-100 dark:bg-[#0f1521] relative p-4 flex gap-1 items-center justify-center">
                                    <div className="w-1/3 h-3/4 flex flex-col gap-1">
                                        <div className="flex-1 bg-slate-400 dark:bg-[#4a5568] rounded-lg"></div>
                                    </div>
                                    <div className="w-1/2 h-3/4 flex flex-col gap-1">
                                        <div className="h-1/2 flex gap-1">
                                            <div className="flex-1 bg-slate-300 dark:bg-[#2d3748] rounded-lg"></div>
                                            <div className="flex-1 bg-slate-300 dark:bg-[#2d3748] rounded-lg"></div>
                                        </div>
                                        <div className="h-1/2 bg-slate-300 dark:bg-[#2d3748] rounded-lg"></div>
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col gap-1">
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Bento Grid</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Modern, modular compartmentalization of content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <footer className="flex flex-col gap-6 px-5 py-10 text-center border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark mt-auto">
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-normal leading-normal" href="#">Privacy Policy</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-normal leading-normal" href="#">Terms of Service</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-normal leading-normal" href="#">Help Center</a>
                    </div>
                    <p className="text-slate-400 dark:text-slate-600 text-sm font-normal leading-normal">© 2024 DesignStudio. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}
