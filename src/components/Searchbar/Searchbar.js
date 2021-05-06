import React, { useState } from 'react';
import './Searchbar.css';

const Searchbar = ({ getListings }) => {
  const [queryString, setQueryString] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setQueryString(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getListings({
      variables: {
        searchString: queryString,
      },
    });
  };
  return (
    <div className="searchbar">
      <form className="search_form" onSubmit={handleSubmit}>
        <input
          className="search_input"
          type="text"
          placeholder="SEARCH BY ADDRESS, CITY, OR ZIP"
          onChange={handleChange}
        ></input>
        <input className="search_button" type="submit" value="Search"></input>
      </form>
    </div>
  );
};

export default Searchbar;
