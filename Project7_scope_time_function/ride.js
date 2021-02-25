function weight_Function() {
    Weight=document.getElementById("Weight").value;
    if (Weight>=80) {
        Ride = "You are able to go on the ride!";
    }
    else {
        Ride = "For your safety, you are not allowed on the ride!";
    }
    document.getElementById("What_Weight").innerHTML=Ride; 
}