import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_ACCESS_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const result = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchTerm}`);
      return response.data;
    },
  });

  if (result.isLoading) {
    return (
      <section className="image-container">
        <h4>loading...</h4>
      </section>
    );
  }

  if (result.isError) {
    return (
      <section className="image-container">
        <h4>there was an error...</h4>
      </section>
    );
  }

  const data = result.data.results;

  if (data.length < 1) {
    return (
      <section className="image-container">
        <h4>no results found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {data.map((image) => {
        const { id, alt_description } = image;
        const url = image?.urls.regular;
        return <img key={id} src={url} alt={alt_description} className="img" />;
      })}
    </section>
  );
};

export default Gallery;
