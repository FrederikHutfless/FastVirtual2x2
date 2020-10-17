const UBL = 0;
const UBR = 1;
const UFR = 2;
const UFL = 3;
const DBL = 4;
const DBR = 5;
const DFR = 6;
const DFL = 7;

//Solved Cube
var cp = [UBL, UBR, UFR, UFL, DBL, DBR, DFR, DFL];
var co = [0,   0,   0,   0,   0,   0,   0,   0  ];

const moveU = 0;
const moveUP = 1;
const moveU2 = 2;
const moveR = 3;
const moveRP = 4;
const moveR2 = 5;
const moveF = 6;
const moveFP = 7;
const moveF2 = 8;
const movey = 9;
const moveyP = 10;
const movey2 = 11;

//Where the pieces end up when applying the move to a solved cube
var cpMaps = [
	[3,0,1,2,4,5,6,7],
	[1,2,3,0,4,5,6,7],
	[2,3,0,1,4,5,6,7],
	[0,UFR,DFR,3,4,UBR,DBR,7],
	[0,DBR,UBR,3,4,DFR,UFR,7],
	[0,DFR,DBR,3,4,UFR,UBR,7],
	[0,1,UFL,DFL,4,5,UFR,DFR],
	[0,1,DFR,UFR,4,5,DFL,UFL],
	[0,1,DFL,DFR,4,5,UFL,UFR],
	[3,0,1,2,7,4,5,6],
	[1,2,3,0,5,6,7,4],
	[2,3,0,1,6,7,4,5]
];

//How the orientation needs to be changed after applying above permutation
var coMaps = [
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,2,1,0,0,1,2,0],
	[0,2,1,0,0,1,2,0],
	[0,0,0,0,0,0,0,0],
	[0,0,2,1,0,0,1,2],
	[0,0,2,1,0,0,1,2],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0]
];

function applyCpMove(cp, map){
	return [cp[map[0]], cp[map[1]], cp[map[2]], cp[map[3]], cp[map[4]], cp[map[5]], cp[map[6]], cp[map[7]]];
}

function applyCoMove(co, map){
	return [(co[0] + map[0])%3, (co[1] + map[1])%3, (co[2] + map[2])%3, (co[3] + map[3])%3, (co[4] + map[4])%3, (co[5] + map[5])%3, (co[6] + map[6])%3, (co[7] + map[7])%3];
}

function applyMove(co, cp, move){
	return [applyCoMove(applyCpMove(co, cpMaps[move]), coMaps[move]), applyCpMove(cp, cpMaps[move])];
}

function applyMoves(moves, co, cp){
	for(var i=0;i<moves.length;++i){
		var s = applyMove(co, cp, moves[i]);
		co = s[0];
		cp = s[1];
	}
	return [co, cp];
}

function generateOrientations(cube){
	return [
		cube,
		applyMoves([movey],...cube), //y
		applyMoves([moveyP],...cube), //y'
		applyMoves([movey2],...cube), //y2
		applyMoves([moveR,movey2,moveRP,movey2],...cube), //x
		applyMoves([moveRP,movey2,moveR,movey2],...cube), //x'
		applyMoves([moveF,movey2,moveFP,movey2],...cube), //z
		applyMoves([moveFP,movey2,moveF,movey2],...cube), //z'
		applyMoves([moveR2,movey2,moveR2],...cube), //z2
		applyMoves([moveR2,movey2,moveR2,movey],...cube), //z2 y
		applyMoves([moveR2,movey2,moveR2,movey2],...cube), //z2 y2
		applyMoves([moveR2,movey2,moveR2,moveyP],...cube), //z2 y'
		applyMoves([moveF,movey2,moveFP,moveyP],...cube), //z y
		applyMoves([moveF,movey2,moveFP],...cube), //z y2
		applyMoves([moveF,movey2,moveFP,movey],...cube), //z y'
		applyMoves([moveFP,movey2,moveF,moveyP],...cube), //z' y
		applyMoves([moveFP,movey2,moveF],...cube), //z' y2
		applyMoves([moveFP,movey2,moveF,movey],...cube), //z' y'
		applyMoves([moveR,movey2,moveRP,movey],...cube), //x y'
		applyMoves([moveRP,movey2,moveR,movey],...cube), //x' y'
		applyMoves([moveR,movey2,moveRP],...cube), //x y2
		applyMoves([moveRP,movey2,moveR],...cube), //x' y2
		applyMoves([moveR,movey2,moveRP,moveyP],...cube), //x y
		applyMoves([moveRP,movey2,moveR,moveyP],...cube) //x' y
	];
}