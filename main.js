var receiveButton = document.querySelector("#getMessage");
var meditateImg = document.querySelector(".meditation-img");
var messageBox = document.querySelector(".message");
var message = document.querySelector(".message-font");
var heart = document.querySelector(".favButton");
var viewFavoriteButton = document.querySelector("#seeFavorites");
var backToMainButton = document.querySelector("#seeMain");
var mainPage = document.querySelector(".main-page");
var favPage = document.querySelector(".favorites-page");
var showFavoriteMessage = document.querySelector(".favorite-messages");
var selection = document.forms.selection;
var radios = selection.elements.selection;

var favoritedMessages = [];

receiveButton.addEventListener("click", showMessage);
heart.addEventListener("click", favoriteMessage);
viewFavoriteButton.addEventListener("click", viewFavoritePage);
backToMainButton.addEventListener("click", switchPages);
document.addEventListener("click", function(event){
  checkIfHeart(event);
})

function checkIfHeart(event){
  if(event.target && event.target.classList.contains("favPage")){
    removeFavorite(event.target.parentElement.innerText);
    addContent();
  }
}


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
  checkForFavorite();
}

function checkForFavorite() {
  if(favoritedMessages.includes(message.innerText)){
    heart.src = "./assets/pink-heart.jpg"
  }else{
    heart.src = "./assets/clear-heart.png";
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
  var checkFavorited = checkIfFavorited();
  if(checkFavorited){
    heart.src = "./assets/clear-heart.png";
    removeFavorite(message.innerText);
  }else{
    heart.src = "./assets/pink-heart.jpg"
    favoritedMessages.push(message.innerText);
  }
}

function removeFavorite(removedMessage) {
  var index = favoritedMessages.indexOf(removedMessage);
  if(index > -1){
    favoritedMessages.splice(index, 1);
  }
}

function checkIfFavorited() {
  if(heart.src === "file:///Users/ryanmiller/turing/self-care-center/assets/pink-heart.jpg"){
    return true;
  }else{
    return false;
  }
}

function switchPages() {
  favPage.classList.toggle("hidden");
  mainPage.classList.toggle("hidden");
  meditateImg.classList.remove("hidden");
  messageBox.classList.add("hidden");
}

function addContent() {
  var message = null;
  showFavoriteMessage.innerHTML = "";
  for(var i = 0; i < favoritedMessages.length; i++){
    message = `<p class="message-font">${favoritedMessages[i]}<img class="favButton favPage" src="./assets/pink-heart.jpg"></p> `;
    showFavoriteMessage.innerHTML += message;
  }
}
function viewFavoritePage() {
  switchPages();
  addContent();
}
