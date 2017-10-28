
$(document).ready(function(){
    var storage = window.localStorage;
    var identify = JSON.parse(localStorage.getItem("identify"));
    var length = storage.getItem("length");
        for(var i = 0; i < length ; i++){
            $(".wrap"+i).show();
           $(".wrap"+i +" "+".identify").text(identify[i]);
        }
});

