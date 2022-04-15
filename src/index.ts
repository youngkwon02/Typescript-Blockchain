class Human {
  name: string;
  age: number;
  gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender
  }
}

const youngkwon = new Human("Youngkwon", 26, "Male")

const sayHi = (person: Human) => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(youngkwon));

export {}