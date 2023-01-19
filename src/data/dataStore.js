import addition from '../core/addition';
import Bot from '../model/bot';
import Chat from '../model/chat';

export default class DataStore {
  static #instance = null;

  #contacts;

  #chat;

  constructor() {
    this.#chat = new Chat();
    this.#contacts = [
      new Bot('WALL-E', addition),
      new Bot('JARVIS'),
      new Bot('R2D2')
    ];
  }

  initSubs() {
    this.#contacts.forEach((c) => {
      this.#chat.subscribe(c, c.answerToAMessage);
    });
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

  get chat() {
    return this.#chat;
  }
}
