



//simple Click Function
$(document).ready(function(){


        $("#buttonOne").on("click",function(){
            var message = $("#message").val();
            alert(message + "is here");
        });
    });

//Change Color On CLick 



//Form actions


// Custom Event Listners



//Session Handling




//Todo List


$(document).ready(function(){

    var inputVal;

    $("#todoButton").on("click",function(){
        inputVal = $("#todoInput").val();
        $(".list").append("<li>"+inputVal+"</li>");
    });

});
