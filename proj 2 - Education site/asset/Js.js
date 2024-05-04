// $('#owl-carousel').owlCarousel({
//     loop: true,
//     margin: 30,
//     dots: true,
//     nav: true,
//     items: 3,
// })



$('#owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    // nav:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})