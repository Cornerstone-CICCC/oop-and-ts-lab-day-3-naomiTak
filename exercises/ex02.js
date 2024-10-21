// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require('../lib/Stack');

function removeBetween(a, b) {
  // your code here
  const first = fruits.items.indexOf(a)
  const second = fruits.items.indexOf(b)

  const result = fruits.items.map((value, index) => {
    if(first < index && index < second){
      fruits.pop()
    }
  })
  return result
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween("Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry