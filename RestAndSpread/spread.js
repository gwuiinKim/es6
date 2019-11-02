const friends = [1, 2, 3, 4];

console.log(friends);
// result => [1,2,3,4]
console.log(...friends);
// result => 1 2 3 4

const family = ["a", "b", "c"];

console.log([...friends, ...family]);
// result => [1,2,3,4,"a","b","c"]

//it also works in object
const user = {
  name: "gwuiin",
  age: 24
};

const info = {
  greeting: "hi"
};

console.log({
  ...user,
  ...info
});

// resul =>{name: "gwuiin", age: 24, greeting: "hi"}
