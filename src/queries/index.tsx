"server-only";

export async function getMovies() {
  try {
    const req = await fetch("https://api.kinopoisk.dev/v1.4/movie?limit=40", {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "14SP0NG-1N44S80-QDXSGJT-394SW52",
      },
    });
    const res = await req.json();
    return res;
  } catch (error) {
    return error;
  }
}
