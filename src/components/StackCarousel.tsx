'use client';
import TechCard from './utils/TechCard';
import { mainStack, techCategories } from '@/data/arrayCategories';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

type Direction = 'next' | 'prev';

const StackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const allTechs = techCategories.flatMap((category) => category.techs);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(allTechs.length / itemsPerPage);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const handleTransition = (dir: Direction) => {
    setCurrentIndex((prev) =>
      dir === 'next'
        ? (prev + 1) % totalPages
        : (prev - 1 + totalPages) % totalPages
    );
  };

  const currentTechs = allTechs.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="mt-4 md:mt-10 md:px-10 bg-background text-foreground">
      <h3
        className="text-2xl md:text-3xl font-semibold mb-6 md:mt-20 
      text-center md:text-left"
      >
        Principais Tecnologias
      </h3>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 
          md:gap-4"
      >
        {mainStack.map((tech) => (
          <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </div>

      <h3
        className="text-2xl md:text-3xl font-semibold mt-10 md:mt-20 mb-6 md:mb-8 text-center 
      md:text-left"
      >
        Outras Tecnologias
      </h3>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          onClick={() => handleTransition('prev')}
          className="absolute left-4 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 -translate-x-4 
          md:-translate-x-12 z-10 bg-background shadow-lg rounded-full p-2 md:p-3 
          cursor-pointer transition-all"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>

        <div className="overflow-hidden relative">
          <div
            key={currentIndex}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4"
          >
            {currentTechs.map((tech, index) => (
              <div
                key={tech.name}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <TechCard icon={tech.icon} name={tech.name} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => handleTransition('next')}
          className="absolute right-4 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 translate-x-4 
          md:translate-x-12 z-10 bg-background shadow-lg rounded-full p-2 md:p-3 
          cursor-pointer transition-all"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>
      </div>
    </section>
  );
};

export default StackCarousel;
