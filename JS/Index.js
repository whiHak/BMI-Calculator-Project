const age = $('#age')
const male = $('#male')
const female = $('#female')
const height = $('#height')
const weight = $('#weight')
const calcBtn = $('#btn')
const result = document.getElementById('result-BMI')
// const ALLInputs = document.getElementsByTagName('input')
const error = $('.error')


function throwError(){
    var ageErr = document.getElementById(error[0].id)
    var heightErr = document.getElementById(error[1].id)
    var weightErr = document.getElementById(error[2].id)
    // var gnErr = document.getElementById(error[3].id)
    if(age.val() === '' || age.val() === undefined || age.val() < 1 || age.val() > 150 || age.val() === NaN){
        ageErr.style.display = 'block';
    }
    else if(height.val() === '' || height.val() === undefined || height.val() === NaN || height.val() < 1){
        heightErr.style.display = 'block';
    }else if(weight.val() === '' || weight.val() === undefined || weight.val() === NaN || weight.val() < 3){
        weightErr.style.display = 'block';
    }else{
        error.css('display', 'none')
        return true;
    }
}
calcBtn.click(() => {
    if(throwError()){
        calculateBMI();
    }
})

function calculateBMI(){
    const BMI = Number(weight.val()/((height.val()/100)*(height.val()/100)))
    result.innerHTML = BMI.toFixed(2) 
    age.val('')
    height.val('')
    weight.val('')
}

// calcBtn.addEventListener('click', () => {
//     console.log(throwError())
// })


