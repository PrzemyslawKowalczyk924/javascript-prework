/*ComputerMove*/
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Komputer wylosował liczbę ' + randomNumber);

let computerMove = getMoveName(randomNumber);
console.log('Liczba ' + randomNumber + ' to '  + computerMove);

/*PlayerMove*/

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał liczbę: ' + playerInput);

let playerMove = getMoveName(playerInput);
console.log('Liczba ' + playerInput + ' to ' + playerMove);

/*Game score*/
console.log('Komputer - ' + computerMove + ', ' + 'Gracz - ' + playerMove);
displayResult(computerMove, playerMove);
  