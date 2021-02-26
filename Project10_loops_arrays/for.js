var People=["Ashely", "Erika", "Eric", "Emma", "Derrick", "Deepak"];
var Content="";
var Y
function for_Loop() {
    for (Y=0;Y<People.length; Y++) {
    Content +=People[Y] + "<br>";
    }
    document.getElementById("List_of_People").innerHTML=Content;
}