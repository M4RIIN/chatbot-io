export default class Bot {
  #name;

  #observers = [];

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  subscribe(obs, callBack) {
    this.#observers.push({ o: obs, callBack });
  }

  sayHello() {
    this.#observers.forEach((obs) => {
      obs.callBack(`Bonjour je suis ${this.#name}`);
    });
  }
}
