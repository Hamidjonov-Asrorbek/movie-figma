import { MovieItem } from "@/components/MovieItem";
import { getMovies } from "@/queries";
import { Movie } from "@/types";
import React from "react";

async function Page() {
  const request = await getMovies("tv-series");
  return (
    <section>
      <div className="container pt-5 pb-10">
        <label className="input input-bordered w-64 input-md flex items-center gap-2 mb-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            className="grow bg-inherit border-none overflow-hidden"
            placeholder="Search for TV series"
          />
        </label>
        <h1 className="text-3xl mt-10 mb-8">TV Series</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* card item */}
          {request?.docs?.map((movie: Movie) => (
            <MovieItem data={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
