// Word.js -- should only require letter.js
const chalk = require('chalk');
const Letter = require('./letter');

function Word(word) {
	this.letters = [];
	this.printInfo = function () {
		for (let j = 0; j < word.length; j++) {
			this.newLetter = new Letter(word[j]);
			this.letters.push(word[j]);
		}
		console.log(this.letters);
	}
}

var wordList = ["ZELDA", "LINK", "EPONA", "GANON", "GANONDORF", "REVALI", "MIPHA", "DARUK", "URBOSA", "PRINCE SIDON", "RIJU", "CHUCHU", "KEESE", "WIZZROBE", "BOKOBLIN", "LIZALFOS", "MOBLIN", "LYNEL", "GUARDIAN", "TALUS", "HINOX", "MOLDUGA", "TRIFORCE", "BOMB", "BOOMERANG", "MASTER SWORD", "GREAT DEKU TREE", "OCARINA", "HYLIAN", "GERUDO", "SHEIKAH", "KOKIRI", "GORON", "ZORA", "DEKU", "KOROK", "DODONGO", "IMPA", "GOHMA", "AGAHNIM", "DAMPE", "MIDNA", "MALO", "TALO", "ZANT", "ILIA", "SKULL KID", "WOLF LINK", "GIRAHIM", "NAVI", "POE", "MAJORA", "LANAYRU", "FAROSH", "DINRAAL", "NAYDRA", "HESTU", "KING RHOAM", "SHEIK", "RUTO", "OOCCOO", "FARORE", "DIN", "VOLVAGIA", "LORD JABU JABU", "TINGLE", "SAGE", "STALFOS", "LEVIATHAN", "COTERA", "KAYASA", "MIJA", "TERA", "GREAT FAIRY", "LOST WOODS", "HAPPY MASK SALESMAN", "KOTAKE", "KOUME", "FARON", "AKKALA", "DUELING PEAKS", "HATENO", "HEBRA", "TABANTHA", "LON LON RANCH", "HYRULE", "LAKE HYLIA", "SHEIKAH EYE", "TEMPLE OF TIME", "BOW", "ARROW", "KOROK SEED", "SHRINE", "STABLE", "RUPEE", "SHEIKAH SLATE", "ANKLE", "KNUCKLE", "BEEDLE", "AGITHA", "CRAZY TRACY", "DARK LINK", "BONOORU", "OCTOROK", "FI", "SCRAPPER", "GROOSE", "DEMISE", "BATREAUX", "KAKARIKO", "BOMBCHU", "HOOKSHOT", "LENS OF TRUTH", "CUCCO", "POTION", "SKULLTULA", "SLINGSHOT", "DEKU NUT", "DEKU SEEDS", "DEKU STICK"];

var word = wordList[Math.floor(Math.random() * wordList.length)];
word = word.replace(/\s/g, "-");
console.log(chalk.blue(word));

var currentWord = new Word(word);



currentWord.printInfo();