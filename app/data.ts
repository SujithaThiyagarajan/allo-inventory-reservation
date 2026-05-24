let stock = 5;

export function getStock() {
  return stock;
}

export function reserveOne() {
  if (stock < 1) return false;
  stock -= 1;
  return true;
}
