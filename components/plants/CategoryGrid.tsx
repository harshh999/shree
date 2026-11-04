"use client";

import React, { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { curatedPlants, plantCategories } from "@/data/plants";
import { PlantCard } from "./PlantCard";

interface CategoryGridProps {
  initialCategory?: string;
}

export function CategoryGrid({ initialCategory }: CategoryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || "All"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...plantCategories.map((c) => c.name)];

  const filteredPlants = useMemo(() => {
    return curatedPlants.filter((plant) => {
      const matchesCategory =
        selectedCategory === "All" || plant.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        plant.name.toLowerCase().includes(query) ||
        plant.category.toLowerCase().includes(query) ||
        (plant.botanicalNote &&
          plant.botanicalNote.toLowerCase().includes(query)) ||
        plant.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      {/* Search and Category Filter Bar */}
      <div className="mb-10 space-y-6">
        {/* Top Control Bar: Search and Reset */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-ink-muted absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search plants by name, variety or foliage..."
              className="w-full bg-paper border border-borderLight rounded-full pl-11 pr-10 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest transition-colors shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Result Count */}
          <div className="text-xs text-ink-muted uppercase tracking-wider font-semibold self-start sm:self-auto">
            Showing {filteredPlants.length} of {curatedPlants.length} Selections
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const count =
              category === "All"
                ? curatedPlants.length
                : curatedPlants.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shrink-0 ${
                  isSelected
                    ? "bg-forest text-paper shadow-sm"
                    : "bg-paper hover:bg-pale/60 text-ink/80 border border-borderLight"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`ml-1.5 text-[10px] ${
                    isSelected ? "text-pale" : "text-ink-muted"
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Plants Grid */}
      {filteredPlants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-paper/50 rounded-2xl border border-dashed border-borderLight">
          <p className="font-serif text-2xl text-ink mb-2">No plants found</p>
          <p className="text-ink-muted text-sm max-w-md mx-auto mb-6">
            We couldn&apos;t find any plants matching &ldquo;{searchQuery}&rdquo; in this category.
            Our seasonal nursery collection changes weekly.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest underline underline-offset-4"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
