let ninjas : string[] = [];
ninjas.push('kotomi');

let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string|number;
uid = '123';
uid = 123;

//objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };


let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
}

ninjaTwo = { name: 'mario', age: 20, beltColour: 'black' }