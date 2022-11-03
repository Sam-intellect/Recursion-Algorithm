const teamStructure = {
  name: 'Samuel',
  teams: [
    {
      name: 'Emmanuel',
      teams: [
        {
          name: 'Tadey',
          teams: [],
        },
      ],
    },
    {
      name: 'Bayo',
      teams: [],
    },
  ],
};

const getTeamsDetails = (t) => {
  if (t.teams.length === 0) return;

  t.teams.forEach((team) => {
    console.log(team);
    getTeamsDetails(team);
  });
};

getTeamsDetails(teamStructure);
