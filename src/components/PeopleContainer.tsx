import React, { useEffect, useState } from "react";
import CardPeople from "./CardPeople";

export default function PeopleContainer() {
  interface Person {
    name: string;
    avatar: string;
    jobtitle: string;
  }

  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch("https://67c08172b9d02a9f224a0b60.mockapi.io/person").then((res) =>
      res.json().then((data) => {
        setPeople(data);
      })
    );
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {people.map((person) => {
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
  );
}