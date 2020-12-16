

const InputTable = ({ data, onChange }) => {
  const { red, white, numberOfPlayer } = data;

  const redStrikeOut = numberOfPlayer - red.contesting - red.yellow - red.red;
  const whiteStrikeOut = numberOfPlayer - white.contesting - white.yellow - white.red;

  const redPlayerMismatch = red.contesting + red.yellow + red.red > numberOfPlayer
  const whitePlayerMismatch = white.contesting + white.yellow + white.red > numberOfPlayer
  const hasError = redPlayerMismatch | whitePlayerMismatch

  const handleChange = (name, value) => {
    const field = name.split('-')
    let newData = { ...data }
    newData[field[0]][field[1]] = value
    onChange(newData)
  }

  return (
    <div className="input-table-container">
      {hasError ? <div className="has-text-danger">Error: Mismatch Player Number detected</div> : null}
      <table className="table input-table">
        <thead>
          <tr>
            <th>Ball</th>
            <th className="has-text-danger">Red Team</th>
            <th>White Team</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contesting Ball</td>
            <td><Select error={redPlayerMismatch} number={numberOfPlayer + 1} value={red.contesting} onChange={(data) => handleChange("red-contesting", data)}></Select></td>
            <td><Select error={whitePlayerMismatch} number={numberOfPlayer + 1} value={white.contesting} onChange={(data) => handleChange("white-contesting", data)}></Select></td>
          </tr>
          <tr>
            <td className="has-background-warning">Yellow Flag</td>
            <td><Select error={redPlayerMismatch} number={numberOfPlayer + 1} value={red.yellow} onChange={(data) => handleChange("red-yellow", data)}></Select></td>
            <td><Select error={whitePlayerMismatch} number={numberOfPlayer + 1} value={white.yellow} onChange={(data) => handleChange("white-yellow", data)}></Select></td>
          </tr>
          <tr>
            <td className="has-background-danger">Red Flag</td>
            <td><Select error={redPlayerMismatch} number={numberOfPlayer + 1} value={red.red} onChange={(data) => handleChange("red-red", data)}></Select></td>
            <td><Select error={whitePlayerMismatch} number={numberOfPlayer + 1} value={white.red} onChange={(data) => handleChange("white-red", data)}></Select></td>
          </tr>
          <tr>
            <td className="strike-out-label">Strike Out</td>
            <td>{redStrikeOut}</td>
            <td>{whiteStrikeOut}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Select = ({ error, number, value, onChange }) => {
  const numOfPlayer = [...Array(number)]

  const handleChange = (evt) => {
    onChange(parseInt(evt.target.value, 10))
  }

  const selectClassName = error ? "select is-danger" : "select"

  return (
    <div className="control">
      <div className={selectClassName}>
        <select value={value} onChange={handleChange}>
          {numOfPlayer.map((v, i) => <option key={i}>{i}</option>)}
        </select>
      </div>
    </div>
  )
}

export default InputTable;
