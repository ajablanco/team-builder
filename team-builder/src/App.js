import React, {useState} from 'react';
import './App.css';
import MemberForm from './MemberForm';
import MemberList from './MemberList';


function App() {
  const [members, setMember] = useState([
    {
      id: 1,
      name: "Aja Blanco",
      email: "aja@gmail.com",
      role: "Web Developer"

      },
      {
        id: 2,
        name: "Frances Hansen",
        email: "frances@gmail.com",
        role: "Full Stack Web Development"
      },
      {
        id: 3,
        name: "Brandon Teague",
        email: "brandon@yahoo.com",
        role: "Team Lead"
      },
      {
        id: 4,
        name: "Steven Wang",
        email: "steven@gmail.com",
        role: "Web Dev"
      },
      {
        id: 5,
        name: "Landon Turner",
        email: "landon@yahoo.com",
        role: "web dev"
      },
      {
        id: 6,
        name: "Jesse Goodburne",
        email: "jesse@gmail.com",
        role: "Web Developer"
      },
      {
        id: 7,
        name: "Bairon Paz",
        email: "bairon@gmail.com",
        role: "full stack web dev"
      },
      {
        id: 8,
        name: "Wayne",
        email: "wayne@hotmail.com",
        role: "dev"
      }

  ]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMember([...members, newMember]);
  };



  return (
    <div className="App">
      <h1>Team</h1>
      <MemberList members={members} />
      <h2>Join the Team</h2>
      <MemberForm addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
