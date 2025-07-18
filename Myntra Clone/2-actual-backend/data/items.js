const fs = require('node:fs/promises');

async function getStoredItems() {
  const rawFileContent = await fs.readFile('items.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ?? [];
  return storedItems;
}

function storeItems(items) {
  return fs.writeFile('items.json', JSON.stringify({ items: items || [] }));
}

// If you want to export both getStoredItems and storeItems, use either of the following:
// ✅ Option 1: exports style

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;

// ✅ Option 2: module.exports with an object
// module.exports = {
//   getStoredItems,
//   storeItems
// };

