import { useRef, useState, useEffect } from 'react';
import React from 'react';

function Header({ onHeaderValueChange, top10 }) {
  const [selectedItem, setSelectedItem] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  

  const handleItemClick = (event) => {
    const selectedValue = event;
    // const selectedValue = event;
    setSelectedItem(selectedValue);
    setSearchQuery('');
    onHeaderValueChange(selectedValue);
  };
  

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    
  
    };

  
let listDd=''
  const filterDropdownItems = (item) => {
    const text = item.toLowerCase();
    listDd=text.includes(searchQuery);
    return listDd;
  };
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };






  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mt-4">
      <div className="container-fluid">
        <div className="dropdown">
          <input
            type="text"
            className="form-control dropdown-toggle"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            ariaExpanded="false"
            placeholder={selectedItem ?capitalizeFirstLetter(selectedItem)  : 'Search'}
            value={searchQuery}
            onChange={handleSearch}
          />
          <ul className="dropdown-menu overflow-y-scroll" aria-labelledby="dropdownMenuButton" style={{ height: top10.filter(filterDropdownItems).length<=10?top10.filter(filterDropdownItems).length*34:400 }}>
            {/* <li onClick={handleItemClick} style={{ display: filterDropdownItems('bitcoin') ? 'block' : 'none' }}><a className="dropdown-item" href="#">bitcoin</a></li>
            <li onClick={handleItemClick} style={{ display: filterDropdownItems('Another action') ? 'block' : 'none' }}><a className="dropdown-item" href="#">Another action</a></li>
            <li onClick={handleItemClick} style={{ display: filterDropdownItems('Something else here') ? 'block' : 'none' }}><a className="dropdown-item" href="#">Something else here</a></li> */}
          {top10.filter(filterDropdownItems).map((item) => (
                  <li key={item} onClick= {()=>handleItemClick(item)}>
                    <a className="dropdown-item" href='#' >
                      {capitalizeFirstLetter(item)}
                    </a>
                  </li>
                ))}
          </ul>
        </div>
        <a className="navbar-brand" href='#'>
          CryptoTrackr
        </a>
      </div>
    </nav>
  );
}

export default Header;