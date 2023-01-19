export default class Bot {
  #name;

  // #subject = [];

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  // addSubject(obs, callBack) {
  //   this.#observers.push({ o: obs, callBack });
  // }

  // sayHello() {
  //   this.#observers.forEach((obs) => {
  //     obs.callBack(`Bonjour je suis ${this.#name}`);
  //   });
  // }

  answerToAMessage() {
    // eslint-disable-next-line no-console
    console.log('ca prend la teté');
  }
}
