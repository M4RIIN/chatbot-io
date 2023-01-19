/* eslint-disable no-console */
export default class Chat {
  #observers;

  #messages;

  #updateView;

  constructor() {
    console.log('constuct chat');
    this.#messages = [];
    this.#observers = [];
  }

  subscribe(obs) {
    this.#observers.push(obs);
  }

  addMessage(message) {
    this.#messages.push(message);
    console.log('messages', this.#messages);
    console.log('observers : ', this.#observers);
    this.#observers.forEach((obs) => {
      const response = obs.answerToAMessage(message);
      this.#updateView(response);
    });
  }

  setUpdateView(callBack) {
    this.#updateView = callBack;
  }
}
