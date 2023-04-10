export default interface ILeaderboard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  homeTeamId?: number,
  goalsBalance: number,
  efficiency: string

  id?:number
}
