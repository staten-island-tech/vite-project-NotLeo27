const DomSelectors = {
  personaList: document.getElementById("persona-list"), // The container for the list of personas
  personaItem: (index) => document.getElementById(`persona-item-${index}`), // Individual persona items
  personaName: (index) => document.getElementById(`persona-name-${index}`), // Persona name
  personaLevel: (index) => document.getElementById(`persona-level-${index}`), // Persona level
  personaArcana: (index) => document.getElementById(`persona-arcana-${index}`), // Persona arcana
  personaImage: (index) => document.getElementById(`persona-image-${index}`), // Persona image
};
