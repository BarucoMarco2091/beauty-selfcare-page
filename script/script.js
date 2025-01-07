AOS.init();

$(document).ready(function () {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-x');
    });
});

let count = 1;
document.getElementById('radio1').checked = true;

setInterval( function() {
    nextImage();
}, 2000);

function nextImage(){
    count++;
    if(count>4) {
        count = 1;
    }

    document.getElementById('radio'+count).checked = true;
}