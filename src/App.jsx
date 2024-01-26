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

  const sortedAndFilteredUsers = () => {
    let sortedUsersArray;

    if (sort === "by-name") {
      sortedUsersArray = users
        .slice()
        .sort((a, b) => fullName(a).localeCompare(fullName(b)));
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
        <h1>Array function magic</h1>
      </header>
      <div className="buttons-block">
        <div className="sort">
          <h2>Sort</h2>
          <button
            onClick={() => handleSort("by-name")}
            className={`action-button ${
              sort === "by-name" ? "button-highlight" : ""
            }`}
          >
            By name
          </button>
          <button
            onClick={() => handleSort("by-age")}
            className={`action-button ${
              sort === "by-age" ? "button-highlight" : ""
            }`}
          >
            By age
          </button>
        </div>{" "}
        <div className="filter">
          <h2>Filter</h2>
          <button
            onClick={() => handleFilter("all")}
            className={`action-button ${
              filter === "all" ? "button-highlight" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => handleFilter("male")}
            className={`action-button ${
              filter === "male" ? "button-highlight" : ""
            }`}
          >
            Men
          </button>
          <button
            onClick={() => handleFilter("female")}
            className={`action-button ${
              filter === "female" ? "button-highlight" : ""
            }`}
          >
            Women
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
