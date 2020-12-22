var minIngredienti = 2;
var burgerCost = 50;
var discount = 0.2;
var coupons = ['12GD54PEOR','HF4hydsiu8','ter7EPD5sa']


var nomeBurger = document.getElementById('nome');
console.log('Il nome del Burger è: ' + nomeBurger);

var containerIngredienti = document.getElementsByClassName('ingredienti')[0];
var checkList = containerIngredienti.getElementsByTagName('input');
var totale = document.getElementById('prezzo');
var coupon = document.getElementsByClassName('coupon');

var checkedIngredient = 0;
var cost;

document.getElementById('button-submit').addEventListener("click", function(){
  checkedIngredient = 0;
  cost = burgerCost;
  for(var i=0 ; i < checkList.length; i++)
  if (checkList[i].checked) {
    checkedIngredient++
  }
  
})
