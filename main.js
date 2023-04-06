const searchBar = document.getElementById("searchBar");
const screen = document.getElementById("output");
let dummydata;


let currentCounres;
var latest;

let fetchCouries = async function () {
  let res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
  let data = await res.json();
  localStorage.setItem("countries", JSON.stringify(data));
  return data;
};

currentCounres = fetchCouries();
console.log(currentCounres, "currentCounres");

const displayScreen = async (val) => {
  let countries = await val;
  let output = '<h2 class="container">Countries</h2>';

  countries.forEach(function (country) {
    output += `
    <div class="wrapper">
        <p>Official Name: ${country.name.official}</p>
        <p>Common Name: ${country.name.common}</p>
        <img src='${country.flags.png}'>
    </div>`;
  });

  screen.innerHTML = output;
};

console.log(latest, "latest");

displayScreen(currentCounres);

searchBar.addEventListener("keyup", (e) => {
  //console.log(e.target.value, "e.target.value");
  let countries = JSON.parse(localStorage.getItem("countries"));

  let filteredCountry = countries.filter((country) => {
    let name = country.name.common;
    let names = country.name.official;
    if (
      name.toLowerCase().includes(e.target.value.toLowerCase())) {
      return true;
    }
  });
  displayScreen(filteredCountry);
});

let boobs = false;
const nasty = document.getElementById("darkMode");
nasty.addEventListener("click", darkMode);
function darkMode() {
  boobs = !boobs;
  bra = document.body;
  if (boobs === true) {
    bra.style.backgroundColor = "black";
    bra.style.color = "white";
  } else {
    bra.style.backgroundColor = "white";
    bra.style.color = "black";
  }
}