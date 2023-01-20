/* eslint-disable no-console */
import Message from '../model/message';

function createHTML(arrayResponse) {
  const { url } = arrayResponse;
  const { title } = arrayResponse;
  console.log(url);
  return `<div style="display:flex;width:100%;flex-direction:column">
  <p style="font-weight:bolder">${title}</p>
  <img style="max-height:100px" src=${url}></img>
  </div>`;
}

export default function nasa(message, name) {
  if (message.message === 'nasa today') {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=xJvCK7z2sJwdt41xMve3iN6BVhyldhBS9ozUF2NF', false); // false for synchronous request
    xmlHttp.send(null);
    const myArr = JSON.parse(xmlHttp.responseText);
    return new Message(name, createHTML(myArr));
  }
  return null;
}

export function helperNasa() {
  return 'nasa today : obtenez la photo de l\'espace aujourd\'hui';
}
