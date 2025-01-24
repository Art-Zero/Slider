const slides = document.querySelectorAll(".slide")
const controlls = document.querySelectorAll(".controll")

let slideIndex = 0;

function show(index) {
    slides[slideIndex].classList.remove("active")
    slides[index].classList.add("active")
    slideIndex = index
}

function autoplay() {
    let index = slideIndex + 1
    if(index >= slides.length) {
        index = 0
    }
    show(index)
}

controlls.forEach((e) => {
    e.addEventListener("click", () => {
        if(event.target.classList.contains("prev")) {
            let index = slideIndex - 1
            if(index < 0) {
                index = slides.length - 1
            }
            show(index)
        } else if(event.target.classList.contains("next")) {
            let index = slideIndex + 1
            if(index >= slides.length) {
                index = 0
            }
            show(index)
        }
    })
})

setInterval(autoplay, 5000)
show(slideIndex)