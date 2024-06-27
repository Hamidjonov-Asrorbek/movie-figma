import React from "react";
import movies from "../../assets/Shape2.png";
import bookmark from "../../assets/Bookmark.png";
import cardImg from "../../assets/cart-img.png";

export const CardItem = () => {
  return (
    <div className="card-item">
      <div className="relative w-[280] h-[174px]">
        <img src={cardImg.src} alt="aaa" width={280} height={174} />
        <div className="bg-slate-500 rounded-[50%] absolute top-4 right-6 w-8 h-8 flex items-center justify-center">
          <img src={bookmark.src} alt="bookmark" />
        </div>
      </div>
      <div className="flex gap-5 text-xs">
        <p>2019</p>
        <div className="flex gap-2">
          <img src={movies.src} alt="movies" />
          <p>Movie</p>
        </div>
        <p>PG</p>
      </div>
      <h2 className="text-xl">Beyond Earth</h2>
    </div>
  );
};
