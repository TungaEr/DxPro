function semptomekleyici(){
	

  var radioBtns = document.getElementsByClassName("radioBtn");
  for(var i = 0; i < radioBtns.length; i++){
    if(radioBtns[i].checked){
	  varyokdusukyuksek=radioBtns[i].value;
    }
  }	
	
	

if(varyokdusukyuksek=="154"){
geciskutusu = document.getElementById("semptomgir").value;	
	if(icerme(semptomlardizisi,geciskutusu)==true && icerme(girilensemptomlardizisi,geciskutusu+"_[H/P]")==false){
	girilensemptomlardizisi.push(geciskutusu+"_[H/P]");
}
else{}
var gorunensemptomlar = new Array();
for(i=0; i<girilensemptomlardizisi.length; i++){
var topla = i+1;
gorunensemptomlar.push("["+topla+"] "+girilensemptomlardizisi[i]);}
document.getElementById("girilensemptomlarlistesi").value = gorunensemptomlar.join("\n");
var Girilensemptomlar_2b2 = new Array(girilensemptomlardizisi.length);
for (var i = 0; i < girilensemptomlardizisi.length; i++) {
Girilensemptomlar_2b2[i] = 	girilensemptomlardizisi[i].split("_");
}
	for(i=0; i<Girilensemptomlar_2b2.length; i++){
		for(ii=0; ii<Semptomvebulgular.length; ii++){
			if(Girilensemptomlar_2b2[i][0]==Semptomvebulgular[ii][0]){
				Girilensemptomlar_2b2[i][0]=Semptomvebulgular[ii][1];				
			}			
		}				
	}
Girilensemptomlar_2b_dis = Girilensemptomlar_2b2;
sonuc_getir();
}



































else if(varyokdusukyuksek=="153"){
geciskutusu = document.getElementById("semptomgir").value;	
	if(icerme(semptomlardizisi,geciskutusu)==true && icerme(girilensemptomlardizisi,geciskutusu+"_[L/A]")==false){
	girilensemptomlardizisi.push(geciskutusu+"_[L/A]");
}
else{}
var gorunensemptomlar = new Array();
for(i=0; i<girilensemptomlardizisi.length; i++){
var topla = i+1;
gorunensemptomlar.push("["+topla+"] "+girilensemptomlardizisi[i]);}
document.getElementById("girilensemptomlarlistesi").value = gorunensemptomlar.join("\n");
var Girilensemptomlar_2b2 = new Array(girilensemptomlardizisi.length);
for (var i = 0; i < girilensemptomlardizisi.length; i++) {
Girilensemptomlar_2b2[i] = 	girilensemptomlardizisi[i].split("_");
}
	for(i=0; i<Girilensemptomlar_2b2.length; i++){
		for(ii=0; ii<Semptomvebulgular.length; ii++){
			if(Girilensemptomlar_2b2[i][0]==Semptomvebulgular[ii][0]){
				Girilensemptomlar_2b2[i][0]=Semptomvebulgular[ii][1];				
			}			
		}				
	}
Girilensemptomlar_2b_dis = Girilensemptomlar_2b2;
sonuc_getir();
}

else{}

}






