import React from "react";
import Menu_Itmes from "../data";
import "../styles/App.css";

const App = () => {
  const [itmeFilter, setItemFilter] = React.useState("all");
  const handleClickFilterItems = (id) => {
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
    <>
      <header>
        <h1>Our Menu</h1>
        <hr />
      </header>
      <main>
        <section className="filter-buttons">
          <ul>
            <li id="all" onClick={(e) => handleClickFilterItems(e.target.id)}>
              All
            </li>
            <li
              id="breakfast"
              onClick={(e) => handleClickFilterItems(e.target.id)}
            >
              Breakfast
            </li>
            <li id="lunch" onClick={(e) => handleClickFilterItems(e.target.id)}>
              Lunch
            </li>
            <li
              id="shakes"
              onClick={(e) => handleClickFilterItems(e.target.id)}
            >
              Shakes
            </li>
          </ul>
        </section>
        <section className="menu-itemList">
          {filteredItems.map(({ title, img, price, desc, id }) => (
            <div key={id} className="menu-item">
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
    </>
  );
};

export default App;
