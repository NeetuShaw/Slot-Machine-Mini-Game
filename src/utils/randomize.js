const randomize = (items) => {
  return Array(3)
    .fill(null)
    .map(() => items[Math.floor(Math.random() * items.length)]);
};

// src/utils/randomize.js
export const randomizeResults = () => {
  const items = ["Weapon", "Consumable", "Material"];
  const rarities = ["Common", "Rare", "Epic"];
  const results = [];

  for (let i = 0; i < 3; i++) {
    const item = items[Math.floor(Math.random() * items.length)];
    const rarity = rarities[Math.floor(Math.random() * rarities.length)];
    results.push(`${item} (${rarity})`);
  }

  return results;
};

export default randomize;
