const degree = document.getElementById('degree')
const temp = document.getElementById('temp')
const result1 = document.getElementById('result1')
const result2 = document.getElementById('result2')

const calcTemp = () => {
    if (isNaN(degree.value) || degree.value == "") {        
        alert("Please enter a valid number")
    }
    else if (temp.value === "fahrenheit") {
        result1.innerHTML = Math.round(Number((degree.value - 32) / 1.8) * 100) / 100 + " &#8451;"
        result2.innerHTML = (Math.round(Number(((degree.value - 32) / 1.8) + 273.15) * 100) / 100) + " &#8490;"
    } else if (temp.value === "celsius") {
        result1.innerHTML = Math.round(Number(degree.value * 1.8 + 32) * 100) / 100 + " &#8457;"
        result2.innerHTML = Math.round((+degree.value + +273.15) * 100) / 100 + " &#8490;"
    } else if (temp.value === "kelvin") {
        kelvinToCelsius = degree.value - 273.15
        result1.innerHTML = Math.round((kelvinToCelsius) * 100) / 100 + " &#8451;"
        result2.innerHTML = Math.round((kelvinToCelsius * 1.8 + 32) * 100) / 100 + " &#8457;"
    }
}