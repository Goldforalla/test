'use strict' ;
// Переменные 
//variable - непостоянные
//camelCase
//const - постоянные 
//34 - number, LastName='' - string, isProgrammer - boulen

//const firstName='Alla'


//const isProgrammer=true

//const LastName = 'Komissarova'
// prompt('Введите фамилию')
// alert(firstName + ' '+LastName)
//____________________________________________________
// Операторы 3
//const currentYear = 2020
//const birthYear = 1986
//const age = currentYear - birthYear

//let c = 15 
//const a = 10
//const b = 100 

//c=a+b
//console.log(c)
//console.log(a*b)
//console.log(a-b)
//console.log(b/a)
 
//console.log(--c)
//!== неравенство , нетождественность . Например: 


//____________________________________________________

//4 типы данных 
//const isProgrammer=true
//const age=34
//const firstName='Alla'
//let v

//console.log(typeof isProgrammer)
//console.log(typeof age)
//console.log(typeof firstName)
//console.log(v)
//____________________________________________________

//Приоритет операторов
/*const course = 'в процессе' // fail, pending, ready
if (course==='готов') {
	console.log ('Курсы готовы')
}
else if (course==='в процессе') {console.log ('Курсы в процессе')}
else { console.log ('Курсы не готовы')

}
*/


//const isReady = false
/* 
if (isReady===true) {
console.log('Готово')
}
else { console.log('Не готово')} 
*/

//isReady ? console.log('Готово') : console.log('Не готово') Тернарное выражение

//document.getElementById('mes').innerHTML = 'Hello Alla';
//document.getElementById('movie').innerHTML = 'The MATRIX'
/*const x = 'Моя не первая переменная ! :)'
const y = 'Моя 2я переменная'
const a = 'Ура Получилось!'
$('#test').text(x);
document.getElementsByClassName("myClass")[0].innerHTML=x;
document.getElementsByClassName("myClass")[4].innerHTML=y;
document.getElementsByClassName("myClass")[1].innerHTML=a;

console.log(document.getElementsByClassName('myClass'));
console.log(x)
console.log(y)
console.log(a)*/
function persona (name, age, height) {
	this.name = name;
	this.age = age;
	this.height = height;
}
//var personaNew = new persona("Alla", 34, 164 );
/*var personaNew2 = new persona ("Оче", 11034, 169)
document.write(personaNew.name);
document.write(personaNew2.age)
console.log (personaNew.age);
console.log(personaNew2.height)*/

//const massiv = new Array (23,14,10,7,8,777,35);
//document.write (massiv[3]);
/*const number = massiv[5]
document.write(number);
var test = Math.ceil(Math.random()*10);
document.write(test);

const quation =prompt('Введите число');
const sqrtOfnum = Math.sqrt(quation);
alert ("Корень из числа:"+ quation+'это '+sqrtOfnum);

 var diva = document.getElementsByTagName("div");
for (var c = 1; c<diva.length; c++) {
	diva[c].innerHTML="П!";


-----------------------------------

1. Подключите к вашему html-файлу Babel JS как в видео лекции.

Ознакомиться с Babel JS вы можете здесь.
Скрипт Babel JS для подключения вы можете найти https://unpkg.com/babel-standalone@6/babel.min.js
}*/
/*
var pos =0;// начальная позиция 
var box = document.getElementById("box");//получили доступ к id box  в html
var t= setInterval(move, 10);

// создали функцию движения . move величивает  свойство переменной left (которое по умолчанию в style)
// если указать не px а 1px то шаг увеличивается на 10 и выходит за квадрат

function move() {
	if (pos>=120) {
		clearInterval(t);
	}
	
	else {
	pos += 1;
	box.style.left = pos+"px";
	}
} 

var t = setInterval(move, 10); //движение происходит постоянно из за ф. setInterval - через определенный период  
// 1.получаем доступ к id 2.создаем функцию 3
var button = document.getElementById("button");*/


//создаем переменную
// var images = ["img/8.jpg", "img/6.jpg","img/2.jpg"];
				
// var num = 0;
// function next() {
// var slider = document.getElementById('slider');
// 	num++;
// 	if (num>=images.length) {
// 		num = 0;
// 	}
// 	slider.src = images[num];
// }

// function prev() {
// 	var slider = document.getElementById('slider');
// 	num--;
// 	if (num<0) {
// 		num = images.length-1;
// 	}
// 	slider.src = images[num];
// }



//------



//---------JQUERY--------------
// var x = 'Добро пожаловать!';
// let ha2 = document.getElementById('ha2');


// $('#h1').fadeOut("slow");
// console.log(x);
// console.log(ha1);

//$('.myClass').text(x);
//$('.myClass').fadeOut("");



// console.log("<h2>Числа Фибоначчи </h2>");
// for (i=0, j=1, k=0, fib =0; i<50; i++, fib=j+k, j=k, k=fib){
// console.log("Fibonacci (" + i + ") = " + fib);
// console.log("<br>");
// }

// var test = ("1 2 3 4 5 6");
// // console.log(test);

// test=(test.split( ));
// console.log(test);

// test=(test.push('Привет'));
// console.log(test);


// function answer() {
// 	var answer=confirm('Ты разговаривала со Вселенной?');
// }
// console.log(answer);

// var age = +prompt('Хочешь на Арктур?', 'Да');
// console.log(typeof(age));

// let x = 34, y = 33, c = 23;


// console.log(--x);
// console.log(c++);

// var a = 6;
// console.log(a);

// if (2*8 == 16) {
// 	console.log('Верно!')
// }

// else {
// 	console.log('Не верно !');
// }

let num = 69;

if (num < 50){
	console.log('Мало');
} else if (num > 50 && num < 80) {
	console.log('Меньше 80 и Больше 50');
} else if (num ==50) {
	console.log('Верно!');
} else {
	console.log('Что то пошло не так');
}

switch (true) {
 case num < 70:
	console.log('меньше 70');
	break;
 case num > 50:
	console.log('больше 50');
	break;
 case 50 : console.log('В точку');
 	break;
 default: console.log('Поппрробуй еще раз');
 break;
}

