const slides = [
"../../../asserts/slider/checkup_background.png", 
"../../../asserts/slider/checkup_background2.jpg",
"../../../asserts/slider/checkup_background3.jpeg",
"../../../asserts/slider/checkup_background4.jpg",
]

let counter = 0
let counterDisplay = 0

function sliderFn(isReverse) {
    const selectSlider = document.getElementById('slider')
    const selectDisplay = document.getElementById('display')

    if (window.screen.width < 880) {
        slides[0] = "../../../asserts/slider/doctor-working-table.png"
    }
    if (!isReverse) {
        counter--
        if (counter < 0) {
            counter = slides.length - 1
        }
        counterDisplay = counter % 4
    }
    if (isReverse) {
        counter++
        counterDisplay = counter % 4
    }
    console.log(`${"url(" + slides[counterDisplay] + ")"}`)
    selectSlider.style.backgroundImage = `${"url(" + slides[counterDisplay] + ")"}`

    selectDisplay.innerHTML = counterDisplay + 1
    

}