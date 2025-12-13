export const getFavorites = () => {
  const favs = localStorage.getItem("favorites");
  return favs ? JSON.parse(favs) : [];
};

export const addFavorite = (job: any) => {
  const favs = getFavorites();
  if (!favs.find((j: any) => j._id === job._id)) {
    favs.push(job);
    localStorage.setItem("favorites", JSON.stringify(favs));
  }
};

export const removeFavorite = (jobId: string) => {
  let favs = getFavorites();
  favs = favs.filter((j: any) => j._id !== jobId);
  localStorage.setItem("favorites", JSON.stringify(favs));
};

export const isFavorite = (jobId: string) => {
  const favs = getFavorites();
  return favs.some((j: any) => j._id === jobId);
};
