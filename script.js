function checkEligibility(){
var name=document.getElementById("name").value;
var weight=parseInt(document.getElementById("weight").value);
var age=prompt("Enter Your Age");
var gap=age*2;
var status="";

if(weight>=60){
status="Fully Eligible";
}
else if(weight>=50){
status="Eligible with Checkup";
}
else{
status="Not Eligible";
}

var output="";
output+="<h3>Donor Information</h3>";
output+="Name : "+name+"<br>";
output+="Eligibility : "+status+"<br>";
output+="Next Donation Gap : "+gap+"<br><br>";
output+="<b>Camp Schedule Days</b><br>";
for(var i=1;i<=5;i++){
output+="Day "+i+"<br>";
}

document.getElementById("result").innerHTML=output;
}
