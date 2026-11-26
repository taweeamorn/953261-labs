// 953261 Lab 2 — Kad Café data functions
// Rules for this file:
//   • Use array methods (map, filter, find, reduce, some, ...). No for / while loops.
//   • Never change (mutate) the arrays or objects you are given — return new ones.
//   • Each function must RETURN its result. Run `npm test` after every task.

// Task 1 — map
// Return an array of item names, in menu order.
// menuNames(menu) → ["Thai Iced Tea", "Americano", ...]
export function menuNames(menu) {
  // TODO
}

// Task 2 — filter
// Return only the items whose `available` is true.
export function availableItems(menu) {
  // TODO
}

// Task 3 — find
// Return the item with this id, or undefined if there is none.
// findItem(menu, "F01") → { id: "F01", name: "Khao Soi", ... }
export function findItem(menu, id) {
  // TODO
}

// Task 4 — filter + map
// Return the NAMES of the available items in one category.
// availableIn(menu, "dessert") → ["Mango Sticky Rice", "Coconut Ice Cream"]
export function availableIn(menu, category) {
  // TODO
}

// Task 5 — template literal + destructuring
// Return one line of text for the menu board:
//   "Thai Iced Tea — 45 THB"
//   "Butterfly Pea Soda — 50 THB (sold out)"     ← when available is false
// Hint: start with  const { name, price, available } = item;
export function menuLine(item) {
  // TODO
}

// Task 6 — spread
// Return a NEW item with the price reduced by `percent`, rounded to a whole baht.
// The original item must not change.
// withDiscount({ ..., price: 45 }, 10) → { ..., price: 41 }   (45 × 0.9 = 40.5 → 41)
export function withDiscount(item, percent) {
  // TODO
}

// Task 7 — reduce + find
// Return the total price of one order in baht.
// Each line costs  (price of that menu item) × qty.
// orderTotal(orders[0], menu) → 160   (2 × 45 + 1 × 70)
export function orderTotal(order, menu) {
  // TODO
}

// Task 8 — map + reduce   (this is quiz Q10 again!)
// Return the average order total, rounded to 2 decimal places.
// Return 0 when there are no orders.
export function averageOrder(orders, menu) {
  // TODO
}

// ───────────── Stretch (optional) ─────────────

// Task 9 — return the NAME of the item with the highest total quantity sold.
export function bestSeller(orders, menu) {
  // TODO
}

// Task 10 — group item names by category:
// { drink: ["Thai Iced Tea", ...], food: [...], dessert: [...] }
export function namesByCategory(menu) {
  // TODO
}
