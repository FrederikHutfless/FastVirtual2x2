function checkSR(co,cp){
	var bottomCp = [cp[DBR],cp[DBL],cp[DFL],cp[DFR]].sort().join("");
	return bottomCp == "0123" || bottomCp == "4567" || bottomCp == "0145" || bottomCp == "2367" || bottomCp == "0347" || bottomCp == "1256";
}

//Checks, if the check given by fn is true anywhere on the cube
function checkScrambleCharacteristic(cube, fn){
	var orientations = generateOrientations(cube);
	for(var i=0;i<orientations.length;++i){
		var orientedCube = orientations[i];
		if(fn(...orientedCube)) return true;
	}
	return false;
}

function isSideBlock(co,cp){
	return pieceToStickers(cp[DFL])[(co[DFL]+0)%3] == pieceToStickers(cp[DBL])[(co[DBL]+0)%3];
}

function is112Block(co,cp){
	return isSideBlock(co,cp) && pieceToStickers(cp[DBL])[(co[DBL]+2)%3] != pieceToStickers(cp[DFL])[(co[DFL]+1)%3];
}