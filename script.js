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
const letter = document.querySelector(".letter")

const revealtimeline = gsap.timeline()

gsap.to("body", {
    "--deg":"360",
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut"
});

flap.addEventListener("click", () => {
    floating.pause()
    env_open = false

    gsap.to(".flap", { scaleY: -1, duration: 1, y: 0, ease: "power2.inOut" })
    const revealAni = revealtimeline
        .to(".letter", { zIndex: 4, duration: 2, y: -100 })
        .to(".letter", { scaleY: 4, scaleX: 2, duration: 1, y: 20 })


})
let n_ = 1
letter.addEventListener("click", () => {
    n_++;
    if (n_ == 4) {
        n_ = 1;
    }

    letter.src = `${n_}.png`
    gsap.to(".letter", {
        scaleY: 0.5, scale: 0.5
    })
    gsap.to(".letter", { scaleY: 4, scaleX: 2 })
})

if (!env_open) {
    floating.play()
}