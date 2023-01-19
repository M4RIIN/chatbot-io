export default class Message {
  #sender;

  #message;

  constructor(sender, message) {
    this.#message = message;
    this.#sender = sender;
  }

  get sender() {
    return this.#sender;
  }

  get message() {
    return this.#message;
  }
}
