export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI = (category)}&limit=15&api_key=vV7Fi0ojYNiR6GMxKGaA4XvRbP7hj9BY`;
  let response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  })

  return gifs;
}