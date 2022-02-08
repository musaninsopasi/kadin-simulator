	function calc() {
		var obje_1 = document.kadin_simulatör.kadin_ismi.value;
		// section with names
		const objectNames = ["Melissa", "Sibel", "Melisa" ,"Melike" ,"İrem" , "Melda", "Beyza" , "Zeynep", "Gamze", ""];
		const üstünVarlıkName = ["Mehmet", "Salih", "Uğur" , "Uğur Can", "Ege", "Furkan" , "Mahmut", // ilk satır
		 "Mansur Kürşad", "Mansur", "Kürşat", "Kürşad", "Miraç", "Yücel", "Kubilay", "Hayati", "Serdal", // ikinci satır
		  "Bünyamin" , "Semih", "Mehmet", "Mehmet Ali", "Mehmet Can", "Berat", "Abdurrahman", "Gökberk", // üçüncü satır
		   "Ali", "Yasin", "Eyüp", "Celal Efe", "Celal", "Efe", "Barış", "Ahmet", "Hasan", "Tabuay", "Abdullah", "" ]
		const kürtName = ["Rojda" ,"Rojin", "Bawer", "Havin", "Azad" , "Reşit"];
		
		// section of situations
	
		if(obje_1 === "") return document.getElementById('sonuc').innerHTML="Bir değer gir.";
	
	
		if(objectNames.includes(obje_1)) {
			document.getElementById('sonuc').innerHTML="Cinsel Obje";
		}

		else if (üstünVarlıkName.includesİ(obje_1)) {
			document.getElementById('sonuc').innerHTML="Üstün Varlıklar"
		}


 		else if (kürtName.includes(obje_1)) {
 				document.getElementById('sonuc').innerHTML="KÜRT OROSPU ÇOCUĞU"
 				document.getElementById('sonuc').style.color="green";
 			} 
		 else {
			document.getElementById('sonuc').innerHTML="Böyle bir isim verilerimizde bulunmamaktadır!";
		}
	}	
	
	
