function ageCalculator() {
	var data = document.getElementById("birthdate").value;
	var date_of_birth = data.split("/");


	if(data == null || data == "") {
		document.getElementById("error").innerHTML = "<p style='padding-top:0.4em;'>Please enter your date of birth!</p>";
		return false;
	} else {		 
		var year = data.split("/")[2];

		var age = Math.abs(2021 - year);
		  
		return document.getElementById("age").innerHTML = "Your Age in 2021 is " + age + " years. ";  
	}
}