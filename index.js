import DataStore from './src/data/dataStore';
import ChatBotComponent from './src/view/chatbot-component';
import NewMessageComponent from './src/view/new-message-component';
import Message from './src/model/message';

class ViewUpdater {
  fn;

  constructor(fns) {
    this.fn = fns;
  }

  answerToAMessage(message) {
    this.fn(message);
  }
}

const bots = DataStore.INSTANCE.contacts;
const currentChat = DataStore.INSTANCE.chat;

function receiveMessage(message) {
  if (message) {
    const newMessageBox = new NewMessageComponent(document);
    const messageBox = newMessageBox.createMessageBox(message);
    document.getElementById('chat').append(messageBox);
    document.getElementById('chat').scrollTo(0, document.getElementById('chat').scrollHeight);
  }
}
currentChat.setUpdateView(receiveMessage);
const v = new ViewUpdater(receiveMessage);
currentChat.subscribe(v);

DataStore.INSTANCE.initSubs();

function sendMessage() {
  const message = document.getElementById('message').value;
  const newMessage = new Message('vous', message, new Date());
  currentChat.addMessage(newMessage);
  document.getElementById('message').value = '';
}

const sendBtn = document.getElementById('sendBtn');
sendBtn.addEventListener('click', sendMessage);
const chatBotComponent = new ChatBotComponent(document);
const table = chatBotComponent.createBotTable(bots);
document.getElementById('chatbot-view').append(table);

document.getElementById('message').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendBtn.click();
  }
});
