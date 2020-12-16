import { useState } from 'react';
import './App.css';
import InputTable from './InputTable'
import Score from './Score'
import PlayerNumber from './PlayerNumber'

const initialData = {
  numberOfPlayer: 7,
  red: {
    yellow: 0,
    red: 0,
    eliminated: 0
  },
  white: {
    yellow: 0,
    red: 0,
    eliminated: 0
  }
}

function App() {
  const [data, setData] = useState(JSON.parse(JSON.stringify(initialData)))

  const handleChange = (data) => {
    setData(data)
  }

  const handlePlayerNumChange = (number) => {
    // Reset Data
    let newData = JSON.parse(JSON.stringify(initialData));
    newData.numberOfPlayer = number
    setData(newData)
  }

  return (
    <div className="App">
      <h1 className="title is-1">Wiser Point</h1>
      <PlayerNumber onChange={handlePlayerNumChange}></PlayerNumber>
      <InputTable data={data} onChange={handleChange}></InputTable>
      <Score data={data}></Score>
    </div>
  );
}

export default App;
