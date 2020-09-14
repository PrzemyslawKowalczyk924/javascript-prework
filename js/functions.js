function getMoveName(argMoveId) {
	if (argMoveId == 1) {
		return 'kamień';
	}
	else if (argMoveId == 2) {
		return 'papier';
	}
	else if (argMoveId == 3) {
		return 'nożyce';
	}
	else {
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}
}

/*show score -function*/
function displayResult(argComputerMove, argPlayerMove) {
	printMessage('Komputer wylosował: ' + argComputerMove + ', a Ty wylosowałeś: ' + argPlayerMove + '.');

	if (argComputerMove == argPlayerMove) {
		console.log('Wynik: ' + argComputerMove + ' = ' + argPlayerMove);
		printMessage('Remis!');
		return 0;
	} else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
		console.log('Wynik: ' + argComputerMove + ' < ' + argPlayerMove);
		printMessage('Wygrałeś!');
		return 2;
	} else if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
		console.log('Wynik: ' + argComputerMove + ' < ' + argPlayerMove);
		printMessage('Wygrałeś!');
		return 2;
	} else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
		console.log('Wynik: ' + argComputerMove + ' < ' + argPlayerMove);
		printMessage('Wygrałeś!');
		return 2;
	}

	console.log('Wynik: ' + argComputerMove + ' > ' + argPlayerMove);
	printMessage('Przegrałeś!')
	return 1;
}

function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}



