import React from "react";
import movies from "../../assets/Shape2.png";
import bookmark from "../../assets/Bookmark.png";
import Image from "next/image";
import { getMovies } from "@/queries";
import kinopoisk from "../../assets/kinoPoisk.jpg";
import { Movie } from "@/types";

export async function CardItem({ data }: { data: Movie }) {
  const request = await getMovies();
  console.log(request);
  const { id, name, alternativeName, year, type, poster, backdrop } = data;

  return (
    <>
      <div
        key={id}
        className="card-item bg-inherit shadow-md rounded-lg overflow-hidden"
      >
        <div className="relative">
          <Image
            className="object-cover object-center w-[280px] h-[350px] mb-5"
            src={backdrop?.url ?? poster?.url ?? kinopoisk}
            alt={name ?? "Default alt text"}
            width={280}
            height={350}
          />
          <div className="bg-slate-500 rounded-[50%] absolute top-4 right-4 w-8 h-8 flex items-center justify-center">
            <img src={bookmark.src} alt="bookmark" />
          </div>
        </div>
        <div className="flex gap-5 text-xs pl-5 mb-5">
          <p>{year ?? 2023}</p>
          <div className="flex gap-2">
            <img src={movies.src} alt="movies" />
            <p>{type}</p>
          </div>
          <p>PG</p>
        </div>
        <h2 className="text-xl mb-5 pl-5">{name ?? alternativeName}</h2>
      </div>
    </>
  );
}
