const inputEl = document.getElementById("input-el");
const enterBtn = document.getElementById("enter-btn");
const resultEl = document.getElementById("result-el");

enterBtn.addEventListener("click", function () {
	const playerGuess = inputEl.value; // Spieler-Vermutung
	const correctAnswer = Math.floor(Math.random() * 10) + 1; // Korrekte Antwort

	// Ternäre Bedingung für die Nachricht
	const message =
		playerGuess < correctAnswer
			? "Too low!"
			: playerGuess > correctAnswer
			? "Too high!"
			: "Exactly right!";

	resultEl.textContent = message;
	console.log(message);
});
