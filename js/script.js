var nomeBurger = document.getElementsByClassName('nome')[0];
var checkboxes = document.getElementsByClassName('ingredienti')[0].getElementsByTagName('input');


document.getElementById("button-submit").addEventListener("click", function() {
  var counterCheckedElements = 0;
  console.log('Il nome del panino è ' + nomeBurger.value)
  for(var i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked === true) {
      counterCheckedElements += 1;
      console.log(counterCheckedElements)
    }
  }
});
