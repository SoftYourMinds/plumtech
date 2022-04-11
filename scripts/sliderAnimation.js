

let cardsAnimation = document.querySelector(".catalog");
let slider = document.querySelector(".slider");
let counter = document.getElementById("counter");
let circlesElement= document.querySelector(".circles");
let activeRight = document.querySelector(".active-arrow-right");
let currentRight = document.querySelector(".current-arrow-right");
let next = document.querySelector(".next");
let activeLeft = document.querySelector(".active-arrow-left");
let currentLeft = document.querySelector(".current-arrow-left");
let prew = document.querySelector(".prew");
let i = 0;
let timerClear = "false";

const backgrounds = [
    "https://idei.club/uploads/posts/2021-04/1618921358_20-idei_club-p-chernaya-santekhnika-v-interere-vannikh-ko-21.jpg",
    "https://komplekt.com.ua/ckeditor/ckfinder/userfiles/files/Product/004/2226-002.jpg",
    "https://komplekt.com.ua/ckeditor/ckfinder/userfiles/files/Product/004/2226-003.jpg",
    "https://images.prom.ua/620484087_620484087.jpg"
];



for(let k = 0; k < backgrounds.length; k++){
    const div = document.createElement("div");    
    circlesElement.appendChild(div);
}

const circles = document.querySelectorAll(".circles>div");

next.addEventListener('mouseenter', () => {
    activeRight.style.opacity = "1";
    activeRight.style.transform = "translate(0px, 0px)";
    currentRight.style.transform = "translate(20px, 0px)";
});

next.addEventListener('mouseleave', () => {
    activeRight.style.transform = "translate(-20px, 0px)";
    currentRight.style.transform = "translate(0px, 0px)";
});

prew.addEventListener('mouseenter', () => {
    activeLeft.style.opacity = "1";
    activeLeft.style.transform = "translate(0px, 0px)";
    currentLeft.style.transform = "translate(-20px, 0px)";
});

prew.addEventListener('mouseleave', () => {
    activeLeft.style.transform = "translate(20px, 0px)";
    currentLeft.style.transform = "translate(0px, 0px)";
});


let setBackground = (() => { });
let getTimerClear = (() => { });
let setTimerClear = ((timerClear) => { });
let getCounter = (() => { });
let setCounter = ((counter)=> {});
let getCircles = (() => {});

function User(timerClear, i, backgrounds, circles) {
    let slider = document.querySelector(".slider");
    this.timerClear = timerClear;
    this.i = i;
    this.backgrounds = backgrounds;
    this.circles = circles;
    console.log(this.circles[0]);
    console.log(this.circles);
    this.setBackground = (() => {
        if(user.getTimerClear() == "false"){
            this.i = this.i + 1;
            if (this.i > this.backgrounds.length - 1) {
                this.i = 0;
            }
            getSlider().style.backgroundImage = "url(" + this.backgrounds[this.i] + ")";
            for (let k = 0; k < this.backgrounds.length; k++) {
                circles[k].style.border = "2px white solid";
                circles[k].style.background = "none";
            }
            circles[this.i].style.border = "2px #ffc000 solid";
            circles[this.i].style.background = "#ffc000";
        }
    });

    this.getTimerClear = (() => {
        return this.timerClear;
    });

    this.setTimerClear = ((newTimerClear) => {
        this.timerClear = newTimerClear;
    });

    this.getCounter = (()=>{
        return this.i;
    });

    this.setCounter = ((counter) => {
        this.i = counter; 
    });

    getSlider = () => {
        return slider;
    }
}

let user = new User(timerClear, i, backgrounds, circles);

circlesElement.addEventListener('click', (event) => {
    console.log(event);
    if (event.target.classList[0] != "circles") {
        circles.forEach((el, i) => {
            if (event.target === el){
                user.setCounter(i);
                slider.style.backgroundImage = "url(" + backgrounds[i] + ")";
                for (let k = 0; k < backgrounds.length; k++) {
                    circles[k].style.border = "2px white solid";
                    circles[k].style.background = "none";
                }
                circles[i].style.border = "2px #ffc000 solid";
                circles[i].style.background = "#ffc000";
                user.setTimerClear("true");
                setTimeout(() => {
                    user.setTimerClear("false");
                }, 5000);
            }
        });
    }
});

next.addEventListener('click', () => {
    i = user.getCounter() + 1;
    user.setCounter(i);
    if (i > backgrounds.length - 1) {
        user.setCounter(0);
        i = user.getCounter();
    }
    slider.style.backgroundImage = "url(" + backgrounds[i] + ")";
    for (let k = 0; k < backgrounds.length; k++) {
        circles[k].style.border = "2px white solid";
        circles[k].style.background = "none";
    }
    circles[i].style.border = "2px #ffc000 solid";
    circles[i].style.background = "#ffc000";
    user.setTimerClear("true");
    setTimeout(()=>{
        user.setTimerClear("false");    
    }, 5000);
});

prew.addEventListener('click', () => {
    i = user.getCounter() - 1;
    user.setCounter(i);
    if (i < 0) {
        user.setCounter(backgrounds.length - 1);
        i = backgrounds.length - 1;
    }
    slider.style.backgroundImage = "url(" + backgrounds[i] + ")";
    for (let k = 0; k < backgrounds.length; k++) {
        circles[k].style.border = "2px white solid";
        circles[k].style.background = "none";
    }
    circles[i].style.border = "2px #ffc000 solid";
    circles[i].style.background = "#ffc000";
    
    user.setTimerClear("true");
    setTimeout(() => {
        user.setTimerClear("false");
    }, 5000);
});

setInterval(() => {
    user.setBackground();
},5000);
