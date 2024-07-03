"use client";
import movies from "../../assets/Shape2.png";
import bookmark from "../../assets/Bookmark.png";
import Image from "next/image";
import kinopoisk from "../../assets/kinoPoisk.jpg";
import { Movie } from "@/types";
import Link from "next/link";

export function TrandingItem({ data }: { data: Movie }) {
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
