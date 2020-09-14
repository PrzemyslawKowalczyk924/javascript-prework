{
	let score;
	let computerPlus = 0;
	let playerPlus = 0;
	let remis = 0;

	const playGame = function (playerInput) {
		clearMessages();

		/*ComputerMove*/
		let randomNumber = Math.floor(Math.random() * 3 + 1);
		console.log('Komputer wylosował liczbę ' + randomNumber);

		let computerMove = getMoveName(randomNumber);
		console.log('Liczba ' + randomNumber + ' to ' + computerMove);

		/*PlayerMove*/
		let playerMove = getMoveName(playerInput);
		console.log('Gracz wpisał liczbę: ' + playerInput);
		console.log('Liczba ' + playerInput + ' to ' + playerMove);

		/*Game score*/
		console.log('Komputer - ' + computerMove + ', ' + 'Gracz - ' + playerMove);
		score = displayResult(computerMove, playerMove);

		if (score == 1) {
			computerPlus++;
		} else if (score == 2) {
			playerPlus++;
		} else {
			remis++;
		}

		gameOver();

	}


	document.getElementById('play-rock').addEventListener('click', function () {
		playGame(1);
	});
	document.getElementById('play-paper').addEventListener('click', function () {
		playGame(2);
	});
	document.getElementById('play-scissors').addEventListener('click', function () {
		playGame(3);
	});

	const gameOver = function () {
		const results = document.getElementById('results');
		results.innerHTML = playerPlus + ' vs ' + computerPlus;
		
		if (playerPlus == 3) {
			printMessage('Wygrałeś z kompem!!!');
			computerPlus = 0;
			playerPlus = 0;
		} else if (computerPlus == 3) {
			printMessage('Przegrałeś z kompem!!!');
			computerPlus = 0;
			playerPlus = 0;
		}
	}


} 