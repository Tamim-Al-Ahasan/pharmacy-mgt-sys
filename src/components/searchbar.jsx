import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="search for drugs here"
        value={query}
        onChange={handleChange}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Search
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    marginLeft: '8px',
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#13005d', // Green color
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default SearchBar;
