function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const sum = quantity * pricePerDroid;
  if (customerCredits >= sum) {
    return `You ordered ${quantity} droids worth ${sum} credits!`;
  } else {
    return `Insufficient funds!`;
  }
}

console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(10, 5000, 8000));
