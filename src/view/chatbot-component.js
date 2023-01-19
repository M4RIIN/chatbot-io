export default class ChatBotComponent {
  #context;

  constructor(context) {
    this.#context = context;
  }

  createBotTable(bots) {
    const container = this.#context.createElement('div');
    bots.forEach((bot) => {
      container.appendChild(this.#createContainer(bot));
    });
    return container;
  }

  #createContainer(bot) {
    const container = this.#context.createElement('div');
    container.style.cssText = 'width:100%;height:50px;border:solid;border-radius:10px;margin-top:5px';
    const botName = this.#context.createElement('p');
    botName.innerHTML = bot.name;
    container.appendChild(botName);
    return container;
  }
}
