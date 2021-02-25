function Description(Height, Hair, Age) {   //  i use three elements to make it a bit easier
    this.Description_Height= Height;
    this.Description_Hair= Hair;
    this.Description_Age= Age;
}
var Jack = new Description("6'3", "Silver", 21);
var Emily = new Description("5'6", "Blonde", 20);
var Erik = new Description("6'0", "Black", 22);
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Jack is " + Jack.Description_Height + " tall, has  " + Jack.Description_Hair + // the spaces in-between the quotes are to ensure it has 
    "  hair, and is " + Jack.Description_Age;  // proper spacing when displayed in the browser
}