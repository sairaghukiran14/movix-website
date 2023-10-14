import axios from "axios";

const baseurl = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN_KEY;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchdatafromApi = async (url, params) => {
  try {
    const data = await axios.get(baseurl + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
