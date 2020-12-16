import { useState } from 'react'

const PlayerNumber = ({ onChange }) => {
  const [num, setNum] = useState(7)
  const numOfPlayer = [...Array(7)]

  const handleChange = (evt) => {
    const numberOfPlayer = parseInt(evt.target.value, 10)
    setNum(numberOfPlayer)
    onChange(numberOfPlayer)
  }

  const handleReset = () => {
    onChange(num)
  }

  return (
    <div className="player-num-container">
      <div className="player-num-label">Number of Player</div>
      <div className="control">
        <div className="select">
          <select onChange={handleChange} defaultValue={7}>
            {numOfPlayer.map((v, i) => <option key={i}>{i + 1}</option>)}
          </select>
        </div>
      </div>
      <div className="buttons reset-container">
        <button className="button is-primary" onClick={handleReset}>Reset</button>
      </div>
    </div >
  )
}

export default PlayerNumber;
