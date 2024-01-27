import "./App.css";
import { Card } from "./components/Card";
import { users } from "./data/users";
import { useState } from "react";

function App() {
  const [sort, setSort] = useState("age");
  const [filter, setFilter] = useState("all");

  const handleSort = (type) => {
    setSort(type);
  };

  const handleFilter = (gender) => {
    setFilter(gender);
  };

  const fullName = (user) => {
    return `${user.name.first} ${user.name.last}`;
  };
  const surName = (usersurname) => {
    return `${usersurname.name.last}`;
  };
  const country = (country) => {
    return `${country.location.country}`;
  };

  const sortedAndFilteredUsers = () => {
    let sortedUsersArray;

    if (sort === "by-country") {
      sortedUsersArray = users
        .slice()
        .sort((a, b) => country(a).localeCompare(country(b)));
    } else if (sort === "by-name") {
      sortedUsersArray = users
        .slice()
        .sort((a, b) => fullName(a).localeCompare(fullName(b)));
    } else if (sort === "by-surname") {
      sortedUsersArray = users
        .slice()
        .sort((a, b) => surName(a).localeCompare(surName(b)));
    } else if (sort === "by-age") {
      sortedUsersArray = users.slice().sort((a, b) => a.dob.age - b.dob.age);
    } else {
      sortedUsersArray = users.slice();
    }

    if (filter === "male" || filter === "female") {
      return sortedUsersArray.filter((user) => user.gender === filter);
    }

    return sortedUsersArray;
  };

  return (
    <>
      <header>
        <h1>
          {" "}
          <i class="fa-solid fa-wand-magic-sparkles"></i> Array function magic
        </h1>
      </header>
      <div className="buttons-block">
        <div className="sort">
          <h2>
            <i class="fa-solid fa-arrow-down-short-wide"> </i> Sort by
          </h2>
          <button
            onClick={() => handleSort("by-name")}
            className={`action-button ${
              sort === "by-name" ? "button-highlight" : ""
            }`}
          >
            <i class="fa-solid fa-address-card"> </i> Name
          </button>
          <button
            onClick={() => handleSort("by-surname")}
            className={`action-button ${
              sort === "by-surname" ? "button-highlight" : ""
            }`}
          >
            <i class="fa-regular fa-address-card"> </i> Surname
          </button>
          <br />
          <button
            onClick={() => handleSort("by-age")}
            className={`action-button ${
              sort === "by-age" ? "button-highlight" : ""
            }`}
          >
            <i class="fa-solid fa-person-cane"> </i> Age
          </button>
          <button
            onClick={() => handleSort("by-country")}
            className={`action-button ${
              sort === "by-country" ? "button-highlight" : ""
            }`}
          >
            <i class="fa-solid fa-earth-europe"> </i> Country
          </button>
        </div>
        <div className="filter">
          <h2>
            <i class="fa-solid fa-filter"> </i> Filter
          </h2>

          <button
            onClick={() => handleFilter("all")}
            className={`action-button ${
              filter === "all" ? "button-highlight" : ""
            }`}
          >
            <i class="fa-solid fa-venus-mars"> </i> All
          </button>
          <br />
          <button
            onClick={() => handleFilter("male")}
            className={`action-button ${
              filter === "male" ? "button-highlight" : ""
            }`}
          >
            <i class="fa-solid fa-mars"> </i> Men
          </button>
          <button
            onClick={() => handleFilter("female")}
            className={`action-button ${
              filter === "female" ? "button-highlight" : ""
            }`}
          >
            <i class="fa-solid fa-venus"> </i> Women
          </button>
        </div>
      </div>
      <br />
      <br />
      <main>
        <section className="card-list">
          {sortedAndFilteredUsers().map((user) => (
            <Card key={user.email} user={user} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
