export const getPSGScore = data => data.score[0];

export const getBayernScore = data => data.score[1];

export const getFirstTeam = data => data.first.name;

export const getSecondTeam = data => data.second.name;

export const getPSGPlayers = data => data.first.players;

export const getBayernPlayers = data => data.second.players;
