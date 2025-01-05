// GinsengAI

function GinsengAI() {
}

GinsengAI.prototype.getName = function() {
	return "Ginseng Pai Sho engine";
};

GinsengAI.prototype.getMessage = function() {
	return "Playing against the computer can help you learn how the game works. You should be able to beat the computer easily once you understand the game.";
};

GinsengAI.prototype.setPlayer = function(playerName) {
	this.player = playerName;
};

/* parameters will be copies of the real thing, so you can't mess up the real game. */
GinsengAI.prototype.getMove = function() {
	console.log("In getmove ai");
	
	let get_move_url = "http://localhost:7777/get_move"; 

	const request = new XMLHttpRequest();
	request.open("GET", get_move_url, false); // `false` makes the request synchronous
	request.send(null);
	
	if (request.status === 200) {
		var mv = request.responseText;
	}

	console.log("after json");
	let jsonmv = JSON.parse(JSON.parse(mv));
	console.log(jsonmv);
	return jsonmv;
	
};