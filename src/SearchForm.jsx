const SearchForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.elements.search.value;
    if (!searchValue) {
      return;
    }
    console.log(searchValue);
  };

  return (
    <section>
      <h1 className="title">stock photos</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
