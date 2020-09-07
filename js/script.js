function playGame(playerInput) {
	clearMessages();
	/*ComputerMove*/	
	let randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Komputer wylosował liczbę ' + randomNumber);

	let computerMove = getMoveName(randomNumber);
	console.log('Liczba ' + randomNumber + ' to '  + computerMove);

	/*PlayerMove*/

	//let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
	//console.log('Gracz wpisał liczbę: ' + playerInput);

	let playerMove = getMoveName(playerInput);
	console.log('Liczba ' + playerInput + ' to ' + playerMove);

	/*Game score*/
	console.log('Komputer - ' + computerMove + ', ' + 'Gracz - ' + playerMove);
	displayResult(computerMove, playerMove);
}
/*
let firstButton = document.getElementById('play-rock');
firstButton.addEventListener('click', 
	function() {
	printMessage(playGame(1));
} );
*/
//play-paper.addEventListener('Papier');
//play-scissors.addEventListener('Nożyczki');


document.getElementById('play-rock').addEventListener('click', function(){
	printMessage(playGame(1));
  });
document.getElementById('play-paper').addEventListener('click', function(){
	printMessage(playGame(2));
  });
document.getElementById('play-scissors').addEventListener('click', function(){
	printMessage(playGame(3));
  });
