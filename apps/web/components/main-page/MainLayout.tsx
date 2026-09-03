'use client';

import { BookOpen } from 'lucide-react';
import { RecipeCard } from './RecipeCard';
import Image from 'next/image';

// Mock Data for Recipes
const RECIPES = [
  {
    id: 1,
    title: 'Creamy Tuscan Garlic Salmon',
    time: '30 mins',
    rating: 4.9,
    category: 'Dinner',
    image: 'https://picsum.photos/200',
    chef: 'Elena Rostova',
  },
  {
    id: 2,
    title: '15-Minute Chili Garlic Noodles',
    time: '15 mins',
    rating: 4.7,
    category: 'Quick Lunch',
    image: 'https://picsum.photos/200',
    chef: 'Danielle Lee',
  },
  {
    id: 3,
    title: 'Fluffy Matcha Soufflé Pancakes',
    time: '25 mins',
    rating: 5.0,
    category: 'Breakfast',
    image: 'https://picsum.photos/200',
    chef: 'Kenji Sato',
  },
];

export const MainLayout = () => {
  return (
    <main className="px-10 md:px-20">
      <section className="mb-16 flex flex-col items-center overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm md:flex-row">
        <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
          <span className="mb-3 flex items-center gap-1.5 text-xs font-bold tracking-widest text-rose-600 uppercase">
            <BookOpen className="h-3.5 w-3.5" /> Editor&apos;s Choice
          </span>
          <h1 className="t§racking-tight mb-4 font-serif text-3xl leading-tight font-black text-stone-950 md:text-5xl">
            Cooking shouldn&apos;t be complicated.
          </h1>
          <p className="mb-6 max-w-md text-base leading-relaxed text-stone-600">
            We curate structural, step-by-step recipes that eliminate guessing.
            No long essays, just pure cooking mechanics.
          </p>
          <button className="w-fit rounded-xl bg-rose-600 px-6 py-3 font-bold text-white shadow-md shadow-rose-600/10 transition-all hover:bg-rose-700 active:scale-[0.98]">
            Browse All Recipes
          </button>
        </div>
        <div className="relative h-64 w-full md:h-105 md:w-1/2">
          <Image
            src="https://picsum.photos/200/400"
            alt="Fresh healthy salmon bowl"
            className="h-full w-full object-cover"
            width={40}
            height={40}
          />
        </div>
      </section>
      <section className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold tracking-tight text-stone-950">
            Trending This Week
          </h2>
          <p className="text-sm text-stone-500">
            Most cooked dishes by our community
          </p>
        </div>
        <select className="cursor-pointer rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium outline-none">
          <option>Most Popular</option>
          <option>Newest</option>
          <option>Highest Rated</option>
        </select>
      </section>
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {RECIPES.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </main>
  );
};
