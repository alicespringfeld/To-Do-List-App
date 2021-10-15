import { createElement } from "./elements.js";

export function createTitleComponent() {
  const titleElement = createElement("h1", {
    textContent: "Today's To-Do-List",
    className: "title",
  });

  return titleElement;
}
