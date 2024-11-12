import "../CSS/style.css";
import "../CSS/variables.css";
import { Personas } from "./products";
import { DOMSelectors } from "./DOMSelectors";

function addCards() {
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

addCards();

/* 

function SortBy() {
  movies.filter((movie) => movies.actors.includes("James Earl Jones"))

}

*/
