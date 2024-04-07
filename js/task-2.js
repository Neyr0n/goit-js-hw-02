function getShippingMessage(country, price, delivery) {
  return `Shipping to ${country} will cost ${price + delivery} credits`;
}

console.log(getShippingMessage('Australia', 120, 50));
console.log(getShippingMessage('Germany', 80, 20));
console.log(getShippingMessage('Sweden', 100, 20));
