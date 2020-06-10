/*window.onload = function() {  */ 

/*function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

    function checkCookie() {
        var user=getCookie("username");
            if (user != "") {
                alert("Welcome again " + user);
            } else {
                user = prompt("Please enter your name:","");
            if (user != "" && user != null) {
           setCookie("username", user, 30);
                }
            }
        }*/
    
    /*function cssLayout() {
    document.getElementById("css").href = this.value;
}


function setCookie(){
    var date = new Date("Februari 10, 2013");
    var dateString = date.toGMTString();
    var cookieString = "Css=document.getElementById("css").href" + dateString;
    document.cookie = cookieString;
}

function getCookie(){
    alert(document.cookie);
}
                function WriteCookie()
            {
               if( document.myform.customer.value == "" ){
                  alert("Enter some value!");
                  return;
               }
               cookievalue= escape(document.myform.customer.value) + ";";
               document.cookie="name=" + cookievalue;
               document.write ("Setting Cookies : " + "name=" + cookievalue );
                alert("Cookie Entered");
            }*/
function setCookie(){
    var object = {};
    object.fn = document.getElementById("FirstName").value;
    object.fn = document.getElementById("LastName").value;
    object.fn = document.getElementById("email").value;
    object.fn = document.getElementById("password").value;
    var jsongString = JSON.stringify(object);
    document.cookie = "myCookie = " + jsongString;
}

alert(document.cookie);

