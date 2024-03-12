const plans = document.querySelectorAll(".plans .plan");
const nextBtns = document.querySelectorAll("button.next");
const backBtns = document.querySelectorAll("button.back");
const forms = document.querySelectorAll(".form");
const checkboxesInputs = document.querySelectorAll(".step-3 input");
const checkboxes = document.querySelectorAll(".step-3 .checkbox");
const plansArray = Array.from(plans);
const nextBtnsArray = Array.from(nextBtns);
const backBtnsArray = Array.from(backBtns);
const checkboxesInputsArray = Array.from(checkboxesInputs);

let billingPeriod = 0;
let formData = {
    name:"",
    email:"",
    phone:""
}


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

checkboxesInputsArray.forEach((el, index) => {
    el.addEventListener("change", (event) => {
        event.preventDefault();
        checkFeature(index);
    })
});


function changePlan(index) {
    document.querySelector(".plan.active").classList.toggle("active");
    plans[index].classList.toggle("active");
}

function checkFeature(index) {
    checkboxes[index].classList.toggle("active")

}

function nextStep(index) {
    if (!saveToForm()) return;
    document.querySelector(".form.active").classList.toggle("active");
    forms[index+1].classList.toggle("active");
    document.querySelector(`.road .number.selected`).classList.toggle("selected");
    document.querySelector(`.road.step-${index+2} .number`).classList.toggle("selected");

}

function prevStep(index) {
    document.querySelector(".form.active").classList.toggle("active");
    forms[index].classList.toggle("active");
    document.querySelector(`.road .number.selected`).classList.toggle("selected");
    document.querySelector(`.road.step-${index+1} .number`).classList.toggle("selected");
}

function changeBillingPeriod(index) {
    billingPeriod = index
    document.querySelectorAll(".step-2 .checkbox p.blue-text").forEach(el => el.classList.toggle("active"));
    document.querySelectorAll(".checkbox p.yearly").forEach(el => el.classList.toggle("active"));
    document.querySelectorAll(".checkbox p.monthly").forEach(el => el.classList.toggle("active"));
}

function saveToForm(){
    let form = document.querySelector("form");
    let formInfo = new FormData(form);
    let passFlag = true;
    console.log(formInfo)
    for (var pair of formInfo.entries()) {
      formData[pair[0]]=pair[1];
      if (!pair[1]) passFlag=false;
    }
    return passFlag && checkForms();
}

function checkForms(){
    let emailChecked = /.+@.+\..+/.test(formData.email);
    let phoneChecked = /\+\d{8,}$/.test(formData.phone);
    console.log(phoneChecked)
}