"use client";

import Image from "next/image";

export default function SearchResults({ searchQuery, games }) {
  return (
    <div className=" h-screen  overflow-hidden mb-6">
      <h1 className="font-display text-2xl md:text-3xl mb-4">
        {searchQuery ? 'Search Results for "' : "No search query provided..."}
        {searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)}
        {searchQuery ? '"' : ""}
      </h1>

      <div className="text-accent mb-4">
        {searchQuery && `Games found: ${games?.length}`}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {games.map((game) => (
          <li
            key={game.id}
            className="hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <a
              href={`/game/${game.slug}`}
              className="flex gap-4 h-40 bg-main hover:bg-accent-secondary p-4 rounded-lg"
            >
              <Image
                src={`/game/${game.image}`}
                alt={game.title}
                width={300}
                height={300}
                className="w-2/6 rounded-lg"
                quality={50}
              />
              <div className="flex flex-col gap-2">
                <span className="text-xl font-display">{game.title}</span>
                <p className="text-accent text-sm sm:line-clamp-3 overflow-hidden text-ellipsis ">
                  {game.description}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
