function pieceToStickers(piece){
	return ["WOB","WBR","WRG","WGO","YBO","YRB","YGR","YOG"][piece];
}

function printCube(co, cp){
	var s = "  "+pieceToStickers(cp[UBL])[(co[UBL]+0)%3]+
	pieceToStickers(cp[UBR])[(co[UBR]+0)%3]+"\n  "+
	pieceToStickers(cp[UFL])[(co[UFL]+0)%3]+
	pieceToStickers(cp[UFR])[(co[UFR]+0)%3]+"\n"+
	pieceToStickers(cp[UBL])[(co[UBL]+1)%3] + pieceToStickers(cp[UFL])[(co[UFL]+2)%3] + pieceToStickers(cp[UFL])[(co[UFL]+1)%3] + pieceToStickers(cp[UFR])[(co[UFR]+2)%3] + pieceToStickers(cp[UFR])[(co[UFR]+1)%3] +pieceToStickers(cp[UBR])[(co[UBR]+2)%3] + pieceToStickers(cp[UBR])[(co[UBR]+1)%3]+pieceToStickers(cp[UBL])[(co[UBL]+2)%3]+
	"\n"+
	pieceToStickers(cp[DBL])[(co[DBL]+2)%3] + pieceToStickers(cp[DFL])[(co[DFL]+1)%3] + pieceToStickers(cp[DFL])[(co[DFL]+2)%3] + pieceToStickers(cp[DFR])[(co[DFR]+1)%3] + pieceToStickers(cp[DFR])[(co[DFR]+2)%3] +pieceToStickers(cp[DBR])[(co[DBR]+1)%3] + pieceToStickers(cp[DBR])[(co[DBR]+2)%3]+pieceToStickers(cp[DBL])[(co[DBL]+1)%3]+
	"\n  "+pieceToStickers(cp[DFL])[(co[DFL]+0)%3]+
	pieceToStickers(cp[DFR])[(co[DFR]+0)%3]+"\n  "+
	pieceToStickers(cp[DBL])[(co[DBL]+0)%3]+
	pieceToStickers(cp[DBR])[(co[DBR]+0)%3];
	return s;
}

//Get sides in ULFRBD order as arrays containing the stickers
function sideStickerArrays(co, cp){
	return [[
		pieceToStickers(cp[UBL])[(co[UBL]+0)%3]
		pieceToStickers(cp[UBR])[(co[UBR]+0)%3]
		pieceToStickers(cp[UFL])[(co[UFL]+0)%3]
		pieceToStickers(cp[UFR])[(co[UFR]+0)%3]
	],[
		pieceToStickers(cp[UBL])[(co[UBL]+1)%3]
		pieceToStickers(cp[UFL])[(co[UFL]+2)%3]
		pieceToStickers(cp[DBL])[(co[DBL]+2)%3]
		pieceToStickers(cp[DFL])[(co[DFL]+1)%3]
	],[
		pieceToStickers(cp[UFL])[(co[UFL]+1)%3]
		pieceToStickers(cp[UFR])[(co[UFR]+2)%3]
		pieceToStickers(cp[DFL])[(co[DFL]+2)%3]
		pieceToStickers(cp[DFR])[(co[DFR]+1)%3]
	],[
		pieceToStickers(cp[UFR])[(co[UFR]+1)%3]
		pieceToStickers(cp[UBR])[(co[UBR]+2)%3]
		pieceToStickers(cp[DFR])[(co[DFR]+2)%3]
		pieceToStickers(cp[DBR])[(co[DBR]+1)%3]
	],[
		pieceToStickers(cp[UBR])[(co[UBR]+1)%3]
		pieceToStickers(cp[UBL])[(co[UBL]+2)%3]
		pieceToStickers(cp[DBR])[(co[DBR]+2)%3]
		pieceToStickers(cp[DBL])[(co[DBL]+1)%3]
	],[
		pieceToStickers(cp[DFL])[(co[DFL]+0)%3]
		pieceToStickers(cp[DFR])[(co[DFR]+0)%3]
		pieceToStickers(cp[DBL])[(co[DBL]+0)%3]
		pieceToStickers(cp[DBR])[(co[DBR]+0)%3]
	]];
}