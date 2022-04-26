import React from 'react'

const SearchBox = () => {
  return (
    <div className="search-box">
        <div className="search-box-wrapper">
            <input type="text" className="search" placeholder='Search here...' />
            <div className="send-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </div>
  )
}

export default SearchBox