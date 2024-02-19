const plans = document.querySelectorAll(".plans .plan");
const plansArray = Array.from(plans);

plansArray.forEach((el, index) => {
    el.addEventListener("click", () => {
        changePlan(index);
    })
})

function changePlan(index) {
    document.querySelector(".plan.active").classList.toggle("active");
    plans[index].classList.toggle("active");
}