import { createTitleComponent } from "./data/titleComponent.js";
import { createEnterTodoList } from "./data/enterTodoList.js";
import { createElement } from "./data/elements.js";

function createApp() {
  const appElement = document.querySelector(".app");

  // Title
  const titleComponent = createTitleComponent();

  appElement.append(titleComponent);

  //Form
  const enterToDo = createEnterTodoList(function (toDo) {
    let taskText = createElement(
      "div",
      {
        className: "taskList",
      },
      [
        createElement("p", { className: "task" }, [
          `${toDo}`,
          createElement("input", { type: "checkbox" }),
        ]),
      ]
    );
    appElement.append(taskText);
  });

  appElement.append(enterToDo);
}

createApp();
