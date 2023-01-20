export default class NewMessageComponent {
  #context;

  constructor(context) {
    this.#context = context;
  }

  createMessageBox(message) {
    if (message) {
      let align = 'start';
      let color = ';background-color: #DFDFEA;';
      if (message.sender === 'vous') {
        align = 'end';
        color = ';background-color: #EDF4FF;';
      }
      const container = this.#context.createElement('div');
      container.style.cssText = `min-height:50px;margin:10px;text-align:end;justify-content:${align};display:flex`;
      const containerUtil = this.#context.createElement('div');
      containerUtil.style.cssText = `min-width:150px;display:flex;flex-direction:column;justify-content:start;align-items:baseline;border:solid;border-radius:10px;;box-shadow: 2px 2px 2px grey${color}`;
      const dateAndSender = this.#context.createElement('p');
      const time = `${message.date.getHours()}:${message.date.getMinutes()}:${message.date.getSeconds()}`;
      const date = `${message.date.getDate()}/${message.date.getMonth() + 1}/${message.date.getFullYear()}`;
      dateAndSender.innerHTML = `${message.sender} - ${date} ${time}`;
      dateAndSender.style.cssText = 'font-size:15px';
      const contentMessage = this.#context.createElement('div');
      contentMessage.style.cssText = 'font-size:15px;display:flex;max-width:300px;min-height:30px';
      contentMessage.innerHTML = message.message;
      containerUtil.appendChild(dateAndSender);
      containerUtil.appendChild(contentMessage);
      container.appendChild(containerUtil);
      return container;
    } return null;
  }
}
