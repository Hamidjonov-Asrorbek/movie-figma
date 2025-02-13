"use client";
import movies from "../../assets/Shape2.png";
import bookmark from "../../assets/Bookmark.png";
import Image from "next/image";
import { getMovies } from "@/queries";
import kinopoisk from "../../assets/kinoPoisk.jpg";
import { Movie } from "@/types";
import Link from "next/link";
import { MouseEvent } from "react";

export function MovieItem({ data }: { data: Movie }) {
  const request = getMovies("movie");
  // console.log(request);
  const {
    id,
    name,
    alternativeName,
    year,
    type,
    poster,
    backdrop,
    description,
    rating,
  } = data;

  const addToFavorites = (e: MouseEvent) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    favorites.push(data);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  return (
    <>
      <div
        key={id}
        className="card-item bg-inherit shadow-md rounded-lg overflow-hidden"
        onClick={() =>
          (
            document.getElementById(`modal_${id}`) as HTMLDialogElement
          ).showModal()
        }
      >
        <div className="relative">
          <Image
            className="object-cover object-center w-[280px] h-[350px] mb-5"
            src={backdrop?.url ?? poster?.url ?? kinopoisk}
            alt={name as string}
            width={280}
            height={350}
          />
          <div
            className="bg-slate-500 hover:bg-slate-700 rounded-[50%] absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
            onClick={addToFavorites}
          >
            <svg
              width="12"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                fill="#bbb7b7"
              />
            </svg>
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

      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={`modal_${id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{name ?? alternativeName}</h3>
          <p className="py-4">
            {year ?? 2023} | {type} | {rating?.imdb ?? "5"}
          </p>
          <p className="pb-4">
            {description ??
              "Хороший фильм для просмотра. Смотрите и наслаждайтесь"}
          </p>

          <div className="modal-action ">
            <form
              method="dialog"
              className="w-full flex items-center justify-center gap-5"
            >
              {/* if there is a button in form, it will close the modal */}
              <Link
                target="blank"
                href={`https://www.kinopoisk.ru/film/${id}`}
                className="btn btn-info"
              >
                Watch 📽
              </Link>
              <button className="btn">Close ❌</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
