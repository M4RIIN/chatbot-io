import Message from './message';

export default class Bot {
  #name;

  #comportement;

  #helper;

  constructor(name, comportement, helper) {
    this.#name = name;
    this.#comportement = comportement;
    this.#helper = helper;
  }

  get name() {
    return this.#name;
  }

  answerToAMessage(message) {
    if (message.message.toLowerCase() === 'bonjour') {
      return new Message(this.#name, 'Salut Salut !');
    }
    if (message.message === 'help') {
      let helperResponse = 'bonjour';
      if (this.#helper) {
        helperResponse += this.#helper();
      }
      return new Message(this.#name, helperResponse);
    }
    if (this.#comportement) {
      return this.#comportement(message, this.#name);
    }
    return null;
  }
}
