var receiveButton = document.querySelector("#getMessage");
var meditateImg = document.querySelector(".meditation-img");
var message = document.querySelector(".message");
var selection = document.forms.selection;
var radios = selection.elements.selection;

receiveButton.addEventListener("click", showMessage);

function showMessage() {
  hideImage();
  var selected = radios.value;
  if(selected === "mantra"){
    //put a mantra statement here
    message.innerText = "Im a mantra!";
  } else if(selected === "affirmation"){
    //put an affirmation here
    message.innerText = "Im an affirmation"
  }
}

function hideImage(){
  meditateImg.classList.add("hidden");
  message.classList.remove("hidden");
}

function getRandomIndex(array){
  return Math.floor(Math.random() * array.length);
}
