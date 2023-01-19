export default class Chat {
  #observers = [];

  #messages = [];

  subscribe(obs, callBack) {
    this.#observers.push({ o: obs, callBack });
  }

  addMessage(message) {
    this.#messages.push(message);
    this.#observers.forEach((obs) => {
      obs.callBack(message);
    });
  }
}
