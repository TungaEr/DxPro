function sonuc_getir() {

var Girilensemptomlar_2b = new Array();
Girilensemptomlar_2b = Girilensemptomlar_2b_dis;


//	document.getElementById("sonuclistesi").value = Girilensemptomlar_2b[0][0];

// eşleşme bul
var ilksonuclar_semptomlu = new Array();
for(Tigir=0; Tigir<Girilensemptomlar_2b.length; Tigir++){
	for(Buyruk=0; Buyruk<Eslesme.length; Buyruk++){
		if(Eslesme[Buyruk][0]==Girilensemptomlar_2b[Tigir][0]){
			var eklenecek = Tigir+1;
			ilksonuclar_semptomlu.push(Eslesme[Buyruk][2] + "_" + eklenecek);
//	document.getElementById("sonuclistesi").value = Girilensemptomlar_2b.length;
//	document.getElementById("sonuclistesi").value = ilksonuclar_semptomlu[0];
	
			
		}
		
	}
	
}


// 2B dizi oluştur
var Ayrilmissonuclar = new Array(ilksonuclar_semptomlu.length);
    for (var i = 0; i < ilksonuclar_semptomlu.length; i++) {
    Ayrilmissonuclar[i] = new Array(3);
    }
// Hastalık id leri ile semptom numaralarını ayır	
for(ay=0; ay<Ayrilmissonuclar.length; ay++){
	for(xx=0; xx<2; xx++){
		Ayrilmissonuclar[ay][xx]=ilksonuclar_semptomlu[ay].split("_")[xx];		//olmamış olabilir, eğer olmamış ise ilksonuclar_semptomlunun iç dizisini 2 lik yap
	}
}	

// birleştir
for(dis=1; dis<Ayrilmissonuclar.length; dis++){
	for(ic=dis-1; ic<Ayrilmissonuclar.length-1; ic++){
		if(Ayrilmissonuclar[Ayrilmissonuclar.length-dis][0]==Ayrilmissonuclar[Ayrilmissonuclar.length-ic-2][0]){
		Ayrilmissonuclar[Ayrilmissonuclar.length-ic-2][1]+="_"+Ayrilmissonuclar[Ayrilmissonuclar.length-dis][1];

Ayrilmissonuclar.splice(Ayrilmissonuclar.length-dis,1);					// splice sorun çıkarabilir
		}
		else{}		
	}
}
for(dis=1; dis<Ayrilmissonuclar.length; dis++){
	for(ic=dis-1; ic<Ayrilmissonuclar.length-1; ic++){
		if(Ayrilmissonuclar[Ayrilmissonuclar.length-dis][0]==Ayrilmissonuclar[Ayrilmissonuclar.length-ic-2][0]){
		Ayrilmissonuclar[Ayrilmissonuclar.length-ic-2][1]+="_"+Ayrilmissonuclar[Ayrilmissonuclar.length-dis][1];

Ayrilmissonuclar.splice(Ayrilmissonuclar.length-dis,1);					// splice sorun çıkarabilir
		}
		else{}		
	}
}




// 2B dizi oluştur
var Sayibulduran = new Array(Ayrilmissonuclar.length);
    for (var ss = 0; ss < Ayrilmissonuclar.length; ss++) {
    Sayibulduran[ss] = new Array(Girilensemptomlar_2b.length);
    }
	
// Semptom numaralarını kendi aralarında ayır
for(sp=0; sp>Sayibulduran.length; sp++){
	Sayibulduran[sp]=Ayrilmissonuclar[sp][1].split("_");
}

// içerilen semptom sayılarını 2 indexine yerleştir
for(i=0; i<Ayrilmissonuclar.length; i++){
var icermedurumu = Ayrilmissonuclar[i][1].match("_");
if(icermedurumu !=null) {
Ayrilmissonuclar[i][2] = Ayrilmissonuclar[i][1].match(/_/gi).length + 1;
}
else{
Ayrilmissonuclar[i][2] = 1;
}
}

// sırala
for(siralayaci=0; siralayaci<Ayrilmissonuclar.length+1; siralayaci++){
Ayrilmissonuclar.sort(function(x,y){return y[2]-x[2]});
}

// id den isim al
for(dn=0; dn<Ayrilmissonuclar.length; dn++){
	for(tr=0; tr<Hastalikvedurumlar.length; tr++){
		if(Ayrilmissonuclar[dn][0]==Hastalikvedurumlar[tr][1]){
		Ayrilmissonuclar[dn][0]=Hastalikvedurumlar[tr][0];
		}
		else{}
	}
}	

for(i=0; i<Ayrilmissonuclar.length; i++){
	if(Ayrilmissonuclar[Ayrilmissonuclar.length-1-i][0]=="18633"){
	Ayrilmissonuclar.splice(Ayrilmissonuclar.length-1-i,1);
	}
	else if(Ayrilmissonuclar[Ayrilmissonuclar.length-1-i][0]=="85"){
	Ayrilmissonuclar.splice(Ayrilmissonuclar.length-1-i,1);	
	}
	else{}
}

// yazdırmaya hazırla
var Sondizi = new Array(Ayrilmissonuclar.length);
for(sdz=0; sdz<Sondizi.length; sdz++){
	Sondizi[sdz]="(" + Ayrilmissonuclar[sdz][2] + ") " + Ayrilmissonuclar[sdz][0] + " [" + Ayrilmissonuclar[sdz][1] + "]";
}

// yazdır
document.getElementById("sonuclistesi").value = Sondizi.join("\n");


//document.getElementById("sonuclistesi").value = Girilensemptomlar_2b.join("\n") + "sssssss";
	
	}