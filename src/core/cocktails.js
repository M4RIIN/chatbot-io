import Message from '../model/message';

function createHTML(responseJson) {
  const response = responseJson.drinks[0];
  let htmlResponse = `<div style="width:100%;border-radius:10px;background-color:#053147;color:white;text-align: left;margin-right: 10px;margin-left: 10px;padding-right: 5px;margin-bottom: 10px"><p style="">Voici les instructions pour réaliser un ${response.strDrink} :</p><ul>`;
  htmlResponse += `<li><strong>${response.strInstructions}</li>`;
  htmlResponse += `</ul><img style="width:100%" src=${response.strDrinkThumb}></img></div>`;
  return htmlResponse;
}

export default function cocktails(message, name) {
  if (message.message === 'cocktails') {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/random.php', false);
    xmlHttp.send(null);
    const myArr = JSON.parse(xmlHttp.responseText);
    return new Message(name, createHTML(myArr), new Date());
  }
  if (message.message === 'pref') {
    return new Message(name, 'J\'avou j\'ai un faible pour le Bloody Mary', new Date());
  }
  return null;
}

export function helperCocktails() {
  return ['cocktails : je vous donnerai un cocktail aléatoire à réaliser', 'pref : je vous donnerai mon cocktail favoris !'];
}
