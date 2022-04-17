// index 
function myFunction() {
  var x = document.getElementById("test");
  if (x.innerHTML === "Navighează meniul din partea dreaptă sus!") {
    x.innerHTML = "Produse tradiționale după rețete bine păstrate!";
  } 
  else {
    x.innerHTML = "Navighează meniul din partea dreaptă sus!";
  }
}

// despre
imagini = new Array("imagini/ferma1.jpg","imagini/ferma2.jpg","imagini/ferma3.jpg", "imagini/ferma4.jpg", "imagini/ferma5.jpeg");
nr=0;

function goback() {
   if (document.images && nr > 0) {
    nr--;
    document.imgs.src=imagini[nr];
   }
   	else if(document.images && nr == 0) {
		document.imgs.src=imagini[4];
		nr=4;
		nr--;
		}
  }
function gonext() {
   if (document.images && nr < (imagini.length-1)) {
       nr++;   
       document.imgs.src=imagini[nr];
     }
	else if(document.images && nr == 4) {
		document.imgs.src=imagini[0];
		nr=0;
		nr++;
		}
   }  
   
   
var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// achizitie 
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}
function incrementValue1()
{
    var value = parseInt(document.getElementById('number1').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number1').value = value;
}
function decrementValue1()
{
    var value = parseInt(document.getElementById('number1').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number1').value = value;
}
function incrementValue2()
{
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number2').value = value;
}
function decrementValue2()
{
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number2').value = value;
}
function incrementValue3()
{
    var value = parseInt(document.getElementById('number3').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number3').value = value;
}
function decrementValue3()
{
    var value = parseInt(document.getElementById('number3').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number3').value = value;
}
function incrementValue4()
{
    var value = parseInt(document.getElementById('number4').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number4').value = value;
}
function decrementValue4()
{
    var value = parseInt(document.getElementById('number4').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number4').value = value;
}