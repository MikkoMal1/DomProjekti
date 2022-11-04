document.getElementById("nappi")
hae();

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

// Lisää "suoritettu" symbolin kun klikkaa jonkun kohteen listalta suoritetuksi
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Lisää uuden kohteen listalle kun klikkaa "Lisää" nappia
function uusinappi() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("syote").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  tallenna(inputValue);
  if (inputValue === '') {
  document.getElementById('syote').style.borderColor = "red"; 
  alert("Kirjoita jotain!");
  } else {
    document.getElementById("tasklist").appendChild(li);
  }
  document.getElementById("syote").value = "";

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
    tallenna();
  }
}

function tallenna(value) {
  var aa = JSON.parse(localStorage.getItem('tehtävät'));

      if(aa == null){
        aa = [];
      }
    
  taskObj = {
      "task": value
    }

    aa.push(taskObj);
    localStorage.setItem('tehtävät', JSON.stringify(aa));
}

function hae() {
  var lista = JSON.parse(localStorage.getItem('tehtävät'));

  if(lista != null){
  let kpl = lista.length;

  for (i = 0; i < kpl; i++){
    var randomUl = document.getElementById("tasklist").innerHTML;
    lista = "<LI>"+lista[i]+"</LI>";
    }

}

}