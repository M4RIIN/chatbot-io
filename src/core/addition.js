import Message from '../model/message';

export default function addition(message, name) {
  const splittedMessage = message.message.split('+');
  if (splittedMessage.length === 2) {
    const splittedMessagePart2 = splittedMessage[1].split('=');
    if (splittedMessagePart2.length === 2) {
      splittedMessage.push(splittedMessagePart2[1]);
      if (!Number.isNaN(splittedMessage[0]) && !Number.isNaN(splittedMessagePart2[0]) && splittedMessage[2] === '?') {
        const result = Number(splittedMessage[0]) + Number(splittedMessagePart2[0]);
        return new Message(name, `${splittedMessage[0]}+${splittedMessagePart2[0]}=${result}`, new Date());
      }
    }
  }
  return null;
}

export function helper() {
  return ['< nombre > + < nombre >=? : Faites moi faire une addition. Ex : 4+5=?'];
}
