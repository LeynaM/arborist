export const inventory = Object.freeze([
  {
    name: "Tree planting multiplier",
    cost: 100,
    effect: (prevMultiplier) => prevMultiplier + 1,
    description: "Adds one to your tree planting multiplier.",
  },
  {
    name: "Double tree planting",
    cost: 1000,
    effect: (prevMultiplier) => prevMultiplier * 2,
    description: "Adds two to your tree planting multiplier.",
  },
]);
