import {rotate} from "./animation.js";

async function getData() {
    const url = "https://api.nal.usda.gov/fdc/v1/foods/list?api_key=2up21fWYgySmPIkkwx2nsDgrXwuqeh4xJv9XouYs&query=gouda";
    const response = await fetch(url);
    return await response.json();
}

document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('title');
    rotate(heading, -30)
});

const btn = document.querySelector('#clickMe');
console.log(btn);

btn.addEventListener('click', async (e) => {
    const data = await getData();
    console.log(data[0].foodNutrients[0].name);

})