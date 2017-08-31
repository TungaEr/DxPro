function icerme(a, obj){
	var tekrar=0; for (var x = 0; x < a.length; x++) {
		if (a[x] === obj) {tekrar++;}
		}
		if (tekrar==0) {return false;} 
		else{return true;}
		}
