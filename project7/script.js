
var tl = gsap.timeline({

    repeat: -1
});

tl

.to(".imagecontainer", {
    duration:2.5,
    ease: "expo.easeInOut",
    width:"100%"
    
    }, 'a')


.to(".text  h1", {

    ease:"expo.easeInOut",
    stragger: 2,
    top: 0
    
},'a')

.to(".text  h1", {

    delay: 2,
    ease:"expo.easeInOut",
    stragger: 2,
    top: "-100%"
    
},'a')

