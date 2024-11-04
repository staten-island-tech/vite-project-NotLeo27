import "../CSS/style.css";
import { Personas } from "./products";
import { DOMSelectors } from "./DOMSelectors";

function addCard() {
  Personas.forEach((persona, index) =>
    DOMSelectors.selection.insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="persona-item-${persona.name}>
      <h1>${persona.name}</h1>
      <p>${persona.level}</p>
      <p>${persona.arcana}}</p>
      <img id="persona-image-${persona.name}" src="${persona.image}" alt="Skibidi" />
      </div>`
    )
  );
}

addCard();
