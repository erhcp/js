/*var variable1 = "Number 1";
var variable2 = "Numer 2";
var variable3 = 3;
var variable4 = 2;

console.log(variable3+variable4*1246);

var variable5 = document.getElementById("formularz").poleTekstowe.value;
console.log(variable2.length);


var array1 = [1,2,3];
var array2 = array1;
array2.push(4);
console.log(array1);
console.log(array2);


var variableX = "Zmienna typu znakowego ";
var variableY = 5;
var variableZ = "4";

console.log(variableX + variableY);
console.log(variableZ - variableY);
console.log(variableY - variableZ);
console.log(variableX - variableY);
console.log(variableX - variableZ);
var array3 = [1,2,3,4,5];

array3.forEach(function(element,index,array){
  console.log("element to:"+ element+ " index to:" + index + " array to:" + array);
});


function mojaFunkcja(){
  console.log("Wywolano funkcje mojaFunkcja()");
}

mojaFunkcja();

function calculator(var1, var2){
  console.log(var1+" + "+var2+" = "+(var1+var2));
}
calculator(5,10);
calculator(11,11);

function wypisz(){
  var result = "";
  for(i in arguments){
    console.log(arguments[i]);
  }
}
wypisz("fuck", "them", "all");
function wypisz2(){
  var array5 = [1,2,3];
  array5.forEach(function(value, label){
    console.log(value+" "+label);
  })
}
wypisz2();
var wypisz3 = function(){
  console.log("Wywolano funkcje wypisz3()");
}
wypisz4();
function wypisz4(){
  console.log("Wywolano funkcje wypisz4()");
}

(function(){
  console.log("Funkcja, która sama się wywolala!");
})();

var arrayek = new Array("Numer 1", "Numer 6", "Numer 5", "Numer 4");
console.log(arrayek);
arrayek.reverse();
console.log(arrayek);
console.log(arrayek.join(" + "));
console.log(arrayek.sort());

function markRow(id) {
    var tab = document.getElementById(id);
    var td = tab.getElementsByTagName('td');

    for (var x=0; x<td.length; x++) {
        td[x].addEventListener('mouseover', function() {
            this.parentNode.classList.add('mark'); //ustawiamy klase hover dla TR - dzięki niej zmienimy wygląd dla td
        });
        td[x].addEventListener('mouseout', function() {
            this.parentNode.classList.remove('mark');
        });
    }
    console.log("wywolano funkcje markRow!");
}

document.addEventListener("DOMContentLoaded",function(){
  console.log("Strona zostala w pelni zaladowana!");
  console.log(document.getElementById("iCanMakeDisapear").innerHTML);
  var zmiennaQ = document.getElementsByClassName("wazne");
  var cosik = document.getElementsByClassName('wazne');
  var cosik1 = document.getElementById('wazne');
  console.log(cosik1);
  var p = document.querySelector('#paragraf');
  console.log(p.parentNode); //wskazuje na rodzica czyli na body - jeżeli dany paragraf jest w body
  console.log(p.childNodes[2]); //wskazuje na drugie dziecko noda czyli <strong>
  console.log(p.childNodes[1]); //wskazuje na drugie dziecko noda czyli <strong>
  console.log(p.childNodes[1].firstChild); //wskazuje tekst "bardzo"
  console.log(p.lastChild); //wskazuje tekst "tekst"
  markRow('tabelka');
});

function dawaj(){
  var array  = [1,2,3,4,5,6,7,8,9,0];
  for (i in array){
    console.log(array[i]);
  }
  array.sort();
  for(i in array){
    console.log(array[i]);
  }
}
dawaj();
var a1=[11,12,13,14,15];
var a2= [16,17,18,19,20];
var a3 = a1.concat(a2);
console.log(a3);
var ar1 = [1,2,6,4,5];
ar1.splice(2,1,3);
console.log(ar1);
ar1.push(6,7,8,9);
console.log(ar1);
ar1.unshift(0);
console.log(ar1);
*/

var mojObject = {
  color: 'red',
  size: 'big',
  price: 'out of money'
}
console.log(mojObject.price);
delete mojObject.price;
console.log(mojObject.size);
console.log(mojObject.price);
console.log(mojObject.size);

document.addEventListener('DOMContentLoaded', function(){
  function mojAlert(){
    alert(this.textContent);
    if(this.textContent == "Wszystko CH!"){
      var pobraneDiv = document.getElementsByClassName('wazne');
      for(i=0; i<pobraneDiv.length; i++){
        pobraneDiv[i].removeEventListener('click', mojAlert);
      }
    }
  }
  var pobraneP = document.getElementsByClassName('wazne');
  for(i=0; i<pobraneP.length; i++){
    pobraneP[i].addEventListener('click', mojAlert);
  }
  document.getElementById('wazne2').onclick = function(){
    console.log(this.textContent);
    this.onclick = null;
  }

  $('#div1').click( function(){
    alert('div1!');
  });
  $('#div2').click( function(){
    alert('div2!');
  });
  $('#div3').click( function(){
    alert('div3!');
  });
  document.getElementById('divOver').onmousedown = function(){
    alert("You pressed button: " + event.button);
  };
  var obrazki = document.getElementsByTagName('img');
  var rybka = obrazki.rybcia;
  rybka.addEventListener('click', function(){
    alert('kliknieta została rybka');
  });
  console.log(obrazki);
  var newImage = new Image(100,100);
  newImage.src= 'kotel.jpg';

  var obrazek = document.getElementById('chupacabra');
  obrazek.addEventListener('mouseover', function(){
    this.src=newImage.src;
    //alert('zmiaaana!');
  })
  var obrazki2 = document.getElementsByClassName('obrazki');
  for(i=0; i<obrazki2.length; i++){
    obrazki2[i].addEventListener('mouseover', function(){
      this.src= newImage.src;
    });
    obrazki2[i].addEventListener('mouseout', function(){
      this.src= 'piesel.jpg';
    });



  }
  /*
  function oknoPrompt() {
      var name = prompt('Podaj swoje imię:', 'Kartofel');
      if (name != null) {
          alert('Witaj ' + name);
      } else {
          alert('Anulowałeś akcję');
      }
  }


  document.getElementById('prompt').addEventListener('click', function() {
      oknoPrompt();
  });*/

  $.ajax({
    type : 'POST',
    url : 'php/functions.php',
    data : {
      fname : 'pierwsza_funkcja',
      name : 'Johny',
      countr : 'Poland'
    },
    dataType : 'json',
    success : function(ret){
      alert('Pobrano następujące dane: '+ret);
    },

  });




});
