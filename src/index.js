/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
import './index.scss';
import DataStore from './data/dataStore';
import ChatBotComponent from './view/chatbot-component';

const chatBotComponent = new ChatBotComponent(document);
const table = chatBotComponent.createBotTable(DataStore.INSTANCE.contacts);
document.getElementById('chatbot-view').append(table);
DataStore.INSTANCE.contacts.forEach((element) => {
  element.subscribe(this, (value) => {
    console.log('ok', value);
  });
});

function notify(message) {
  console.log(message);
}
