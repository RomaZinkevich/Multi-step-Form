const inputButtons = document.querySelectorAll('.radio-container input');
const inputButtonsArray = Array.from(inputButtons);

for (let i=0; i<2; i++) {
    let btn = inputButtonsArray[i];
    btn.addEventListener("change", () => {
        animation(i);
    })
}

function animation(index) {
    let x = index===0 ? 27 : -27;
    gsap.from(`.radio-container:nth-of-type(${index+1}) .checkmark`, {duration:0.1, x: x, ease: "none"});
}