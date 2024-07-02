import Image from "next/image";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import movies from "../assets/Shape2.png";
import bookmark from "../assets/Bookmark.png";
import cardImg from "../assets/cart-img.png";
import { CardItem } from "@/components/MovieItem";

export default function Home() {
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
            placeholder="Search for movies or TV series"
          />
        </label>
        <h1 className="text-3xl mb-6">Trending</h1>
        <div className="slide_card flex gap-10">
          {/* card item */}
          <div className="card_slice__item w-full max-w-[400px] h-[230px]  bg-[url('../assets/slide1.png')] bg-no-repeat bg-cover pl-6 relative">
            <div className="bg-slate-500 rounded-[50%] absolute top-4 right-6 w-8 h-8 flex items-center justify-center">
              <img src={bookmark.src} alt="bookmark" />
            </div>
            <div className="flex gap-5 absolute bottom-14">
              <p>2019</p>
              <div className="flex gap-2">
                <img src={movies.src} alt="movies" />
                <p>Movie</p>
              </div>
              <p>PG</p>
            </div>
            <h2 className="absolute bottom-6 text-2xl">Beyond Earth</h2>
          </div>
          {/* card item */}
          <div className="card_slice__item w-full max-w-[400px] h-[230px]  bg-[url('../assets/slide2.png')] bg-no-repeat bg-cover pl-6 relative">
            <div className="bg-slate-500 rounded-[50%] absolute top-4 right-6 w-8 h-8 flex items-center justify-center">
              <img src={bookmark.src} alt="bookmark" />
            </div>
            <div className="flex gap-5 absolute bottom-14">
              <p>2019</p>
              <div className="flex gap-2">
                <img src={movies.src} alt="movies" />
                <p>Movie</p>
              </div>
              <p>PG</p>
            </div>
            <h2 className="absolute bottom-6 text-2xl">Beyond Earth</h2>
          </div>
          {/* card item */}
          <div className="card_slice__item w-full max-w-[280px] bg-[url('../assets/slide3.png')] bg-no-repeat bg-cover pl-6 relative">
            <div className="bg-slate-500 rounded-[50%] absolute top-4 right-6 w-8 h-8 flex items-center justify-center">
              <img src={bookmark.src} alt="bookmark" />
            </div>
            <div className="flex gap-5 absolute bottom-14">
              <p>2019</p>
              <div className="flex gap-2">
                <img src={movies.src} alt="movies" />
                <p>Movie</p>
              </div>
              <p>PG</p>
            </div>
            <h2 className="absolute bottom-6 text-2xl">Beyond Earth</h2>
          </div>
        </div>
        {/* Recommended for you */}
        <h1 className="text-3xl mt-10 mb-8">Recommended for you</h1>
        <div className="grid gap-10 grid-cols-4">
          {/* card item */}
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </section>
  );
}
