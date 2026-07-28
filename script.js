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


// ===== MOBILE TOUCH EFFECT =====


card.addEventListener("touchstart",()=>{

    card.style.transform="scale(0.97)";

});


card.addEventListener("touchend",()=>{

    card.style.transform="scale(1)";

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
