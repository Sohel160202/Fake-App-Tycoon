// src/data/hypeEvents.js
export const hypeEvents = [
  {
    id: 'celebrity-shout',
    scenario: "A washed-up celebrity offers to tweet about your app for $50K.",
    options: [
      {
        text: "Do it. Fame is fame.",
        effects: { hype: 3, funding: -2, reputation: -1 }
      },
      {
        text: "Politely decline and invest in community building.",
        effects: { reputation: 2, hype: 1 }
      }
    ]
  },
  {
    id: 'bug-viral',
    scenario: "A bug makes your app crash into a rainbow screen. Users love it and think it’s intentional.",
    options: [
      { text: "Call it the 'Rainbow Zen Mode'.", effects: { hype: 2, reputation: 1 } },
      { text: "Fix it and apologize publicly.", effects: { bugs: -2, reputation: 2 } }
    ]
  },
  {
    id: 'trend-chase',
    scenario: "#SleepAppChallenge is trending. Your app doesn't do that, but you could fake a tie-in.",
    options: [
      { text: "Fake a collab with influencers.", effects: { hype: 3, reputation: -1 } },
      { text: "Ignore trends. Focus on product.", effects: { reputation: 2 } }
    ]
  }
];
