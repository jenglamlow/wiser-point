

const InputTable = ({ data, onChange }) => {
  const { red, white, numberOfPlayer } = data;

  const redContesting = numberOfPlayer - red.yellow - red.red - red.eliminated;
  const whiteContesting = numberOfPlayer - white.yellow - white.red - white.eliminated;

  const redPlayerMismatch = red.eliminated + red.yellow + red.red > numberOfPlayer
  const whitePlayerMismatch = white.eliminated + white.yellow + white.red > numberOfPlayer
  const hasError = redPlayerMismatch | whitePlayerMismatch

  const handleChange = (name, value) => {
    const field = name.split('-')
    let newData = { ...data }
    newData[field[0]][field[1]] = value
    onChange(newData)
  }

  return (
    <div className="input-table-container">
      <div className="error-container has-text-danger">{hasError ? "Error: Mismatch Player Number detected" : ""}</div>
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
            <td>{redContesting}</td>
            <td>{whiteContesting}</td>
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
            <td><Select error={redPlayerMismatch} number={numberOfPlayer + 1} value={red.eliminated} onChange={(data) => handleChange("red-eliminated", data)}></Select></td>
            <td><Select error={whitePlayerMismatch} number={numberOfPlayer + 1} value={white.eliminated} onChange={(data) => handleChange("white-eliminated", data)}></Select></td>
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
