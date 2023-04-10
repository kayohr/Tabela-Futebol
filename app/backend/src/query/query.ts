const leaderBoardHome = `SELECT
t.team_name AS name,
SUM(p.points) AS totalPoints,
COUNT(*) AS totalGames,
SUM(CASE
  WHEN t.id = m.home_team_id 
  AND m.home_team_goals > m.away_team_goals 
  OR t.id = m.away_team_id 
  AND m.away_team_goals > m.home_team_goals THEN 1
  ELSE 0
END) AS totalVictories,
SUM(CASE
  WHEN m.home_team_goals = m.away_team_goals THEN 1
  ELSE 0
END) AS totalDraws,
SUM(CASE
  WHEN t.id = m.home_team_id 
  AND m.home_team_goals < m.away_team_goals 
  OR t.id = m.away_team_id 
  AND m.away_team_goals < m.home_team_goals THEN 1
  ELSE 0
END) AS totalLosses,
SUM(CASE
  WHEN t.id = m.home_team_id THEN m.home_team_goals
  ELSE m.away_team_goals
END) AS goalsFavor,
SUM(CASE
  WHEN t.id = m.home_team_id THEN m.away_team_goals
  ELSE m.home_team_goals
END) AS goalsOwn,
SUM(CASE
  WHEN t.id = m.home_team_id THEN m.home_team_goals
  ELSE m.away_team_goals
END) - SUM(CASE
  WHEN t.id = m.home_team_id THEN m.away_team_goals
  ELSE m.home_team_goals
END) AS goalsBalance,
ROUND(SUM(p.points) / (COUNT(*) * 3) * 100, 2) AS efficiency
FROM TRYBE_FUTEBOL_CLUBE.teams t
INNER JOIN TRYBE_FUTEBOL_CLUBE.matches m 
ON t.id 
IN (m.home_team_id, m.away_team_id)
INNER JOIN (
SELECT
  m.id,
  CASE
    WHEN m.home_team_goals > m.away_team_goals THEN 3
    WHEN m.home_team_goals < m.away_team_goals THEN 0
    ELSE 1
  END AS points
FROM TRYBE_FUTEBOL_CLUBE.matches m
WHERE m.in_progress = FALSE
) p ON m.id = p.id
GROUP BY name
ORDER BY totalPoints DESC, 
totalVictories DESC, 
goalsBalance DESC, 
goalsFavor DESC;`;

export default leaderBoardHome;
