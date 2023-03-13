function add() {
    var firstPrice = document.querySelector('#first').value;  
    var secondPrice = document.querySelector('#second').value; 
    var result = Number(firstPrice) + Number(secondPrice);  			
    document.querySelector('#showResult').innerHTML = "두 수의 합은 " + result + "입니다"; 
}
function sub() {
    var firstPrice = document.querySelector('#first').value; 
    var secondPrice = document.querySelector('#second').value; 
    var result = Number(firstPrice) - Number(secondPrice);  		
    document.querySelector('#showResult').innerHTML = "두 수의 차는 " + result + "입니다"; 
}
function mul() {
    var firstPrice = document.querySelector('#first').value;  
    var secondPrice = document.querySelector('#second').value; 
    var result = Number(firstPrice) * Number(secondPrice);  		
    document.querySelector('#showResult').innerHTML = "두 수의 곱은 " + result + "입니다"; 
}
function div() {
    var firstPrice = document.querySelector('#first').value;  
    var secondPrice = document.querySelector('#second').value; 
    var result = Number(firstPrice) / Number(secondPrice);  			
    document.querySelector('#showResult').innerHTML = "두 수의 몫은 " + result + "입니다"; 
}
function remain() {
    var firstPrice = document.querySelector('#first').value;  
    var secondPrice = document.querySelector('#second').value; 
    var result = Number(firstPrice) % Number(secondPrice);  			
    document.querySelector('#showResult').innerHTML = "두 수의 나머지는 " + result + "입니다"; 
}
