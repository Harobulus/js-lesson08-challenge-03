var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];
// Log out the length of the groceries variable
console.log(groceries.length);

// Create a variable called deleteDuplicates for a function expression with list as a parameter
var deleteDuplicates = function(list) { 
  var cleanList = [];
  for (var item of list) { 
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    };
  };
  return cleanList;
};

console.log(deleteDuplicates(groceries));

// Check the Length of the New Array
var newGroceries = deleteDuplicates(groceries);
console.log(newGroceries.length);

// Create a Numbered List of the Grocery Items
newGroceries.forEach(function (grocery, index) {
  console.log(`#${index + 1} ${grocery}`);
});

