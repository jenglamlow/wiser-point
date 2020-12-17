import { getContesting } from './util'

const Score = ({ data }) => {
  return (
    <table className="table score-table">
      <thead>
        <tr>
          <th>Point Format</th>
          <th className="has-text-danger">Red Team</th>
          <th>vs</th>
          <th>White Team</th>
        </tr>
      </thead>
      <tbody>
        <WWSC data={data}></WWSC>
        <ThreePoint data={data}></ThreePoint>
        <AttackScore data={data}></AttackScore>
        <AttackDefense data={data}></AttackDefense>
      </tbody>
    </table>
  )
}

const WWSC = ({ data }) => {
  const { red, white, numberOfPlayer } = data

  const redContesting = getContesting(numberOfPlayer, data.red);
  const whiteContesting = getContesting(numberOfPlayer, data.white);

  const redScore = redContesting * 5 + red.yellow * 2 + red.red * 1
  const whiteScore = whiteContesting * 5 + white.yellow * 2 + white.red * 1

  const winner = getResult(redScore, whiteScore)

  return (
    <tr>
      <td>WWSC</td>
      <td className={winner === 'red' ? 'has-background-primary' : null}>{redScore}</td>
      <td>vs</td>
      <td className={winner === 'white' ? 'has-background-primary' : null}>{whiteScore}</td>
    </tr>
  )
}

const ThreePoint = ({ data }) => {
  const { red, white, numberOfPlayer } = data

  const redContesting = getContesting(numberOfPlayer, data.red);
  const whiteContesting = getContesting(numberOfPlayer, data.white);

  const redScore = redContesting * 3 + red.yellow * 2 + red.red * 1
  const whiteScore = whiteContesting * 3 + white.yellow * 2 + white.red * 1

  const winner = getResult(redScore, whiteScore)

  return (
    <tr>
      <td>3-Point Contesting Ball WWSC</td>
      <td className={winner === 'red' ? 'has-background-primary' : null}>{redScore}</td>
      <td>vs</td>
      <td className={winner === 'white' ? 'has-background-primary' : null}>{whiteScore}</td>
    </tr>
  )
}

const AttackScore = ({ data }) => {
  const { red, white, numberOfPlayer } = data

  const redContesting = getContesting(numberOfPlayer, data.red);
  const whiteContesting = getContesting(numberOfPlayer, data.white);

  const redScore = numberOfPlayer * 3 - (whiteContesting * 3 + white.yellow * 2 + white.red * 1)
  const whiteScore = numberOfPlayer * 3 - (redContesting * 3 + red.yellow * 2 + red.red * 1)

  const winner = getResult(redScore, whiteScore)

  return (
    <tr>
      <td className="has-background-black has-text-white">Attack</td>
      <td className={winner === 'red' ? 'has-background-primary' : null}>{redScore}</td>
      <td>vs</td>
      <td className={winner === 'white' ? 'has-background-primary' : null}>{whiteScore}</td>
    </tr>
  )
}

const AttackDefense = ({ data }) => {
  const { red, white, numberOfPlayer } = data

  const redContesting = getContesting(numberOfPlayer, data.red);
  const whiteContesting = getContesting(numberOfPlayer, data.white);

  const redScore = numberOfPlayer * 3 - (whiteContesting * 3 + white.yellow * 2 + white.red * 1) + (redContesting * 3 + red.yellow * 2 + red.red * 1)
  const whiteScore = numberOfPlayer * 3 - (redContesting * 3 + red.yellow * 2 + red.red * 1) + (whiteContesting * 3 + white.yellow * 2 + white.red * 1)

  const winner = getResult(redScore, whiteScore)

  return (
    <tr>
      <td>Attack Defense</td>
      <td className={winner === 'red' ? 'has-background-primary' : null}>{redScore}</td>
      <td>vs</td>
      <td className={winner === 'white' ? 'has-background-primary' : null}>{whiteScore}</td>
    </tr>
  )
}

const getResult = (red, white) => {
  if (red > white) return 'red'
  else if (white > red) return 'white'
  else return 'draw'
}

export default Score;
