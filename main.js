var receiveButton = document.querySelector("#getMessage");
var meditateImg = document.querySelector(".meditation-img");
var messageBox = document.querySelector(".message");
var message = document.querySelector(".message-font");
var heart = document.querySelector(".favButton");
var selection = document.forms.selection;
var radios = selection.elements.selection;

var favoritedMessages = [];

receiveButton.addEventListener("click", showMessage);
heart.addEventListener("click", favoriteMessage);

function showMessage() {
  hideImage();
  var selected = radios.value;
  if(selected === "mantras"){
    var statement = selectMessage(mantras);
    message.innerText = statement;
  } else if(selected === "affirmations"){
    var statement = selectMessage(affirmations);
    message.innerText = statement;
  }
}

function hideImage() {
  meditateImg.classList.add("hidden");
  messageBox.classList.remove("hidden");
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function selectMessage(type){
  var selected = type[getRandomIndex(type)];
  return selected;
}

function favoriteMessage() {
  heart.src = "./assets/pink-heart.jpg"
  favoritedMessages.push(message.innerText);
  console.log(favoritedMessages);
}
