function rotate() {
    var lastChild = $('.slider div:last-child').clone();

    $('.slider div').removeClass('firstSlide')
    $('.slider div:last-child').remove();
    $('.slider').prepend(lastChild)
    $(lastChild).addClass('firstSlide');
}

window.setInterval(function(){
    rotate()
}, 4000);