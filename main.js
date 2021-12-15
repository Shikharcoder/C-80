var name_of_the_student_array = [];

function submit(){
    for (var j = 1; j <= 4; j++) {
        var name = document.getElementById("name_of_the_student_"+j).value;
        name_of_the_student_array.push(name);
    }
    console.log(name_of_the_student_array);
    
    var len = name_of_the_student_array.length;
    console.log(len);
    
    var display_array = [];
    for(var i = 0; i < len ; i++) {
        display_array.push("<h4>NAME- "+name_of_the_student_array[i]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    console.log(display_array);
    
    var remove_comma = display_array.join(" ");
    console.log(remove_comma);
    
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    document.getElementById("sort_button").style.display="inline-block";
    document.getElementById("name_of_the_student_1").value="";
    document.getElementById("name_of_the_student_2").value="";
    document.getElementById("name_of_the_student_3").value="";
    document.getElementById("name_of_the_student_4").value="";
}

function sorting(){
    name_of_the_student_array.sort();
    var len = name_of_the_student_array.length;
    console.log(len);
    
    var display_array = [];
    for(var i = 0; i < len ; i++) {
        display_array.push("<h4>NAME- "+name_of_the_student_array[i]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    console.log(display_array);
    
    var remove_comma = display_array.join(" ");
    console.log(remove_comma);
    
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
}