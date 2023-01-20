export default class Chat {
  #observers;

  #messages;

  #updateView;

  constructor() {
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
    this.#observers.forEach((obs) => {
      const response = obs.answerToAMessage(message);
      if (response) {
        this.#messages.push(response);
      }
      const jsonToSave = JSON.stringify(this.#messages);
      localStorage.clear();
      localStorage.setItem('messages', jsonToSave);
      this.#updateView(response);
    });
  }

  setUpdateView(callBack) {
    this.#updateView = callBack;
  }
}
