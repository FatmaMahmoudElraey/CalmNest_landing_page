
// loading to init...........

$(document).ready(function(){
    $('#ready').fadeOut(2000, function(){
        $('body').css('overflow','visible');
        $('#topBtn').css('display' , 'none')
    })
})


// when click event on topbtn & toggle 

$('#topBtn').click(function(){
    $('html , body').animate({scrollTop : 0}, 500);
})

$('#btnTopFooter').click(function(){
    $('html , body').animate({scrollTop : 0}, 500);
})

$(window).scroll(function(){

    let featuresOffset = $('#features').offset().top;
    let aboutOffset = $('#about').offset().top;

    if($(window).scrollTop() > featuresOffset && $(window).scrollTop() < aboutOffset)
    {
        $('#topBtn').fadeIn(500);
    }
    else
    {
        $('#topBtn').fadeOut(250);
    }
})

// change toggle navbar style

$('.navbar .navbar-toggler').click(()=>{
    $('.navbar .navbar-toggler').toggleClass('convert');
})


// add class active to an active link and smooth move.....

$('.navbar-nav .nav-item a').click(function(){
    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active');
    let currentSection = $(this).attr('href');
    let currentOffset = $(currentSection).offset().top;
    $('html , body').animate({scrollTop : currentOffset}, 500);
})

