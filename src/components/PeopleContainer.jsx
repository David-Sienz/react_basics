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
    <div className="">
      <div className="fixed border mb-4 bg-white w-full h-28 p-8">
          <input
            className="border p-4 bg-white"
            placeholder="Search"
            type="text" 
            onChange={(el) => setSearchTerm(el.target.value)}
          />
      </div>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-32">
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
