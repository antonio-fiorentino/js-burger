var burgerBaseCosto = 50;
var discount = 0.2;
var coupons = ['HSFD453gfdhj6','gdh77357GDJ','JFO7778jhdl9','jgsdk779209HS'];
var prezzo = document.getElementById('prezzo');

var nomeBurger = document.getElementById('nome');
var containerIngredienti = document.getElementsByClassName('ingredienti')[0];
var checkboxList = containerIngredienti.getElementsByTagName('input');
var coupon = document.getElementsByClassName('coupon');

var counterValidIngredienti = 0;
var costo;

document.getElementById('button-submit').addEventListener("click", function(){
  console.log('Il nome del Burger è: ' + nomeBurger);
  costo = burgerBaseCosto;
  for (var i = 0; i < containerIngredienti.length; i++) {
  if (checkboxList[i].checked) {
    counterValidIngredienti++;
    costo += parseInt(checkboxList[i].value);
  }
  }
  if (nomeBurger.value.length === 0) {
    alert('Scegli un nome per il tuo Burger');
  }else if (counterValidIngredienti < 2) {
    alert('Selezionare minimo 2 ingredienti');
  }else {
    if (coupons.indexOf(coupon.value) !== -1)  {
      sconto = costo * discount;
    }
  }
  prezzo.innerText = '$'+ costo;
})
