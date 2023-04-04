const personPrototype = {
  firstName: 'Luiz',
  lastName: 'miranda',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Joana';
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
