document.getElementsByTagName("BODY")[0].onresize = function() {changeImg()};
const changeImg = () => {
    if( window.outerWidth < 668 ) {
        document.getElementById("default-photo").src = "./img/girl.png";
    } else {
        document.getElementById("default-photo").src = "./img/girl-square.png";
    }
};
changeImg();
