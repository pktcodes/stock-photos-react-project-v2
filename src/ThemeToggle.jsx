import { useGlobalContext } from './context';

const ThemeToggle = () => {
  const { greeting } = useGlobalContext();
  console.log(greeting);

  return <h2>Theme Toggle</h2>;
};

export default ThemeToggle;
