// src/data/crisisEvents.js
export const crisisEvents = [
  {
    id: 'server-breach',
    description: "Hackers breach your database and leak user data.",
    options: [
      { text: "Deny everything. Blame a rogue plugin.", effects: { reputation: -3, bugs: 2 } },
      { text: "Own up. Launch security campaign.", effects: { reputation: 1, funding: -1 } }
    ]
  },
  {
    id: 'fake-users-exposed',
    description: "Media exposes that half your users are bots.",
    options: [
      { text: "Spin it as 'AI engagement innovation'.", effects: { hype: 2, reputation: -2 } },
      { text: "Purge the bots. Reset stats.", effects: { users: -5, reputation: 2 } }
    ]
  },
  {
    id: 'cofounder-scandal',
    description: "Your cofounder is caught in a crypto scam scandal.",
    options: [
      { text: "Buy them out silently.", effects: { funding: -2, reputation: 1 } },
      { text: "Defend them publicly.", effects: { hype: 1, reputation: -3 } }
    ]
  },
  {
    id: 'app-store-ban',
    description: "Apple threatens to delist your app over content violations.",
    options: [
      { text: "Comply quickly and beg.", effects: { bugs: 1, funding: -1, reputation: 1 } },
      { text: "Launch alt-store campaign.", effects: { hype: 2, reputation: -1 } }
    ]
  }
];
