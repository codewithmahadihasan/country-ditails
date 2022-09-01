const functionOfCountyList = (name) => {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(data => displayCountres(data))
}

const displayCountres = (countries) => {

  const display = document.getElementById('sectionForAllElement')
  display.innerHTML = ``
  countries.forEach(country => {

    const countryDiv = document.createElement('div')

    countryDiv.innerHTML = `<div class="card w-72 glass text-primary-content mx-auto m-4 text-center h-60 ">
        <div class="card-body">
          <h2 class="card-title mx-auto mb-3">${country.name.common}</h2>
          <img class="w-28 mx-auto mb-3 h-16" src="${country.flags.svg}" alt="">
          <div class="card-actions justify-end">
            <button onclick="eventHendeler('${country.cca2}')" class="mx-auto btn btn-sm">About</button>
          </div>
        </div>
      </div>`
    display.appendChild(countryDiv)
  })


}


// Event Handeler 
const eventHendeler = (country) => {

  const url = `https://restcountries.com/v3.1/alpha/${country}`
  fetch(url)
    .then(res => res.json())
    .then(data => dataOfArray(data[0]))

}

const dataOfArray = (result) => {
  console.log(result)
  const displayresult = document.getElementById('result-output')
  const countryDiv = document.createElement('div')
  countryDiv.innerHTML = `
        <div class="card w-80 glass shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src="${result.coatOfArms.png}"
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title"> দেশ : ${result.name.common}</h2>
          <h2 class="card-title"> রাজধানী : ${result.capital ? result.capital[0] : ' No Capital'}</h2>
          <h2 class="card-title"> মহাদেশ : ${result.continents}</h2>
          <h2 class="card-title"> ভাষা : ${result.languages[Object.keys(result.languages)[0]]}</h2>
          <h2 class="card-title"> টাকা : ${result.currencies[Object.keys(result.currencies)[0]].name}</h2>
         
          
          
         
        </div >
      </div >

    `
  displayresult.innerText = ''

  displayresult.appendChild(countryDiv)




}
function button() {

  const inputFild = document.getElementById('input-field')
  functionOfCountyList(`${inputFild.value}`)
  inputFild.value = ''

}
functionOfCountyList('a')



