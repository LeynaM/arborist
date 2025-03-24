export const inventory = Object.freeze([
  {
    name: "Tree planting multiplier",
    cost: 1,
    effect: (prevMultiplier) => prevMultiplier + 1,
  },
  {
    name: "Double tree planting",
    cost: 10,
    effect: (prevMultiplier) => prevMultiplier * 2,
  },
  {
    name: "Quad tree planting",
    cost: 100,
    effect: (prevMultiplier) => prevMultiplier * 4,
  },
]);
