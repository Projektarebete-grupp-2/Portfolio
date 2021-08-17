import React from 'react';
import './SearchBarStyle.css';
import { HiSearch } from "react-icons/hi";
import { Container } from '@material-ui/core';

interface SearchBarProps {
  search: Function
} 

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ search }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    search(event.currentTarget.value);
  };

  return (
    <div className="search">
      <Container className="container">
        <div>
          <HiSearch />
        </div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="search in the questions directory"
        />
      </Container>
    </div>
  );
};

export default SearchBar;
