import { useState } from 'react';
import './App.css';
import InputTable from './InputTable'
import Score from './Score'

let initialData = {
  red: {
    contesting: 7,
    yellow: 0,
    red: 0
  },
  white: {
    contesting: 7,
    yellow: 0,
    red: 0
  }
}

function App() {
  const [data, setData] = useState(initialData)

  const handleChange = (data) => {
    setData(data)
  }

  return (
    <div className="App">
      <h1 className="title is-1">Wiser Point</h1>
      <InputTable data={data} onChange={handleChange}></InputTable>
      <Score data={data}></Score>
    </div>
  );
}

export default App;
