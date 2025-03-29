export const effectTypes = {
  PASSIVE_PLANTING: "PASSIVE_PLANTING",
  PASSIVE_INCOME: "PASSIVE_INCOME",
  CLICK_MULTIPLIER: "CLICK_MULTIPLIER",
};

export const inventory = Object.freeze([
  {
    name: "Increase click multiplier by 1",
    description:
      "Adds one to your tree planting multiplier. Current multiplier: {multiplier}",
    type: effectTypes.CLICK_MULTIPLIER,
    initialCost: 10,
    booster: 1,
  },
  {
    name: "Increase passive income by 1/s",
    description: "Gains 1 coin per second.",
    initialCost: 10,
    type: effectTypes.PASSIVE_INCOME,
    booster: 1,
  },
  {
    name: "Increase passive tree planting by 1/s",
    description: "Plants one tree per second.",
    initialCost: 10,
    type: effectTypes.PASSIVE_PLANTING,
    booster: 1,
  },
]);
