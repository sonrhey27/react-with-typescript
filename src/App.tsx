import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List'

export interface IState {
  people : {
    name : string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setpeople] = useState<IState["people"]>([
    {
      name: "Person 1",
      age: 2,
      url: "https://3.img-dpreview.com/files/p/TS1200x900~sample_galleries/1330372094/1693761761.jpg",
      note: "coming"
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party!</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setpeople}/>
    </div>
  );
}

export default App;
