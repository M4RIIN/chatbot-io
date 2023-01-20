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

  #createHelper(arrayMessages) {
    let helperResult = '<div style="width:100%;border-radius:10px;background-color:#053147;color:white;text-align: left;margin-right: 10px;margin-left: 10px;padding-right: 5px;margin-bottom: 10px"><ul>';
    arrayMessages.forEach((message) => {
      helperResult += `<li>${message}</li>`;
    });
    helperResult += '</ul></div>';
    return helperResult;
  }

  answerToAMessage(message) {
    if (message.message.toLowerCase() === 'bonjour') {
      return new Message(this.#name, 'Salut Salut !', new Date());
    }
    if (message.message === 'help') {
      const helperResponse = [];
      helperResponse.push('bonjour : Saluez tout le monde');
      if (this.#helper) {
        helperResponse.push(this.#helper());
      }
      return new Message(this.#name, this.#createHelper(helperResponse), new Date());
    }
    if (this.#comportement) {
      return this.#comportement(message, this.#name);
    }
    return null;
  }
}
