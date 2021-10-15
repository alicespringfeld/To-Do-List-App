import { createElement } from "./elements.js";

export function createEnterTodoList(onSubmit) {
  const todoElement = createElement("input", {
    type: "text",
    required: true,
    placeholder: "Enter your Task!",
    className: "todo",
  });

  const buttonElement = createElement("button", {
    type: "submit",
    textContent: "Submit",
    className: "checkbutton",
  });

  const formElement = createElement(
    "form",
    {
      type: "form",
      className: "form",
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit(todoElement.value);
        todoElement.value = "";
      },
    },
    [todoElement, buttonElement]
  );

  return formElement;
}
