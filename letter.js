// Letter.js - should not require any other files

const chalk = require('chalk');

function Letter(letter) {
	this.letter = letter;
	this.guessedYet = false;
	this.placeholder = function() {
		if (this.guessedYet) {
			this.letter = letter;
			console.log(chalk.blue(this.letter));
		} else {
			this.letter = '_';
			console.log(chalk.red(this.letter));
		}
	}
	this.guess = function() {

	}
}


module.exports = Letter;

// var a = new Letter('a');

// a.placeholder();

// a.guessedYet = true;

// a.placeholder();