const plans = document.querySelectorAll(".plans .plan");
const nextBtns = document.querySelectorAll("button.next");
const backBtns = document.querySelectorAll("button.back");
const forms = document.querySelectorAll(".form");
const plansArray = Array.from(plans);
const nextBtnsArray = Array.from(nextBtns);
const backBtnsArray = Array.from(backBtns);

plansArray.forEach((el, index) => {
    el.addEventListener("click", () => {
        changePlan(index);
    })
});

nextBtnsArray.forEach((el, index) => {
    el.addEventListener("click", (event) => {
        event.preventDefault();
        nextStep(index);
    })
});

backBtnsArray.forEach((el, index) => {
    el.addEventListener("click", (event) => {
        event.preventDefault();
        prevStep(index);
    })
});


function changePlan(index) {
    document.querySelector(".plan.active").classList.toggle("active");
    plans[index].classList.toggle("active");
}

function nextStep(index) {
    document.querySelector(".form.active").classList.toggle("active");
    forms[index+1].classList.toggle("active");
    document.querySelector(`.road .number.selected`).classList.toggle("selected");
    document.querySelector(`.road.step-${index+2} .number`).classList.toggle("selected");
}

function prevStep(index) {
    console.log(index)
    document.querySelector(".form.active").classList.toggle("active");
    forms[index].classList.toggle("active");
    document.querySelector(`.road .number.selected`).classList.toggle("selected");
    document.querySelector(`.road.step-${index+1} .number`).classList.toggle("selected");
}