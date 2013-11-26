// Shifting bool
var scoreboard = [
	1 << 0,
	1 << 1,
	1 << 2,
	1 << 3,
	1 << 4,
	1 << 5,
	1 << 6,
	1 << 7,
	1 << 8];

var player1State = 0,
	player2State = 0;


// Game board:
// 000
// 000
// 000

// or

// 000000000

// Possible winning combinations:
// 111000000
// 000111000
// 000000111
// 100100100
// 010010010
// 001001001
// 100010001
// 001010100


// var winningPos1 = (1 << 8) + (1 << 7) + (1 << 6),
// 	winningPos2 = (1 << 5) + (1 << 4) + (1 << 3),
// 	winningPos3 = (1 << 2) + (1 << 1) + (1 << 0),
// 	winningPos4 = (1 << 8) + (1 << 5) + (1 << 2),
// 	winningPos5 = (1 << 7) + (1 << 4) + (1 << 1),
// 	winningPos6 = (1 << 6) + (1 << 3) + (1 << 0),
// 	winningPos7 = (1 << 8) + (1 << 4) + (1 << 0),
// 	winningPos8 = (1 << 6) + (1 << 4) + (1 << 2);


function writeToBinaryString (number, strLength) {
	var binary = number.toString(2),
		strLeftOvers = new Array(Math.max(strLength, binary.length) - binary.length).join('0');
		return strLeftOvers + binary;
}

function setPiece(player, pos) {
	player =  player + (1 << pos);
	return player;
}

player1State = setPiece(player1State, 4);
player1State = setPiece(player1State, 6);
player1State = setPiece(player1State, 2);

var gamestate = player1State + player2State;


for (var i = 0; i < 3; i++) {
	for (var j = 0; j < 3; j++) {

	}
}


// for (var i = 0; i < 9; i++) {
// 	var field = scoreboard[i];
// 	console.log(writeToBinaryString(field, 10));
// }



// make object that can navigate to their neighbor.

var board = [
	0, 0, 0,
	0, 0, 0,
	0, 0, 0
]

var centerSlot = board[4];
centerSlot.isInInLineOf(3);

var Slot =  function () {
	var instance = function () {}
	instance.protype.isInInLineOf = function (n) {
		// check horizontal - vertical - across left - across right
		var inLineCount = 0,
			funcCount = 0,
			funcList = [
				that.countHorizontal,
				that.countVertical,
				that.countCrossRight,
				that.countCrossLeft
			];

		while (inLineCount < n || funcList.length > 0) {
			inLineCount = funcList.pop().call(that, n);
		}

		return inLineCount > 3;
	}

	var that = new instance;
	return that;
}


/*
____________________________________
|			|			|			|		TOP / MIDDLE 					: Down()
|	TOP		|	TOP		|	TOP		|		BOTTOM / MIDDLE 				: Up()
|	LEFT	|	CENTER	|	RIGHT	|		LEFT / CENTER 					: Next()
|___________|___________|___________|		RIGHT / CENTER 					: Prev()
|			|			|			|		TOP_LEFT / MIDDLE_CENTER 		: CrossDownNext()
|	MIDDLE	|	MIDDLE	|	MIDDLE	|		BOTTOM_LEFT / MIDDLE_CENTER 	: CrossUpNext()
|	LEFT	|	CENTER	|	RIGHT	|		TOP_RIGHT / MIDDLE_CENTER 		: CrossDownPrev()
|___________|___________|___________|		BOTTOM_RIGHT / MIDDLE_CENTER 	: CrossUpPrev()
|			|			|			|
|	BOTTOM	|	BOTTOM	|	BOTTOM	|
|	LEFT 	|	CENTER	|	RIGHT	|
|___________|___________|___________|


top edge will get up function
left edge will get down function etc.
non edge will get them all. 


*/