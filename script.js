
var clientClickWindow = document.getElementById("clientClickWindow");

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 105 ){ 
        var header = document.getElementById("logoMenuSearchShopbag");
        header.style.position = "fixed";
        header.style.background = "linear-gradient(-45deg, #4e3427, #211b19";
        
    }
    else{
        var header = document.getElementById("logoMenuSearchShopbag");
        header.style.position = "absolute";
        header.style.background = "transparent";
        header.style.width = "100%";

    }
};


function myFunction() {
clientClickWindow.style.display=("block")
};

function closeFunction(){
    clientClickWindow.style.display=("none")
}
