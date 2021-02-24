function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound:"Bark!"
    };
    delete Animal.Sound // this will make the value "undefined" in a browser
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}