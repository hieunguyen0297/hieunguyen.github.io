function hambergerClick(){
    let container = document.querySelector(".container");
    let rightPanel = document.querySelector(".right-panel");
    container.style.transform =  "perspective(100px) rotateY(3deg) scale(0.4, 0.6) translate(-22%, 0%)";
    container.style.transformStyle = "preserve-3d";
    container.style.transition = "transform 0.6s ease";
    container.style.border = "3px solid rgb(106, 106, 248)";
    rightPanel.style.opacity = "1";
    
}


function homeClick () {
    let container = document.querySelector(".container");
    let rightPanel = document.querySelector(".right-panel");
    container.style.transform =  "rotateY(0deg) ";
  
    container.style.transformStyle = "preserve-3d";
    container.style.transition = "transform 0.6s ease";
    container.style.border = "none";
    rightPanel.style.opacity = "0";
    rightPanel.style.transition = "all 0.5s ease";
    let project = document.querySelector("#project");
    project.style.opacity = "0";
    project.style.zIndex = "-1"
    let home = document.querySelector("#home");
    home.style.opacity = "1";
    let firstBand = document.querySelector(".first-band");
    let secondBand = document.querySelector(".second-band");
    firstBand.style.opacity = "1";
    secondBand.style.opacity = "0";
    
}


function projectClick() {
    let container = document.querySelector(".container");
    let rightPanel = document.querySelector(".right-panel");
    let project = document.querySelector("#project");
    project.style.opacity = "1";
    let home = document.querySelector("#home");
    home.style.opacity = "0";
    container.style.transform =  "rotateY(0deg) ";
    container.style.transformStyle = "preserve-3d";
    container.style.transition = "transform 0.6s ease";
    container.style.border = "none";
    rightPanel.style.opacity = "0";
    rightPanel.style.transition = "all 0.5s ease";
  
    let firstBand = document.querySelector(".first-band");
    let secondBand = document.querySelector(".second-band");
    firstBand.style.opacity = "0";
    secondBand.style.opacity = "1";
    
    project.style.zIndex = "1";
    
}

function gmail() {
        window.open("mailto:hieunguyen971002@gmail.com")
}

function gitHub() {
    window.open("https://github.com/hieunguyen0297")
}

function linkIn(){
    window.open("http://linkedin.com/in/hieu-nguyen-b56ab3194")
}

function instagram(){
    window.open("https://www.instagram.com/hieu1002");
}


