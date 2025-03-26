export const inventory = Object.freeze([
  {
    name: "Tree planting multiplier",
    cost: 100,
    effect: (prevMultiplier) => prevMultiplier + 1,
    description:
      "Adds one to your tree planting multiplier. Current multiplier: {multiplier}",
  },
  {
    name: "Autonomous tree planter",
    cost: 1000,
    effect: (prevMultiplier) => prevMultiplier + 10,
    description: "Plants one tree per second.",
  },
]);
