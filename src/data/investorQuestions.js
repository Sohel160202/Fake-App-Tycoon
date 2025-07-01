// src/data/investorQuestions.js
export const investorQuestions = [
  {
    id: 'revenue-model',
    question: "What’s your revenue model?",
    options: [
      { text: "We’ll monetize later. First, growth.", effects: { hype: 2, funding: -1 } },
      { text: "Ads, subscriptions, and data resale.", effects: { funding: 1, reputation: -1 } },
      { text: "Honestly? We haven’t thought that far.", effects: { reputation: -2 } }
    ]
  },
  {
    id: 'team-experience',
    question: "Tell us about your founding team’s experience.",
    options: [
      { text: "We’re college dropouts with a dream.", effects: { hype: 1, reputation: -1 } },
      { text: "We built 3 startups before — 2 failed gloriously.", effects: { reputation: 2, funding: 1 } },
      { text: "We met at a crypto Discord.", effects: { hype: 2, reputation: -2 } }
    ]
  },
  {
    id: 'user-retention',
    question: "How are you addressing user retention?",
    options: [
      { text: "Push notifications and dopamine loops.", effects: { users: 1, reputation: -1 } },
      { text: "We’re still acquiring users first.", effects: { hype: 1 } },
      { text: "Why retain when you can replace?", effects: { users: -1, funding: -1 } }
    ]
  },
  {
    id: 'scaling-plan',
    question: "How will you scale the platform?",
    options: [
      { text: "Hire fast, build faster.", effects: { bugs: 2, hype: 1 } },
      { text: "Serverless magic and devops jargon.", effects: { funding: 1, reputation: 1 } },
      { text: "Outsource to an intern.", effects: { bugs: 3, reputation: -2 } }
    ]
  },
  {
    id: 'exit-strategy',
    question: "What’s your exit strategy?",
    options: [
      { text: "Acquisition by a tech giant.", effects: { funding: 1 } },
      { text: "Go public in 2 years, maybe.", effects: { hype: 1, funding: 1 } },
      { text: "We never plan to exit. Eternal hustle.", effects: { reputation: -1 } }
    ]
  }
];
