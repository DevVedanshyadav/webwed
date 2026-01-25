const floating = gsap.to(
    ".envlop", {
    y: 30,
    duration: 2,
    repeat: -1,
    yoyo: true,
}
)

let env_open = false

const flap = document.querySelector(".flap")
const revealtimeline = gsap.timeline()


flap.addEventListener("click", () => {
    floating.pause()
    env_open = false

    gsap.to(".flap", { scaleY: -1, duration: 1, y: 0, ease: "power2.inOut" })
    const revealAni = revealtimeline
                        .to(".letter",{zIndex:4,duration:2,y:-100})
                        .to(".letter",{scaleY:4,scaleX:2,duration:1,y:20})


})



if (!env_open) {
    floating.play()
}