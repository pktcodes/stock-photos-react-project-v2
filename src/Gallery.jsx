const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_ACCESS_KEY
}&query=cat`;

console.log(url);

const Gallery = () => {
  return <h2>Gallery</h2>;
};

export default Gallery;
