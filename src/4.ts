interface IKey {
  getSignature: () => number;
}

class Key implements IKey {
  constructor(private signature: number) {
    this.signature = signature;
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: IKey;
  constructor(keyObj: IKey) {
    this.key = keyObj;
  }
  getKey(): IKey {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  key: IKey;
  tenants: Array<Person> = [];
  constructor(keyObj: IKey) {
    this.key = keyObj;
  }
  comeIn(person: Person): void {
    if (this.door === true) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(keyObj: IKey): void;
}

class MyHouse extends House {
  constructor(keyObj: IKey) {
    super(keyObj);
  }
  openDoor(keyObj: IKey): void {
    if (this.key.getSignature() === key.getSignature()) {
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
