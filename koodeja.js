document.getElementById("nappi")

// Luodaan näppäin, jonka avulla listalta voidaan poistaa asioita
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var span = document.createElement("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Klikkaa "close" nappia poistaaksesi kohteen listalta
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Lisää "checked" symbolin kun klikkaa jonkun kohteen listalta suoritetuksi
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Lisää uuden kohteen listalle kun klikkaa "Lisää" nappia
function nappi() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Kirjoita jotain!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

document.querySelector("input").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    console.log("Enter key detected.")
  }
});

// Save data to localStorage
localStorage.setItem('key', JSON.stringify('value'));

// Get saved data from localStorage
localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : '';

// Remove saved data from localStorage
localStorage.removeItem('key');

// Remove all saved data from localStorage
localStorage.clear(); 


