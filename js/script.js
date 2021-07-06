let aboutOffset = $("#about").offset().top;
let teamOffset = $("#team").offset().top;
let serviceOffset = $("#service").offset().top;
let blogOffset = $("#blog").offset().top;
let contactOffset = $("#contact").offset().top;


$(window).scroll(function(){
   let wScroll = $(window).scrollTop();

   if(wScroll > aboutOffset - 80){
       $("#mainNav").css("backgroundColor" , 'rgba(0,0,0,.5)');
       $("#upBtn").fadeIn(500);
   }else{
    $("#mainNav").css("backgroundColor" , 'transparent');
    $("#upBtn").fadeOut(500)
   }
})


$("#upBtn").click(function(){
    $("html , body").animate({scrollTop:0} , 1000)
   // $("html , body").scrollTop(0)
    
})


// $("#aboutBtn").click(function(){
//     $("body , html").animate({scrollTop:aboutOffset} , 1000)
// })

// $("#teamBtn").click(function(){
//     $("body , html").animate({scrollTop:teamOffset} , 1000)
// })

// $("#servBtn").click(function(){
//     $("body , html").animate({scrollTop:serviceOffset} , 1000)
// })

// $("#blogBtn").click(function(){
//     $("body , html").animate({scrollTop:blogOffset} , 1000)
// })

// $("#conBtn").click(function(){
//     $("body , html").animate({scrollTop:contactOffset} , 1000)
// })

$("a").click(function(e){
    let aHref = $(e.target).attr("href") // msakt el href bta3 kol link
    let aHrefOffset = $(aHref).offset().top // b3d kol link 3n el top
   // console.log(aHref)

    $("body , html").animate({scrollTop:aHrefOffset} , 1000)
})