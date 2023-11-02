let mouseFollower = document.querySelector(".mouse-follower");
// let item = document.querySelectorAll(".item");
//mouse follower using JS only
// window.addEventListener("mousemove", (details) => {
//     mouseFollower.style.transform = `translate(${details.clientX}px,${details.clientY}px)`;
// })


//Mouse Follower using GSAP~ pefer this one
window.addEventListener("mousemove", (details)=>{
    gsap.to(mouseFollower,{
        x: details.clientX,
        y: details.clientY,
        duration: .3,
        ease: Expo
    })
})

let items = document.querySelectorAll(".item");

items.forEach(function(item){
    item.addEventListener("mouseenter", () => {
        gsap.to(mouseFollower,{
            scale:8
        })
        gsap.to(".item span",{
            color: "#000",
            duration: .5
        })
    })
    item.addEventListener("mouseleave", () => {
        gsap.to(mouseFollower,{
            scale:1
        })
        gsap.to(".item span",{
            color: "#fff"
        })
    })
})