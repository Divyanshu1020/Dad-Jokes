const jocke = document.getElementById("jocke");
const btn = document.getElementById("btn");
const url = "https://api.api-ninjas.com/v1/dadjokes?limit="
const apiKey = "V0CQjrZWkOPdTci6DwycNg==pHMJXDgzjbVWFgdR"

const option = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey},
}
async function callApi(){
   const respons = await fetch(url,option)
   const data = await respons.json()

   jocke.textContent = data[0].joke;
}

btn.addEventListener("click", callApi);