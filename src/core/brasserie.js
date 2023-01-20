/* eslint-disable no-console */
import Message from '../model/message';

function createHTML(arrayResponse) {
  let htmlResponse = `<div style="width:100%;border-radius:10px;background-color:#053147;color:white;text-align: left;margin-right: 10px;margin-left: 10px;padding-right: 5px;margin-bottom: 10px">
    <p style="">Voici une liste de 5 brasseries que vous pourriez visiter :</p><ul>`;
  arrayResponse.forEach((bras) => {
    const { name } = bras;
    const place = `${bras.street} (${bras.country})`;
    htmlResponse += `<li><strong>${name}</strong> située au ${place}</li>`;
  });
  htmlResponse += '</ul></div>';
  return htmlResponse;
}

export default function brasserie(message, name) {
  if (message.message === 'brasseries') {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'https://api.openbrewerydb.org/breweries/random?size=5', false); // false for synchronous request
    xmlHttp.send(null);
    const myArr = JSON.parse(xmlHttp.responseText);
    console.log(myArr);
    return new Message(name, createHTML(myArr));
  }
  return null;
}

export function helperBrasseries() {
  return 'brasseries : je vous donnerai une liste de 5 brasseries que vous pourriez visiter';
}