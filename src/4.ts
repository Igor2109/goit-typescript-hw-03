interface IKey {
  getSignature: () => number;
}

class Key {
  constructor(private signature: number) {
    this.signature = signature;
  }
  getSignature() {
    return this.signature;
  }
}
interface IPerson {
  getKey: () => IKey;
}

class Person {
  private key: IKey;
  constructor(key: IKey) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

abstract class House {
  key: IKey;
  door: boolean;
  tenants: IPerson[];
  comeIn(person: IPerson) {
    if (this.door === true) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: IKey): void;
}

class MyHouse extends House {
  door = false;
  tenants = [];
  constructor(key: IKey) {
    super();
    this.key = key;
  }
  openDoor(key: IKey) {
    if (this.key === key) {
      this.door = true;
    }
  }
}

const key = new Key(Math.random());

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
