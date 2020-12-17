export const getContesting = (numOfPlayer, team) => {
  return numOfPlayer - team.yellow - team.red - team.eliminated
}