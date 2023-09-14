import { useEffect, useState } from "react";

export function Home() {
  const [films, setFilms] = useState<
    {
      title: string;
      cover: string;
    }[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:3000/films")
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, []);

  return (
    <div className="grid gap-5">
      <h2 className="text-2xl">Trending now</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
        {films.slice(0, 5).map((film) => (
          <li
            key={film.title}
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              src={film.cover}
              alt={film.title}
              className="object-cover w-full"
            />
          </li>
        ))}
      </ul>

      <h2 className="text-2xl">Picked for you</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
        {films.slice(5).map((film) => (
          <li
            key={film.title}
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              src={film.cover}
              alt={film.title}
              className="object-cover w-full"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
