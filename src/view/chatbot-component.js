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
    container.style.cssText = 'width:100%;height:50px;border:solid;border-radius:10px;margin-top:5px;display:flex;box-shadow: 10px 5px 5px grey;background-color:white';
    const divName = this.#context.createElement('div');
    divName.style.cssText = 'flex:1';
    const divPp = this.#context.createElement('div');
    divPp.style.cssText = `width:50px;background-image: url("https://api.dicebear.com/5.x/pixel-art/svg?seed=${bot.name}");border-radius:100%`;
    const botName = this.#context.createElement('p');
    botName.innerHTML = bot.name;
    divName.appendChild(botName);
    container.appendChild(divPp);
    container.appendChild(divName);
    return container;
  }
}
