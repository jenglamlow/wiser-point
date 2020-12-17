import { getContesting } from "./util";

const InputTable = ({ data, onChange }) => {
  const { red, white, numberOfPlayer } = data;

  const redContesting = getContesting(numberOfPlayer, data.red);
  const whiteContesting = getContesting(numberOfPlayer, data.white);

  const handleChange = (name, value) => {
    const field = name.split('-')
    let newData = { ...data }
    newData[field[0]][field[1]] = value
    onChange(newData)
  }

  return (
    <div className="input-table-container">
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
            <td className="is-size-3">{redContesting}</td>
            <td className="is-size-3">{whiteContesting}</td>
          </tr>
          <tr>
            <td className="has-background-warning">Yellow Flag</td>
            <td><InputNumeric number={red.yellow} contesting={redContesting} onChange={(value) => handleChange("red-yellow", value)} /></td>
            <td><InputNumeric number={white.yellow} contesting={whiteContesting} onChange={(value) => handleChange("white-yellow", value)} /></td>
          </tr>
          <tr>
            <td className="has-background-danger">Red Flag</td>
            <td><InputNumeric number={red.red} contesting={redContesting} onChange={(value) => handleChange("red-red", value)} /></td>
            <td><InputNumeric number={white.red} contesting={whiteContesting} onChange={(value) => handleChange("white-red", value)} /></td>
          </tr>
          <tr>
            <td className="strike-out-label">Strike Out</td>
            <td><InputNumeric number={red.eliminated} contesting={redContesting} onChange={(value) => handleChange("red-eliminated", value)} /></td>
            <td><InputNumeric number={white.eliminated} contesting={whiteContesting} onChange={(value) => handleChange("white-eliminated", value)} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const InputNumeric = ({ number, contesting, onChange }) => {
  const increase = () => {
    handleChange(number + 1)
  }

  const decrease = () => {
    handleChange(number - 1)
  }

  const handleChange = (value) => {
    onChange(value)
  }

  const isIncreaseDisabled = () => {
    return contesting === 0
  }

  const isDecreaseDisabled = () => {
    return number === 0
  }

  return (
    <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
      <div className="is-size-3">{number}</div>
      <div className="is-flex is-flex-direction-column pl-2">
        <button className="button is-small" disabled={isIncreaseDisabled()} onClick={increase}>+</button>
        <button className="button is-small" disabled={isDecreaseDisabled()} onClick={decrease}>-</button>
      </div>
    </div>
  )
}

export default InputTable;
