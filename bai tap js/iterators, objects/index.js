//HW 1
let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
  };
  console.log(person.name);
  console.log(person.occupation);
  console.log(person.hobbies);

  //HW 2
  let obj = {
    b: 2,
    a: 1,
    c: 3,

  };
let properties = Object.keys(obj);
let a = properties[0].toUpperCase();
let b = properties[1].toUpperCase();
let c = properties[2].toUpperCase();

let result = [a,b,c];
console.log(result);

//HW 3
let giatri = {
  foo: { a: "hello", b: "world" },  
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
  