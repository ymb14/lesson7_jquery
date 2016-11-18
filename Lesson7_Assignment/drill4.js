/*
Program Name: Recipe Display Application
Author: Yonatan Bick
Date: 11/15/16
Filename: drill4.js
*/

//displays the next element after the current target

    function display(event) {
    
    
    $(event.currentTarget).next().fadeIn("slow");

    
    }

//end of display

//attach event listener to h3 elements to invoke display function when clicked
    
   //$("h3").click(display);
    
//displays and animates the next element after the current target

    function display2(event) {
    
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
    
    }
 
//attach event listener to h3 elements to invoke display function when clicked
    
    $("h3").click(display2) ;
    
 
 //end of display2
 
 //change the background color h3 element when mouse hovers over it
    $("h3").hover(function(){
        
    $(this).css("background-color", "pink");
    
    }, function(){
        
    $(this).css("background-color", "white");
    
    });
    
 //hover() will trigger display2 method each time mouse hovers over header
    $("h3").hover(display2);