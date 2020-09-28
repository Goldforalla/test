'use strict' ;

// var now = Date(); // Дата в строку
// document.write('Сегодня: '+ now.toLocaleString());

//----------------------------------

// //проверяли как работает объект
// var point = new Object();
//   point.x = 2.3;
//   point.y = 1.2;

// console.log (point);

//------------------------------------

var money = prompt('Ваш бюджет на месяц?');
var time =  prompt('Введите дату в формате YYYY-MM-DD');


var expense1 = prompt('Введите обязательную статью расходов в этом месяце');
var expense2 = prompt('Во сколько обойдется?');

var expenses = {
	x :expense1+  ' - статья расходов в этом месяце',
	y :expense2+ ' - непредвиденная статья расходов'
};
console.log('expenses');


//по пустые оставляем 

// var optionalExpenses = (' ');

// var incom = [];


//создали объект и внесли туда данные из предыдущих переменных
 var appDate = new Object( ); 
	appDate.money = money;
	appDate.time = time;
	appDate.expenses = expenses;
	savings: false;
console.log(appDate);	

var budOneDay = (money/30);
  alert("Ваш бюджет на 1 день: "+ budOneDay);



