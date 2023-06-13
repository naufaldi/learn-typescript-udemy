function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = ' Result is';
const result = add(number1, number2, printResult, resultPhrase);
console.log(result);

const person: { name: string; age: number; hobies: string[] } = {
  name: 'Naufaldi',
  age: 30,
  hobies: ['sport', ' cooking'],
};

let favorite: string[];
favorite = ['sports'];

console.log(person.name);

for (const hobby of person.hobies) {
  console.log(hobby.toUpperCase);
}
