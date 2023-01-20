export default class Message {
  #sender;

  #message;

  #date;

  constructor(sender, message) {
    this.#message = message;
    this.#sender = sender;
    this.#date = new Date();
  }

  get date() {
    return this.#date;
  }

  get sender() {
    return this.#sender;
  }

  get message() {
    return this.#message;
  }
}
