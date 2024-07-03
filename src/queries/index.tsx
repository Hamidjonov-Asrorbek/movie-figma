"server-only";

export async function getMovies(type: string) {
  try {
    const req = await fetch(
      `https://api.kinopoisk.dev/v1.4/movie?limit=20&type=${type}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "Y0TFFSR-ZNF4ZG4-NCFRB3C-30H1C0P",
        },
      }
    );
    const res = await req.json();
    return res;
  } catch (error) {
    return error;
  }
}
export async function getTranding() {
  try {
    const req = await fetch(
      "https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10",
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "Y0TFFSR-ZNF4ZG4-NCFRB3C-30H1C0P",
        },
      }
    );
    const res = await req.json();
    return res;
  } catch (error) {
    return error;
  }
}
