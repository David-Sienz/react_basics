import React, { useEffect, useState } from "react";
import CardPeople from "./CardPeople";

export default function PeopleContainer() {
  interface Person {
    name: string;
    avatar: string;
    jobtitle: string;
  }

  const [people, setPeople] = useState<Person[]>([]);
  const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);
  useEffect(() => {
    fetch("https://67c08172b9d02a9f224a0b60.mockapi.io/person").then((res) =>
      res.json().then((data) => {
        setPeople(data);
        setFilterPeople(filterPeople(people));
      })
    );
  }, []);

  const filterPeople = (filter) => {
    let filtered = people.filter(person => person.name.includes(filter));
    return filtered;
  }

  return (
    <div>
      <div>
        <h1>People</h1>
        <div className="border">
          <input className="border p-4" placeholder="Search" type="text" onChange={(el)=>{
            console.log(el.target.value);
            filterPeople(el.target.value);
          }}/>
        </div>
      </div>  
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {filterPeople.map((person) => {
            return (
              <CardPeople
                name={person.name}
                image={person.avatar}
                occupation={person.jobtitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}