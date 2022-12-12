//  Javascript Questions
// ​
// Please answer the following questions using javascript.
// Solutions may be in place or out of place depending on your preference.
// ​
// ### 1. Given a list of points like
// ​
// ```JS
// [
//     [6, 6],
//     [1, 2],
//     [1, 3],
//     [3, 5],
//     [5, 3],
//     [0, 1],
//     [2, 5],
//     [4, 1],
//     [2, 5],
//     [2, 1]
//     [3, 1],
// ]
// ```
// ​
// a. Write a function to sort the points in asending order by x and descending order by y

// I COULD TRANSLATE THIS QUESTION SEVERAL WAYS, SO I DID A FEW DIFFERENT SORTS TO FIT DIFFERENT CASES.

console.log("PROBLEM 1 - A");

let list = [
  [6, 6],
  [1, 2],
  [1, 3],
  [3, 5],
  [5, 3],
  [0, 1],
  [2, 5],
  [4, 1],
  [2, 5],
  [2, 1],
  [3, 1],
];

// ASCENDING BY X FIRST, THEN DESCENDING BY Y 

const ascXdescY = (list) => {
  return list.sort((x, y) => (x[0] - y[0]) || y[1] - x[1]);

};
console.log(
  "Sort ascending by X, then descending by Y",
  ascXdescY([
    [6, 6],
    [1, 2],
    [1, 3],
    [3, 5],
    [5, 3],
    [0, 1],
    [2, 5],
    [4, 1],
    [2, 5],
    [2, 1],
    [3, 1],
  ])
);

// ASCENDING BY X + DESCENDING BY Y AT THE SAME TIME (individually sorted and re-combined in resulting orders)

const sortBoth = (list) => {
  let sortXY = [];
  let xOnly = list.map((x) => x[0]).sort();
  let yOnly = list
    .map((x) => x[1])
    .sort()
    .reverse();
  for (i = 0; i < xOnly.length; i++) {
    sortXY.push([xOnly[i], yOnly[i]]);
  }
  return sortXY;
};
console.log(
  "X and Y sorted separately, then recombined into pairs.): ",
  sortBoth([
    [6, 6],
    [1, 2],
    [1, 3],
    [3, 5],
    [5, 3],
    [0, 1],
    [2, 5],
    [4, 1],
    [2, 5],
    [2, 1],
    [3, 1],
  ])
);

// ### 2. Given a list of objects like
// ​
// ```JS
// [
//     { name: 'George', id: '2' },
//     { name: 'Jenni', id: '4' },
//     { name: 'Bob', id: '3' },
//     { name: 'Mike', id: '2' },
//     { name: 'Susan', id: '1' },
//     { name: 'Betty', id: '1' },
//     { name: 'John', id: '4' },
//     { name: 'John', id: '2' },
// ]
// ```
// ​
// a. Write a function to make the list unique by the id field
// (if there are multiple entries with the same id, return the first result)

console.log("PROBLEM 2 - a");

const uniquePeople = (peopleList) => {
  let unique = [];
  peopleList.forEach((item) => {
    let i = unique.findIndex((x) => x.id == item.id);
    if (i <= -1) {
      unique.push({ id: item.id, name: item.name });
    }
  });
};

console.log(
  "Unique by ID - If dupe IDs, first of each ID returned: ",
  uniquePeople([
    { name: "George", id: "2" },
    { name: "Jenni", id: "4" },
    { name: "Bob", id: "3" },
    { name: "Mike", id: "2" },
    { name: "Susan", id: "1" },
    { name: "Betty", id: "1" },
    { name: "John", id: "4" },
    { name: "John", id: "2" },
  ])
);

// b. Write a function to remove the first item of a given id and return it

console.log("PROBLEM 1 - b");

const firstItem = (givenID, peopleList) => {
  remFirst = peopleList.find((item) => item.id == givenID);
  remFirstList = peopleList.filter((i) => i !== remFirst);
  return remFirst, remFirstList;
};

firstItem(2, [
  { name: "George", id: "2" },
  { name: "Jenni", id: "4" },
  { name: "Bob", id: "3" },
  { name: "Mike", id: "2" },
  { name: "Susan", id: "1" },
  { name: "Betty", id: "1" },
  { name: "John", id: "4" },
  { name: "John", id: "2" },
]);

console.log("Remove and return first item of given ID: ", remFirst);
console.log("peopleList with firstItem removed: ", remFirstList);

// c. Write a function to remove the last item of a given id and return it

console.log("PROBLEM 1 - C");

const lastItem = (givenID, peopleList) => {
  newList = peopleList.filter((item) => item.id == givenID);
  newListLength = newList.length - 1;
  remLast = newList[newListLength];
  remLastList = peopleList.filter((i) => i !== remLast);
  return remLast, remLastList;
};

lastItem(2, [
  { name: "George", id: "2" },
  { name: "Jenni", id: "4" },
  { name: "Bob", id: "3" },
  { name: "Mike", id: "2" },
  { name: "Susan", id: "1" },
  { name: "Betty", id: "1" },
  { name: "John", id: "4" },
  { name: "John", id: "2" },
]);

console.log("Remove and return last item of given ID: ", remLast);
console.log("peopleList with lastItem removed: ", remLastList);

// ### 3. Given a string like
// ​
// ```JS
// "I see a sea down by the seashore.\nBut which sea do you see down by the seashore?"
// ```
// ​
// a. Write a function to find the index of the first instance of a substring (for example 'sea')
console.log("PROBLEM 3 - A");

const findSub = (string, substring) => {
  return string.toLowerCase().indexOf(substring.toLowerCase());
};

console.log(
  "Index of first instance of substring: ",
  findSub(
    "I see a Sea down by the seashore.\nBut which sea do you see down by the seashore?",
    "sea"
  )
);

// b. Write a function to find the index of the last instance of a substring (for example 'sea')

console.log("PROBLEM 3 - B");

const findLast = (string, substring) => {
  return string.toLowerCase().lastIndexOf(substring.toLocaleLowerCase());
};

console.log(
  "Index of last instance of substring in string: ",
  findLast(
    "I see a Sea down by the seashore.\nBut which sea do you see down by the seashore?",
    "sea"
  )
);

// ### 4. Given a list of numbers like
// ​
// ```JS
// [
//     1,
//     3,
//     1,
//     5,
//     9,
//     4,
//     3,
//     1,
//     4,
//     5,
//     6,
//     8,
// ]
// ```
// ​
// a. Make the list unique

console.log("PROBLEM 4 - A");

let uniqueNumList = (numList) => {
  return [...new Set(numList)];
};

console.log(
  "List made unigue: ",
  uniqueNumList([1, 3, 1, 5, 9, 4, 3, 1, 4, 5, 6, 8])
);
