import "../CSS/style.css";
import { Personas } from "./products";
import { DOMSelectors } from "./DOMSelectors";

Personas.forEach((persona) =>
  DOMSelectors.personaList.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="persona-item-${persona.name}">
    <h1>${persona.name}</h1>
    <p>${persona.level}</p>
    <p>${persona.arcana}</p>
    <img id="persona-image-${persona.name}" src="${persona.image}" alt="Skibidi" />
    </div>`
  )
);
