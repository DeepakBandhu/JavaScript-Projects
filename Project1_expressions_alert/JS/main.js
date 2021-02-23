function My_First_Function() {      //Defining Function
    var str = "Green Text";         //Defining Variable and Giving is a String
    var result = str.fontcolor("green");  //Fontcolor Method
    document.getElementById("Green_Text").innerHTML=result;  //Putting Value of Result into HTML Element with "Green_Text" id
}