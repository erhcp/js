var variable1 = "Number 1";
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

document.addEventListener("DOMContentLoaded",function(){
  console.log("Strona zostala w pelni zaladowana!");
  console.log(document.getElementById("iCanMakeDisapear").innerHTML);
  var zmiennaQ = document.getElementsByClassName("wazne");
  document.querySelectorAll("div.wazne").innerHTML="Zmieniono zawartosc!";
  var p = document.querySelector('#paragraf');
  console.log(p.parentNode) //wskazuje na rodzica czyli na body - jeżeli dany paragraf jest w body
  console.log(p.childNodes[2]) //wskazuje na drugie dziecko noda czyli <strong>
  console.log(p.childNodes[1]) //wskazuje na drugie dziecko noda czyli <strong>
  console.log(p.childNodes[1].firstChild) //wskazuje tekst "bardzo"
  console.log(p.lastChild) //wskazuje tekst "tekst"
});
