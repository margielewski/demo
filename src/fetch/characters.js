const URL = "https://rickandmortyapi.com/api/";

export const fetchCharacters = async (key, page) => {
  const res = await fetch(`${URL}character?page=${page}`);
  return res.json();
};
