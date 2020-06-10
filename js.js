$(document).ready(function(){
    /*--These next three functions alert the user of a description of the image when mouse down*/
    $("#imgBig").mousedown(function(){
        alert("Spicy Chicken Deluxe");
    });
    
    $("#imgBig2").mousedown(function(){
        alert("Orange Chicken");
    });
    
    $("#imgBig3").mousedown(function(){
        alert("Spicy Chicken");
    });
    
        $("#cfa-1").mousedown(function(){
        alert("Spicy Chicken Deluxe");
    });

        $("#cfa-2").mousedown(function(){
        alert("Spicy Chicken");
    });

        $("#pexpress-1").mousedown(function(){
        alert("Orange Chicken");
    });

        $("#pexpress-2").mousedown(function(){
        alert("Brocoli Beef");
    });

        $("#wendys-1").mousedown(function(){
        alert("Jr.Cheeseburger Deluxe");
    });

        $("#wendys-2").mousedown(function(){
        alert("Daves Double");
    });

    

    /*--These next three functions switch the images on the left with the images on the right when the mouse is hovered over the image*/
    $("#cfa-1").hover(function(){
        var src = $(this).attr('src');
        $("#01").attr('src',src);
    });
    
    $("#02").hover(function(){
       var src = $(this).attr('src');
       $("#imgBig2").attr('src',src);
    });
    
    $("#cfa-2").hover(function(){
       var src = $(this).attr('src');
       $("#01").attr('src',src);
    });
    
    $("#wendys-1").hover(function(){
       var src = $(this).attr('src');
       $("#03").attr('src',src);
    });
    
    $("#wendys-2").hover(function(){
       var src = $(this).attr('src');
       $("#03").attr('src',src);
    });
    
        
    $("#pexpress-1").hover(function(){
       var src = $(this).attr('src');
       $("#02").attr('src',src);
    });
    
        
    $("#pexpress-2").hover(function(){
       var src = $(this).attr('src');
       $("#02").attr('src',src);
    });
    
    
     $("#02").hover(function(){
       var src = $(this).attr('src');
       $("#imgBig2").attr('src',src);
    });
    
    $("#03").hover(function(){
       var src = $(this).attr('src');
       $("#imgBig3").attr('src',src);
    });
    


});