export default class NewMessageComponent {
  #context;

  constructor(context) {
    this.#context = context;
  }

  createMessageBox(message) {
    if (message) {
      let align = 'start';
      if (message.sender === 'vous') {
        align = 'end';
      }
      const container = this.#context.createElement('div');
      container.style.cssText = `height:50px;margin:10px;text-align:end;justify-content:${align};display:flex`;
      const containerUtil = this.#context.createElement('div');
      containerUtil.style.cssText = 'min-width:150px;display:flex;flex-direction:column;justify-content:start;align-items:baseline;border:solid;border-radius:10px;';
      const dateAndSender = this.#context.createElement('p');
      dateAndSender.innerHTML = message.sender;
      dateAndSender.style.cssText = 'font-size:12px';
      const botName = this.#context.createElement('p');
      botName.style.cssText = 'font-size:10px';
      botName.innerHTML = message.message;
      containerUtil.appendChild(dateAndSender);
      containerUtil.appendChild(botName);
      container.appendChild(containerUtil);
      return container;
    } return null;
  }
}
