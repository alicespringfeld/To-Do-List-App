import { createElement } from "/data/elements.js";

function createApp() {
  const appElement = document.querySelector(".app");

  // Title
  const titleComponent = createElement("h1", {
    className: "title",
    textContent: "Todays To-Do-List",
  });

  appElement.append(titleComponent);
}

/* const enterTodoList = createEnterTodoList(function (task) {
    alert(`You've added a new task!`);
  }); 

  appElement.append(enterTodoList);*/

createApp();
