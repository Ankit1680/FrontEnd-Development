var tl = gsap.timeline();

tl
.from("#nav",{

    delay:1,
    opacity:0,
    y:20,
    duration:1
})

.from("#nav #part2",{

    opacity:0,
    y:20,
    duration:1
})

.from("#main h1",{

    opacity:0,
    scale:1.4,
    duration:1
})

.from(["#img","#img2"],{

    x:-60,
    scale:1.5,
    opacity:0,
    duration:1
})

.from(["#img3"],{

    x:60,
    scale:1.5,
    opacity:0,
    duration:1,
    delay:"-1"
})

.from("#nav #part2 a",{

    scale:1.8,
    opacity:0,
    y:50,
    duration:2
})

.to("#main h1",{

    y:20,
    yoyo:"true",
    repeat:"-1"
})