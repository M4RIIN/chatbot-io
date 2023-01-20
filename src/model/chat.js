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

  get messages() {
    return this.#messages;
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
      if (response) {
        this.#messages.push(response);
      }
      const jsonToSave = JSON.stringify(this.#messages);
      console.log(jsonToSave);
      localStorage.clear();
      localStorage.setItem('messages', jsonToSave);
      this.#updateView(response);
    });
  }

  setUpdateView(callBack) {
    this.#updateView = callBack;
  }
}
