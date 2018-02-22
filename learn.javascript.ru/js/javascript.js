// Используя конструкцию if..else, напишите код, который получает значение prompt,
//  а затем выводит alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
/*var b = prompt('Введите число', '');
if (b > 0) {
	alert('1');
} else if(b == 0) {
	alert('0');
} else if (b < 0){
	alert('-1');
} else {
	alert('Это не число');
}*/


// Напишите код, который будет спрашивать логин (prompt).

// Если посетитель вводит «Админ», то спрашивать пароль,
//  если нажал отмена (escape) – выводить «Вход отменён»,
//   если вводит что-то другое – «Я вас не знаю».

// Пароль проверять так. Если введён пароль «Чёрный Властелин»,
//  то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».

/*var login = prompt('Введите логин', '');
if (login == 'Админ') {
	var password = prompt('Пароль', '');
	if (password == 'Чёрный Властелин') {
		alert('Добро пожаловать!');
	} else if(password == null){
		alert('Вход отменён');
	} else {
		alert('Пароль неверен');
	}
} else if(login == null) {
	alert('Вход отменен');
} else {
	alert('Я вас не знаю');
}*/


/*var message = (login == 'Вася') ? 'Привет' :
 (login == 'Директор') ? 'Здравствуйте' : 
 (login == '') ? 'Нет логина' :
   '';				*/		


/*for (var i = 0; i < 10; i++) {

  if (i % 2 == 0) continue;

  alert(i);
}*/



//Создайте код, который выводит все простые числа из интервала от 2 до 10.
// Результат должен быть: 2,3,5,7.
/*nextPrime:
  for (var i = 2; i <= 10; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // простое
  }*/


// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'IE':
//     alert( 'О, да у вас IE!' );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Да, и эти браузеры мы поддерживаем' );
//     break;

//   default:
//     alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

/*  var browser = prompt('Введите название Вашего браузера', '');
  if(browser == 'IE'){
    alert('О, да у вас IE!');
 } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
 		alert('Да, и эти браузеры мы поддерживаем');
 } else {
 		alert('Мы надеемся, что и в вашем браузере все ок!');
 }*/

/* var a = +prompt('a?',	'');
 switch(a) {
 	case 0:
 		alert( 0 );
 		break;
 	case 1:
 		alert( 1 );
 		break;
 	case 2:
 	case 3:
 		alert( '2,3' );
 		break;
 	default:
 		alert('lala');
 }*/

//Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n
/* function sumTo(n) {
 	sum = 0;
 	for( i = 0; i <= n; i++ ){
 		sum += i;
 	}
 	return sum;
 }

 console.log( sumTo(92912) );
  */
  
