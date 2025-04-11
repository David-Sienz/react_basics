import React, { useEffect, useState } from "react";
import CardPeople from "./CardPeople";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://67c08172b9d02a9f224a0b60.mockapi.io/person")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data);
        setFilteredPeople(data);
      });
  }, []);

  useEffect(() => {
    const filtered = people.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPeople(filtered);
  }, [searchTerm, people]);

  return (
    <div>
      <div>
        <h1>People</h1>
        <div className="border">
          <input
            className="border p-4"
            placeholder="Search"
            type="text"
            onChange={(el) => setSearchTerm(el.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPeople.map((person) => (
            <CardPeople
              key={person.id}
              name={person.name}
              image={person.avatar}
              occupation={person.jobtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
