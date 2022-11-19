const twelveOunce = document.getElementById("12oz");
const sixteenOunce = document.getElementById("16oz");
const twentyOunce = document.getElementById("20oz");


const runCheckA = () => {
    console.log("You clicked 12")
    twelveOunce.setAttribute("style", "color: blue;")
    
   
}

const runCheckB = () => {
    console.log("You clicked 16")
    sixteenOunce.setAttribute("style", "color: blue;")
   
}
const runCheckC = () => {
    console.log("You clicked 20")
  
}

twelveOunce.addEventListener("click", runCheckA)
sixteenOunce.addEventListener("click", runCheckB)
twentyOunce.addEventListener("click", runCheckC)