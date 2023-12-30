var tl = gsap.timeline();

tl


.from("#main #nav h1",{

    onStart:function(){

        $('#main #nav h1').textillate({ 
            in: {
                
                effect:'fadeInUp',
                callback:function(){
                    $('#main #nav h1').textillate('out')
                }

                },
            out: {
                effect:'fadeOutUp'
            
                }
        })
    }
 
})

.from("#main h1",{

    opacity:0,
    delay:1,

    onStart:function(){

        $('#main h1').textillate({ 
            in: {
                
                effect:'fadeInUp',
                callback:function(){
                  //  $('#main h1').textillate('out')
                }

                },
            out: {
                effect:'fadeOutUp'
            
                }
        })
    }
 
})


.from("#nav #part2 a",{

    opacity:0,
    delay:1,
    
    onStart:function(){

        $('#nav #part2 a').textillate({ 
            in: {
                
                effect:'fadeInUp',
                callback:function(){
                  //  $('#nav #part2 a').textillate('out')
                }

                },
            out: {
                effect:'fadeOutUp'
            
                }
        })
    }
 
})

.to("#main",{

    top:"-100%",
    delay:1,
    duration:1.2,
    ease:"Power4.out"

})

