import React from 'react'
import searchIcon from '../assets/icons/search.svg'

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="search-box">
      <img src={searchIcon} alt="" />
      <label htmlFor="search" className="sr-only">Search</label>
      <input
        id="search"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBox