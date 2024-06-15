import React from "react";
import Menu_Itmes from "../data";
import "../styles/App.css";

const App = () => {
  const [itmeFilter, setItemFilter] = React.useState("all");
  const handleClickFilterItems = (id) => {
    id = id.toLowerCase();
    setItemFilter(id);
  };
  let filteredItems;
  if (itmeFilter === "all") filteredItems = Menu_Itmes;
  else {
    filteredItems = Menu_Itmes.filter(
      ({ category }) => category === itmeFilter
    );
  }

  return (
    <div id="main">
      <header>
        <h1>Our Menu</h1>
        <hr />
      </header>
      <main>
        <section className="filter-buttons">
          <ul>
            <li
              id="filter-btn-1"
              onClick={(e) => handleClickFilterItems(e.target.innerText)}
            >
              All
            </li>
            <li
              id="filter-btn-2"
              onClick={(e) => handleClickFilterItems(e.target.innerText)}
            >
              Breakfast
            </li>
            <li
              id="filter-btn-3"
              onClick={(e) => handleClickFilterItems(e.target.innerText)}
            >
              Lunch
            </li>
            <li
              id="filter-btn-4"
              onClick={(e) => handleClickFilterItems(e.target.innerText)}
            >
              Shakes
            </li>
          </ul>
        </section>
        <section className="menu-itemList">
          {filteredItems.map(({ title, img, price, desc, id, category }) => (
            <div
              data-test-id={`menu-item-${category}`}
              key={id}
              className="menu-item"
            >
              <div className="menu-image-box">
                <img src="./images/item-1.jpg" alt={img} />
              </div>
              <div className="menu-details-box">
                <div className="menu-details-header">
                  <h3>{title}</h3>
                  <p>$ {price}</p>
                </div>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;
