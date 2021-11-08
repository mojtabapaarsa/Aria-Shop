$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    center: false,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
})

$('.brands-carousel.owl-carousel ').owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    center: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 5
        }
    }
})

// BACK TO THE TOP 
const btnScrollToTop = document.querySelector('#btnScrollToTop');
btnScrollToTop.addEventListener('click', function () {
    window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
    });


document.addEventListener('scroll' , (e) =>{
    if(document.documentElement.scrollTop < 350){
        btnScrollToTop.style.display="none";
    }else{
        btnScrollToTop.style.display="block";
    }
})
// btnScrollToTop.addEventListener('click', function () {
//     // window.scrollTo(0,0);
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     })
// });

var urls = [
    '../assets/images/product-img-3.jpg',
    '../assets/images/product-img-4.jpg',
    '../assets/images/product-img-6.jpg',
    '../assets/images/product-img-7.jpg'
];
var options = {
    //thumbLeft:true,
    //thumbRight:true,
    //thumbHide:true,
    // width:400,
    // height:200,
};
$('#el').zoomy(urls,options);