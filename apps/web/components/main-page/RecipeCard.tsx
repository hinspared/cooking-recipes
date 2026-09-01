'use client';

import { Heart, Clock, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type Recipe = {
  id: number;
  title: string;
  image: string;
  category: string;
  time: string;
  rating: number;
  chef: string;
};

type RecipeCardProps = { recipe: Recipe };

export const RecipeCard = (props: RecipeCardProps) => {
  const { recipe } = props;
  const [isSaved, setIsSaved] = useState(false);
  const toggleSave = () => {
    setIsSaved((saved) => !saved);
  };
  return (
    <>
      <article
        key={recipe.id}
        className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      >
        <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
          <Image
            src={recipe.image}
            alt={recipe.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            width={40}
            height={40}
          />
          <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-stone-900 shadow-sm backdrop-blur-sm">
            {recipe.category}
          </span>
          <button
            onClick={toggleSave}
            className="group/btn absolute top-3 right-3 rounded-full bg-white/90 p-2 shadow-sm backdrop-blur-sm transition-all hover:bg-white active:scale-95"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${isSaved ? 'fill-rose-600 text-rose-600' : 'text-stone-600 group-hover/btn:text-rose-600'}`}
            />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <div className="mb-2 flex items-center gap-4 text-xs font-semibold text-stone-500">
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {recipe.time}
              </span>
              <span className="flex items-center gap-1 text-amber-600">
                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />{' '}
                {recipe.rating}
              </span>
            </div>
            <h3 className="mb-1 font-serif text-lg leading-snug font-bold tracking-tight text-stone-900 transition-colors group-hover:text-rose-600">
              {recipe.title}
            </h3>
          </div>
          <p className="mt-4 border-t border-stone-100 pt-3 text-xs text-stone-400">
            By <span className="font-medium text-stone-600">{recipe.chef}</span>
          </p>
        </div>
      </article>
    </>
  );
};
