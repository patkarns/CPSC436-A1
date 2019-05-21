
let messages = {list: [
  {message: 'dadumdadumda!', author: 'pre-loaded'},
  {message: 'o no!', author: 'pre-loaded'},
  {message: 'duh-o-nuts', author: 'pre-loaded'},
  {message: 'pineapples are tasty', author: 'pre-loaded'},
  {message: 'snails sails', author: 'pre-loaded'},
  {message: 'bannanas make banana bread', author: 'pre-loaded'},
  {message: 'vanilla icecream is better than chocolate (in most cases)', author: 'pre-loaded'},
  {message: 'sweaters makes people sweaty', author: 'pre-loaded'}

]};

// console.log(JSON.stringify(messages.list));

function confirmationSubmit(event) {
  confirmation.textContent = `Message Submitted! Unix timestamp: ${event.timeStamp}`;
  event.preventDefault();
}

function logResponses(event) {
  let val = document.getElementById('input').value;
  let aut = document.getElementById('author').value;
  messages.list.push({message: val, author: aut});

  let result = '';
  for (let response of messages.list) {
    result += response.message + "\n" + "                   By: " + response.author + "\n" + "\n";
  }
  log.textContent = result;
}

function resetMessages(event) {
  messages.list = [];
  log.textContent = "";
}

window.onload=function(){
  const form = document.getElementById('form');
  const confirmation = document.getElementById('confirmation');

  form.addEventListener('submit', confirmationSubmit);
  form.addEventListener('submit', logResponses);
  form.addEventListener('reset', resetMessages);
}


/*
window.onload=function(){
  const form = document.getElementById('form');
  // const confirmation = document.getElementById('confirmation');

  form.addEventListener('reset', resetMessages);
}
*/
