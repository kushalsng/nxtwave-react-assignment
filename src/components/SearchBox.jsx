import React from 'react'
import searchIcon from '../assets/icons/search.svg'

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="search-box">
      <img src={searchIcon} alt="" />
      <input
        id="search"
        type="text"
        placeholder="Search"
        aria-label="Search"
        autoComplete='off'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBox