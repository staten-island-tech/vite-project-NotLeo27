import "../CSS/style.css";
import { Personas } from "./products";
import { DOMSelectors } from "./DOMSelectors";

function addCard() {
  Personas.forEach((persona, index) =>
    insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="persona-item-${personaItem}>
      <h1>${DOMSelectors.personaName}</h1>
      <p>${DOMSelectors.personalevel}</p>
      <p>${DOMSelectors.personaArcana}</p>
        </div>`
    )
  );
}
