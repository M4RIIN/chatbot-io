/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
import './index.scss';
import DataStore from './data/dataStore';
import ChatBotComponent from './view/chatbot-component';

const bots = DataStore.INSTANCE.contacts;
const currentChat = DataStore.INSTANCE.chat;

function receiveMessage(message) {
  console.log(`new message : ${message}`);
}
currentChat.subscribe(this, receiveMessage);

function sendMessage() {
  const p = document.createElement('p');
  p.innerHTML = 'wesh';
  document.getElementById('chat').append(p);
  currentChat.addMessage('wesh');
}

const sendBtn = document.getElementById('sendBtn');
sendBtn.addEventListener('click', sendMessage);
const chatBotComponent = new ChatBotComponent(document);
const table = chatBotComponent.createBotTable(bots);
document.getElementById('chatbot-view').append(table);

// DataStore.INSTANCE.contacts.forEach((element) => {
//   element.addSubject(chat, receiveMessage);
// });
