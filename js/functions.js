function getMoveName (argMoveId) {
	if(argMoveId == 1){
		return argMoveId = 'kamień';
	}
	if(argMoveId == 2){
		return argMoveId = 'papier';
	}
	if(argMoveId == 3){
		return argMoveId = 'nożyce';
	}

	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
	printMessage('Komputer wylosował: ' + argComputerMove + ', a Ty wylosowałeś: ' + argPlayerMove + '.');

	/*remis*/
	if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		console.log('Wynik: ' + argComputerMove + ' = ' + argPlayerMove);
		printMessage('Remis');
	} 
	else
	{
		if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
			console.log('Wynik: ' + argComputerMove + ' = ' + argPlayerMove);
			printMessage('Remis');
		}
		else 
		{
			if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
				console.log('Wynik: ' + argComputerMove + ' = ' + argPlayerMove);
				printMessage('Remis');
			}
		}
	}
	/*kamień*/
	if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		console.log('Wynik: ' + argComputerMove + ' < ' + argPlayerMove);
	  	printMessage('Wygrałeś!');
	} 
	else 
	{
		if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
			console.log('Wynik: ' + argComputerMove + ' > ' + argPlayerMove);
			printMessage('Przegrałeś!');
		}
	}
	/*papier*/
	if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		console.log('Wynik: ' + argComputerMove + ' > ' + argPlayerMove);
		printMessage('Przegrałeś!');
	  } 
	else 
	{
		if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
			console.log('Wynik: ' + argComputerMove + ' < ' + argPlayerMove);
			printMessage('Wygrałeś!');
		}
	}
	/*nożyce*/
	if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		console.log('Wynik: ' + argComputerMove + ' > ' + argPlayerMove);
		printMessage('Przegrałeś!');
	}
	else {
		if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
			console.log('Wynik: ' + argComputerMove + ' < ' + argPlayerMove);
			printMessage('Wygrałeś!');
		}
	}
  }

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}