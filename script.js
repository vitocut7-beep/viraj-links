// ===== PAGE LOAD ANIMATION =====

const card = document.querySelector(".card");


window.addEventListener("load", () => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px) scale(.95)";


    setTimeout(()=>{

        card.style.transition = "1s ease";

        card.style.opacity = "1";

        card.style.transform = "translateY(0) scale(1)";

    },200);


});



// ===== 3D CARD MOVEMENT =====


document.addEventListener("mousemove",(e)=>{


    const x = (window.innerWidth / 2 - e.clientX) / 30;

    const y = (window.innerHeight / 2 - e.clientY) / 30;


    card.style.transform = 
    `rotateY(${x}deg) rotateX(${y}deg)`;


});



// Reset when mouse leaves

document.addEventListener("mouseleave",()=>{

    card.style.transform="rotateY(0deg) rotateX(0deg)";

});




// ===== BUTTON CLICK EFFECT =====


const buttons = document.querySelectorAll(".buttons a");


buttons.forEach(button=>{


    button.addEventListener("click",function(e){


        let ripple=document.createElement("span");


        ripple.classList.add("ripple");


        this.appendChild(ripple);



        setTimeout(()=>{

            ripple.remove();

        },600);



    });


});