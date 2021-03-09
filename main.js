const degree = document.getElementById('degree')
const temp = document.getElementById('temp')
const result = document.getElementById('result')

const calcTemp = () => {
    if (isNaN(degree.value) || degree.value == "") {        
        alert("Please enter a valid number")
    }
    else if (temp.value === "fahrenheit") {
        result.innerHTML = Math.round(Number((degree.value - 32) / 1.8) * 100) / 100 + " &#8451;"
    } else if (temp.value === "celsius") {
        result.innerHTML = Math.round(Number(degree.value * 1.8 + 32) * 100) / 100 + " &#8457;"
    }
}