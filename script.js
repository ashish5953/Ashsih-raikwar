function timelineone(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#home",
            start:"top top",
            // markers:true,
            scrub:1,
            end: "+=" + (window.innerHeight * 5),
            pin:true
        },
    })
    
    tl
    .from("#centerimage",{
        x:400
    })
    .to("#circle",{
        scale:.2,
        ease:Power1
    },"same")
    
    .to("#circle #bottom img",{
        rotate:"-180deg",
        ease:Power1,
        stagger:.05,
    },"same")
    
    .to("#smcircle",{
        scale:.6,
        ease:Power1
    
    },"same")
    .to("#overlay #nav",{
        color:"#fff",
        delay:-.2
    },"same")
    .to("#purple",{
        top:"50%",
        ease:Power1
    },"same")
    .to("#overlay #centerimage #cmtext",{
        opacity:0,
        delay:-.1
    },"same")
    .to("#centerimage img",{
        scale:0,
        ease:Power1,
        opacity:0
    },"same")
    
    
    .to("#overlay h1",{
        top:"150%",
        ease:Power1
    },"same")
    .to("#imagecontainer img",{
        scale:1.5,
        ease:Power0
    },"same")
    
    
    .to("#overlay #sech1",{
        top: "70%",
        ease:Power1,
        rotate:"0",
        delay:-.3
    },"samesame")
    .to("#smcircle , #circle",{
        scale:0,
        ease:Power1
    },"samesame")
    .to("#purple",{
        scale:-0,
        opacity:0,
        duration:.1,
        ease:Power1,
    },"samesame")
    
    .to("#sidepurple",{
        top:"0%",
        ease:Power1,
    },"samesame")
    .to("#sidepurple",{
        top:"-70%",
        delay:.6,
        ease:Power1,
    },"samesame")
    .to("#imagecontainer img",{
        scale:1,
        ease:Power0
    },"samesame")


}
function timelinetwo(){
    gsap.set("#soverlay #stop .circle",{top:"150%", scale:.5})
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#second",
                start:"top top",
                // markers:true,
                end:"100% 50%",
                scrub:1,
                end: "+=" + (window.innerHeight * 12),
                pin:true
        },
    })


    tl2
    .to(".circle",{
        top:"50%",
        scale:1,
        stagger:.1,
        ease:Power1
    })
    .to(".circle",{
        top:"50%",
        scale:1,
        left:"50%",
        ease:Power1
    })
    .to(".circle",{
        scale:.8,
        ease:Power1
    })
    .to(".circle",{
        scale:10,
        ease:Power1
    },"yooo")
    .to("#soverlay #nav",{
        color:"#fff",
        ease:Power0,
        delay:-.7
    })
    .to(".one",{
        top:"-100%",
        ease:Power1
    },"yooo")
    .to(".two",{
        top:"-100%",
        ease:Power1
    },"yooo")
    .to("#container .div2:nth-child(2)",{
        left:0,
        ease:Power1,
        duration:1
    },"yooo")
    
    .to("#stop h1",{
        left:"-300%",
        ease:Power1,
        duration:2
    },"same")
    .to("#sbtm h1:nth-child(2)",{
        opacity:0,
        ease:Power1,
        delay:.3
    },"same")
    .to("#sbtm h1:nth-child(3)",{
        opacity:1,
        ease:Power1,
        delay:.9
    },"same")
    .to(".two",{
        top:"-200%",
        ease:Power1
    },"yu")
    .to(".ree",{
        top:"-200%",
        ease:Power1,
        delay:-.1
    },"yu")
    .to("#container .div2:nth-child(3)",{
        left:0,
        ease:Power1,
        duration:1,
    },"yu")
    .to("#stop .circle",{
        ease:Power1,
        stagger:.1,
        delay:.6,
        background:"linear-gradient(to right, #D5A7B4,#B4AAD5)"
    },"same")
    .to(".five",{
        top:"0",
        ease:Power1,
        stagger:.1
    },"yu")
    .to(".five1",{
        bottom:"0%",
        ease:Power1
    },"yo")
    .to("#btmblock",{
        left:"-10%",
        ease:Power1,
        delay:.5

    },"yo")
    .to(".five2",{
        bottom:"0%",
        ease:Power1
    },"yo")
    .to("#btmblock2",{
        left:"-10%",
        ease:Power1,
        delay:.5
    },"yo")
    .to("#btmblock2",{
        left:"-15%",
        ease:Power1,
    })

    
   
    
    
   
    
}

window.addEventListener("DOMContentLoaded",function(){
    timelineone();
    timelinetwo();
})





