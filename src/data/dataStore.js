import Bot from '../model/bot';

export default class DataStore {
  static #instance = null;

  #contacts;

  constructor() {
    this.#contacts = [
      new Bot('Henri'),
      new Bot('J4RVIS')
    ];
  }

  static get INSTANCE() {
    if (this.#instance == null) {
      this.#instance = new DataStore();
    }
    return this.#instance;
  }

  get contacts() {
    return this.#contacts;
  }
}
