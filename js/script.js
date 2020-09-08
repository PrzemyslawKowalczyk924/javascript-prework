function playGame(playerInput) {
	clearMessages();

	/*ComputerMove*/	
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Komputer wylosował liczbę ' + randomNumber);

	let computerMove = getMoveName(randomNumber);
	console.log('Liczba ' + randomNumber + ' to '  + computerMove);

	/*PlayerMove*/
	let playerMove = getMoveName(playerInput);
	console.log('Gracz wpisał liczbę: ' + playerInput);
	console.log('Liczba ' + playerInput + ' to ' + playerMove);

	/*Game score*/
	console.log('Komputer - ' + computerMove + ', ' + 'Gracz - ' + playerMove);
	displayResult(computerMove, playerMove);
}


document.getElementById('play-rock').addEventListener('click', function(){
	printMessage(playGame(1));
  });
document.getElementById('play-paper').addEventListener('click', function(){
	printMessage(playGame(2));
  });
document.getElementById('play-scissors').addEventListener('click', function(){
	printMessage(playGame(3));
  });
