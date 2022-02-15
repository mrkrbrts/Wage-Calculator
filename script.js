// QUERY SELECTORS

const threshold = 12500;
const lowTaxRate = 0.2
const midTaxRate = 0.4
const highTaxRate = 0.6

let annualGrossDisplay = document.getElementById("annual-gross");
let monthlyGrossDisplay = document.getElementById("monthly-gross");

let annualGross = 0;
let monthlyGross = 0;


annualGrossDisplay.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        calculateGross();
        calculateNet();
    }
})



// MATHS

function calculateGross() {
    annualGross = annualGrossDisplay.value;
    monthlyGross = annualGross / 12;
    console.log(monthlyGross)
    monthlyGrossDisplay.innerText = monthlyGross.toFixed(2)

}

function calculateNet() {
    // if annualGross <=49999
    if (annualGross < 12500) {
        console.log("You're Not Earning Enough to be Taxed!") // let taxableAmount; annualGross - threshold [12,500]
        // let taxableAmount = annualGross - threshold;
        // // let tax = 0.2* taxableAmount;
        // let tax = lowTaxRate*taxableAmount;
        // // annualNet = annualGross - tax
        // let annualNet = annualGross - tax;
        // console.log(annualNet)
    } else if (annualGross <= 69999) {
        // let taxableAmount; annualGross - threshold [12,500]
        let taxableAmount = annualGross - threshold;
        // let tax = 0.2* taxableAmount;
        let tax = midTaxRate*taxableAmount;
        // annualNet = annualGross - tax
        let annualNet = annualGross - tax;
        console.log(annualNet.toFixed(2))
    } else if (annualGross > 70000) {
        // let taxableAmount; annualGross - threshold [12,500]
         let taxableAmount = annualGross - threshold;
        // let tax = 0.2* taxableAmount;
        let tax = highTaxRate*taxableAmount;
        // annualNet = annualGross - tax
        let annualNet = annualGross - tax;
        console.log(annualNet.toFixed(2))
    } 
    
}


