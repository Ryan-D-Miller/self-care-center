var receiveButton = document.querySelector("#getMessage");
var meditateImg = document.querySelector(".meditation-img");
var messageBox = document.querySelector(".message");
var message = document.querySelector(".message-font");
var selection = document.forms.selection;
var radios = selection.elements.selection;

receiveButton.addEventListener("click", showMessage);

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

function hideImage(){
  meditateImg.classList.add("hidden");
  messageBox.classList.remove("hidden");
}

function getRandomIndex(array){
  return Math.floor(Math.random() * array.length);
}

function selectMessage(type){
  var selected = type[getRandomIndex(type)];
  console.log(selected);
  return selected;
}
