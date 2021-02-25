function full_Sentence() {
    var part_1 = "I have made ";
    var part_2 = "this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence=part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}