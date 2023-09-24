import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_ACCESS_KEY
}&query=cat`;

const Gallery = () => {
  const result = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
    },
  });
  console.log(result);

  return <h2>Gallery</h2>;
};

export default Gallery;
