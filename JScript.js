//значения для игрока
let player = 0;
let player1 = false;
let player2 = false;

//баллы
let fir1 = 0;
let fir2 = 0;
let fir3 = 0;
let fir4 = 0;
let fir5 = 0;
let fir6 = 0;
let fir7 = 0;
let fir8 = 0;
let fir9 = 0;

//функции
function howPlayer(){	
	if (player % 2 == 1) {
		player1 = true;
		player2 = false;
		console.log('Я сработала(1)');
	} else if (player % 2 == 0) {
		player2 = true;
		player1 = false;
		console.log('Я сработала(2)');
}
}

function a() {
player = player + 1;
howPlayer();
if (player1 == true) {
	document.getElementById('fir1').innerHTML = "×";
	fir1 = 10;
}else if (player2 == true) {
	document.getElementById('fir1').innerHTML = "○";
	fir1 = 2;
}
showWinner1();
showWinner2();
showPlayer();

}

function b() {
player = player + 1;
howPlayer();
if (player1 == true) {
	document.getElementById('fir2').innerHTML = "×";
	fir2 = 10;
}else if (player2 == true) {
	document.getElementById('fir2').innerHTML = "○";
	fir2 = 2;
}
showWinner1();
showWinner2();
showPlayer();

}

function c() {
player = player + 1;
howPlayer();
if (player1 == true) {
	document.getElementById('fir3').innerHTML = "×";
	fir3 = 10;
}else if (player2 == true) {
	document.getElementById('fir3').innerHTML = "○";
	fir3 = 2;
}
showWinner1();
showWinner2();
showPlayer();

}

function d() {
player = player + 1;
howPlayer();
if (player1 == true) {
	document.getElementById('fir4').innerHTML = "×";
	fir4 = 10;
} else if (player2 == true) {
	document.getElementById('fir4').innerHTML = "○";
	fir4 = 2;
}
showWinner1();
showWinner2();
showPlayer();

}

function e() {
player = player + 1;
howPlayer();
if (player1 == true) {
	document.getElementById('fir5').innerHTML = "×";
	fir5 = 10;
} else if (player2 == true) {
	document.getElementById('fir5').innerHTML = "○";
	fir5 = 2;
}
showWinner1();
showWinner2();
showPlayer();

}

function f() {
player = player + 1;
howPlayer();
if (player1 == true) {
	document.getElementById('fir6').innerHTML = "×";
	fir6 = 10;
} else if (player2 == true) {
	document.getElementById('fir6').innerHTML = "○";
	fir6 = 2;
}
showWinner1();
showWinner2();
showPlayer();

}

function g() {
player = player + 1;
howPlayer();
if (player1 == true) {
	document.getElementById('fir7').innerHTML = "×";
	fir7 = 10;
} else if (player2 == true) {
	document.getElementById('fir7').innerHTML = "○";
	fir7 = 2;	
}
showWinner1();
showWinner2();
showPlayer();

}

function h() {
player = player + 1;
howPlayer();
if (player1 == true) {
	document.getElementById('fir8').innerHTML = "×";
	fir8 = 10;
} else if (player2 == true) {
	document.getElementById('fir8').innerHTML = "○";
	fir8 = 2;
}
showWinner1();
showWinner2();
showPlayer();

}

function i() {
player = player + 1;
howPlayer();
if (player1 == true) {
	document.getElementById('fir9').innerHTML = "×";
	fir9 = 10;
} else if (player2 == true) {
	document.getElementById('fir9').innerHTML = "○";
	fir9 = 2;
}
showWinner1();
showWinner2();
showPlayer();
}

function consoleRite() {
console.log(fir1);
console.log(fir2);
console.log(fir3);
console.log(fir4);
console.log(fir5);
console.log(fir6);
console.log(fir7);
console.log(fir8);
console.log(fir9);
}

function showWinner1() {
	if (fir1 + fir2 + fir3 == 30) {
		alert('YEEE, Player1 WINNER!!!')
	} else if (fir4 + fir5 + fir6 == 30) {
		alert('YEEE, Player1 WINNER!!!')
	} else if (fir7 + fir8 + fir9 == 30) {
		alert('YEEE, Player1 WINNER!!!')
	} else if (fir1 + fir4 + fir7 == 30) {
		alert('YEEE, Player1 WINNER!!!')
	} else if (fir2 + fir5 + fir8 == 30) {
		alert('YEEE, Player1 WINNER!!!')
	} else if (fir3 + fir6 + fir9 == 30) {
		alert('YEEE, Player1 WINNER!!!')
	} else if (fir1 + fir5 + fir9 == 30) {
		alert('YEEE, Player1 WINNER!!!')
	} else if (fir3 + fir5 + fir7 == 30) {
		alert('YEEE, Player1 WINNER!!!')
	} 
consoleRite()
}

function showWinner2() {
	if (fir1 + fir2 + fir3 == 6) {
		alert('WOW, PLAYER2 WINNER!!!')
	} else if (fir4 + fir5 + fir6 == 6) {
		alert('WOW, PLAYER2 WINNER!!!')
	} else if (fir7 + fir8 + fir9 == 6) {
		alert('WOW, PLAYER2 WINNER!!!')
	} else if (fir1 + fir4 + fir7 == 6) {
		alert('WOW, PLAYER2 WINNER!!!')
	} else if (fir2 + fir5 + fir8 == 6) {
		alert('WOW, PLAYER2 WINNER!!!')
	} else if (fir3 + fir6 + fir9 == 6) {
		alert('WOW, PLAYER2 WINNER!!!')
	} else if (fir1 + fir5 + fir9 == 6) {
		alert('WOW, PLAYER2 WINNER!!!')
	} else if (fir3 + fir5 + fir7 == 6) {
		alert('WOW, PLAYER2 WINNER!!!')
	} 
consoleRite()
}

function showPlayer() {
	if (player1 == true) {
		document.getElementById("showplayer").innerHTML = "Сейчас ход: Player2 (O)";
	} else if (player2 == true) {
		document.getElementById("showplayer").innerHTML = "Сейчас ход: Player1 (X)";
	}
}
