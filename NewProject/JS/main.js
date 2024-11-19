import "../CSS/variables.css";
import "../CSS/style.css";
import { Personas } from "./products";
import { DOMSelectors } from "./DOMSelectors";

function clearCards() {
  DOMSelectors.personaList.innerHTML = "";
}

function addCards(Personas) {
  Personas.forEach((persona) =>
    DOMSelectors.personaList.insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="persona-item-${persona.name}">
      <div class="arcana"> <p>${persona.arcana}</p> </div>
      <div class="level"> <p>${persona.level}</p> </div>
      <div class="name"> <p>${persona.name}</p> </div>
      <div class="price"> <p>${persona.price}</p> </div>
      
      <div class="hover-tab">
          <img src=${persona.image} alt="${persona.name} image placeholder" />
      </div>

      </div>`
    )
  );
}

function sortPersonas(personas, criterion) {
  return [...personas].sort((a, b) => {
    if (criterion === "level") {
      return a.level - b.level;
    } else {
      return a[criterion].localeCompare(b[criterion]);
    }
  });
}

function handleTabClick(event) {
  const tabId = event.target.id; //returns the id of the detected event
  let criterion;

  if (tabId === "sort-level") {
    criterion = "level";
  } else if (tabId === "sort-arcana") {
    criterion = "arcana";
  } else if (tabId === "sort-abc") {
    criterion = "name";
  }

  const sortedPersonas = sortPersonas(Personas, criterion);

  // Clear and add sorted cards
  clearCards();
  addCards(sortedPersonas);
}

function filterByPrice(event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  const minPrice = parseFloat(DOMSelectors.min.value) || 0; // reads value from input fields
  const maxPrice = parseFloat(DOMSelectors.max.value) || Infinity; // reads value from input fields

  const filteredPersonas = Personas.filter(
    (persona) => persona.price >= minPrice && persona.price <= maxPrice
  );

  clearCards();
  addCards(filteredPersonas);
}

const switchThemeButton = document.getElementById("switchThemeButton");

// function to switch the theme
switchThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("p3-theme"); // toggles P3R theme class

  if (document.body.classList.contains("p3-theme")) {
    switchThemeButton.classList.add("p3-theme");
  } else {
    switchThemeButton.classList.remove("p3-theme");
  }
});

DOMSelectors.criteria.forEach((tab) =>
  tab.addEventListener("click", handleTabClick)
);

document.getElementById("money").addEventListener("submit", filterByPrice);

addCards(Personas);
/* 

function SortBy() {
  movies.filter((movie) => movies.actors.includes("James Earl Jones"))

}

*/
