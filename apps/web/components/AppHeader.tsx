'use client';

import { Utensils, Search } from 'lucide-react';
import { useState } from 'react';

type AppHeaderProps = {};

export const AppHeader = (props: AppHeaderProps) => {
  const {} = props;
  const [savedRecipes, setSavedRecipes] = useState<number[]>([]);
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/80 px-10 py-4 backdrop-blur-md transition-all md:px-20">
      <div className="mx-auto flex min-w-0 items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight text-rose-600">
          <Utensils className="h-6 w-6" />
          <span>umami.</span>
        </div>

        <div className="relative hidden max-w-md flex-1 md:block">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search ingredients, cuisines, chefs..."
            className="w-full rounded-full border border-transparent bg-stone-100 py-2 pr-4 pl-10 text-sm transition-all outline-none focus:border-stone-200 focus:bg-white focus:ring-2 focus:ring-rose-500/20"
          />
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium text-stone-600">
          <a href="#" className="transition-colors hover:text-rose-600">
            Explore
          </a>
          <a
            href="#"
            className="flex items-center gap-1 transition-colors hover:text-rose-600"
          >
            Saved{' '}
            <span className="rounded-full bg-stone-100 px-1.5 py-0.5 text-xs font-bold text-stone-700">
              {savedRecipes.length}
            </span>
          </a>
          <button className="rounded-full bg-stone-900 px-4 py-2 font-semibold text-white transition-all hover:bg-stone-800">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};
