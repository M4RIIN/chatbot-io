import brasserie, { helperBrasseries } from '../core/brasserie';
import cocktails, { helperCocktails } from '../core/cocktails';
import nasa, { helperNasa } from '../core/nasa';
import Bot from '../model/bot';
import Chat from '../model/chat';
import Message from '../model/message';
import NewMessageComponent from '../view/new-message-component';

export default class DataStore {
  static #instance = null;

  #contacts;

  #chat;

  #receiveMessage(message) {
    if (message) {
      const newMessageBox = new NewMessageComponent(document);
      const messageBox = newMessageBox.createMessageBox(message);
      document.getElementById('chat').append(messageBox);
      document.getElementById('chat').scrollTo(0, document.getElementById('chat').scrollHeight);
    }
  }

  constructor() {
    const historique = JSON.parse(localStorage.getItem('messages'));
    this.#chat = new Chat();
    if (historique) {
      historique.forEach((elt) => {
        if (elt) {
          let msgString = elt;
          try {
            msgString = JSON.parse(elt);
          } catch (error) {
            msgString = elt;
          }
          const cleanMsg = msgString.message.replaceAll('__^^', '"');
          const msg = new Message(msgString.sender, cleanMsg, new Date(msgString.date));
          this.#chat.addMessage(msg);
          this.#receiveMessage(msg);
        }
      });
    }
    this.#contacts = [
      new Bot('WALL-E', cocktails, helperCocktails),
      new Bot('JARVIS', brasserie, helperBrasseries),
      new Bot('R2D2', nasa, helperNasa)
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
