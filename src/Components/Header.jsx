import React, { useState } from "react";

function Header({ onHeaderValueChange, top10 }) {
  const [selectedItem, setSelectedItem] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = top10.filter((item) =>
    item.toLowerCase().includes(searchQuery)
  );

  const handleItemClick = (value) => {
    setSelectedItem(value);
    setSearchQuery("");
    onHeaderValueChange(value);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const capitalizeFirstLetter = (value) =>
    value.charAt(0).toUpperCase() + value.slice(1);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mt-4">
      <div className="container-fluid">
        <div className="dropdown">
          <input
            type="text"
            className="form-control dropdown-toggle"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            placeholder={selectedItem ? capitalizeFirstLetter(selectedItem) : "Search"}
            value={searchQuery}
            onChange={handleSearch}
          />
          <ul
            className="dropdown-menu overflow-y-scroll"
            aria-labelledby="dropdownMenuButton"
            style={{
              height:
                filteredItems.length <= 10
                  ? filteredItems.length * 34
                  : 400,
            }}
          >
            {filteredItems.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => handleItemClick(item)}
                >
                  {capitalizeFirstLetter(item)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <span className="navbar-brand">CryptoTrackr</span>
      </div>
    </nav>
  );
}

export default Header;
