export default class Message {
  #sender;

  #message;

  #date;

  constructor(sender, message, date) {
    this.#message = message;
    this.#sender = sender;
    this.#date = date;
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

  toJSON() {
    return `{"sender":"${this.#sender}","date":"${this.#date}","message":"${this.#message.replaceAll('"', '__^^')}"}`;
  }
}
