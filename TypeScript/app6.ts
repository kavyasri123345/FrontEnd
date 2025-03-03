function logClass(target: Function) {
    console.log(`Class ${target.name} is created!`);
  }
  
  @logClass
  class Person {
    constructor(public name: string) {}
  }
  
  const person = new Person("Alice");
  
  