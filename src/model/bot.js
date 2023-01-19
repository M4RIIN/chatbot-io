import Message from './message';

export default class Bot {
  #name;

  #comportement;

  constructor(name, comportement) {
    this.#name = name;
    this.#comportement = comportement;
  }

  get name() {
    return this.#name;
  }

  answerToAMessage(message) {
    if (message.message.toLowerCase() === 'bonjour') {
      return new Message(this.#name, 'Salut Salut !');
    }
    if (this.#comportement) {
      return this.#comportement(message, this.#name);
    }
    return null;
  }
}
