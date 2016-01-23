function validate(){
	var name= document.getElementById("name").value;
	var pass= document.getElementById("password").value;
	var date= document.getElementById("date").value;
	if(name=="") document.getElementById("huh").innerHTML="user name can't be empty";
	else if(pass !== "12345") document.getElementById("huh").innerHTML="incorrect password";
	else if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) document.getElementById("huh").innerHTML="date needs to be in mm/dd/yyyy format.";
	else document.getElementById("huh").innerHTML="Everthing is good to go!";
}