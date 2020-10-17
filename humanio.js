//Human readable algorithm like R U R' F' to array of numbers. Make sure to provide valid input
function convertMoves(moves){
	return moves.split(" ").map(function(a){return {"U":0,"U'":1,"U2":2,"R":3,"R'":4,"R2":5,"F":6,"F'":7,"F2":8,"y":9,"y'":10,"y2":11}[a]});
}

//Internal representation to human readable algorithm
function movesReadable(moves){
	return moves.map(function(a){return ["U","U'","U2","R","R'","R2","F","F'","F2","y","y'","y2"][a]}.join(" "));
}