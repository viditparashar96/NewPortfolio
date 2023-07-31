function loco(){

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
loco()
document.querySelectorAll(".side-nav-anime").forEach((sideanime)=>{

    sideanime.addEventListener('mouseenter',()=>{
        console.log("Mouse  enter")
        document.querySelectorAll('.upperaa').forEach((elm)=>{
            elm.style.transform="translateY(-100%)"
        })
    })
})
document.querySelectorAll(".side-nav-anime").forEach((sideanime)=>{

    sideanime.addEventListener('mouseleave',()=>{
        console.log("Mouse leaved")
        document.querySelectorAll('.upperaa').forEach((elm)=>{
            elm.style.transform="translateY(0)"
        })
    })
})

// CURSOR---->
var cursor=document.querySelector(".cursor")
window.addEventListener('mousemove',(dets)=>{
    // console.log(dets.clientX,dets.clientY)
    cursor.style.transform=`translate(${dets.clientX-20}px,${dets.clientY-10}px)`
})

// main heading entering mouse animation
var mainHeading=document.querySelector("#main-heading")
mainHeading.addEventListener('mouseenter',()=>{
    cursor.style.width='400px'
    cursor.style.height='400px'

})
mainHeading.addEventListener('mouseleave',()=>{
    cursor.style.width='30px'
    cursor.style.height='30px'
})

// Icon move on cursor move
var x=0
var y=0


var insta=document.querySelector('#insta')
insta.addEventListener('mouseenter',(det)=>{

    // insta.style.top=det.y+"px"
    // insta.style.left=det.x+"px"
    insta.style.transform=`translate(${det.clientX-20}px,${det.clientY-10}px)`


    window.addEventListener('mousemove',(dets)=>{
    
        // insta.style.top=(dets.y-25)+"px"
        // console.log(dets.clientX,dets.clientY)
        // insta.style.left=(dets.x-26)+"px"
    insta.style.transform=`translate(${dets.clientX-93}px,${dets.clientY-625}px)`

    if(dets.clientX<60 || dets.clientX>90){
    insta.style.transform='translate(0px,0px)'

    }
    else if(dets.clientY<76 || dets.clientY>680)

    insta.style.transform='translate(0px,0px)'

    })
    

})
var instabox=document.querySelector('.insta-box')
var rect=instabox.getBoundingClientRect()
console.log(rect)
var clamp=gsap.utils.clamp(-5,20,0)
gsap.to("#insta",{
    x:clamp
})