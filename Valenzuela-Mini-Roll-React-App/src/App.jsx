import React, { useState } from "react";
import PollOption from "./PollOption"; // Import of PollOption.jsx
import './App.css'; // Import of App.css

function App() {
  // Step 1: Set up an array of pets with initial vote count
  const [pets, setPets] = useState([
    { option: "Dog", count: 0 },
    { option: "Cat", count: 0 },
    { option: "Rat", count: 0 },
  ]);

  // Step 2: Handle the vote action
  const handleVote = (index) => {
    const updatedPets = [...pets];
    updatedPets[index].count += 1;
    setPets(updatedPets);
  };

  // Step 3: Get the current leader
  const getLeader = () => {
    let leader = pets[0];
    pets.forEach((pet) => {
      if (pet.count > leader.count) {
        leader = pet;
      }
    });
    return leader;
  };

  return (
    <div className="App">
      <h1>Vote for the Best Pet</h1>
      <div>
        {pets.map((pet, index) => (
          <PollOption
            key={index}
            label={pet.option}
            count={pet.count}
            onVote={() => handleVote(index)}
          />
        ))}
      </div>
      <div>
        <h2>Current Leader</h2>
        <p>
          {getLeader().option} with {getLeader().count} votes
        </p>
      </div>
    </div>
  );
}

export default App;