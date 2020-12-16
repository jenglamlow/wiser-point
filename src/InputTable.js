
const InputTable = ({ data, onChange }) => {
  const handleChange = (evt) => {
    const field = evt?.target?.name.split('-')
    let newData = { ...data }
    newData[field[0]][field[1]] = evt.target.value
    onChange(newData)
  }
  return (
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
          <td><input name="red-contesting" className="input" type="number" value={data.red.contesting} min="0" max="7" onChange={handleChange}></input></td>
          <td><input name="white-contesting" className="input" type="number" value={data.white.contesting} min="0" max="7" onChange={handleChange}></input></td>
        </tr>
        <tr>
          <td className="has-background-warning">Yellow Flag</td>
          <td><input name="red-yellow" className="input" type="number" value={data.red.yellow} min="0" max="7" onChange={handleChange}></input></td>
          <td><input name="white-yellow" className="input" type="number" value={data.white.yellow} min="0" max="7" onChange={handleChange}></input></td>
        </tr>
        <tr>
          <td className="has-background-danger">Red Flag</td>
          <td><input name="red-red" className="input" type="number" value={data.red.red} min="0" max="7" onChange={handleChange}></input></td>
          <td><input name="white-red" className="input" type="number" value={data.white.red} min="0" max="7" onChange={handleChange}></input></td>
        </tr>
      </tbody>
    </table>
  )
}

export default InputTable;
