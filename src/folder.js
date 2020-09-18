import { createHtmlElement, setId } from "./dom";

const $folder = document.querySelector("#folders .card");

class Folder {
  constructor(title) {
    this.title = title;
    this.id = setId();
    this.tasks = [];
  }

  render() {
    const $div = createHtmlElement("div", this.id, ["folder"], null);
    const $title = createHtmlElement("p", null, null, this.title);
    const $delete = createHtmlElement("img", null, ["delete"], null);
    $delete.src = "./img/delete.svg";
    $delete.addEventListener("click", () => {
      this.delete();
    });

    $div.appendChild($title);
    $div.appendChild($delete);

    $folder.appendChild($div);
    $div.addEventListener("click", () => {
      currentFolder = this;
      console.log(currentFolder.id);
      this.renderTasks();
      let foldersClass = document.querySelectorAll(".folder");
      foldersClass.forEach((f) => (f.classList.value = "folder"));
      if (!$div.classList.value.includes("active")) {
        $div.classList.add("active");
      } else return;
    });
  }

  delete() {
    console.log("deleted");
  }

  renderTasks() {
    const $tasks = document.querySelector("#task-container");
    $tasks.innerHTML = ``;
    this.tasks.forEach((task) => task.render());
  }

  static renderFolders() {
    $folder.innerHTML = "";
    foldersArray.forEach((folder) => folder.render());
  }
}

const foldersArray = [
  new Folder("Chores"),
  new Folder("movies I want to watch"),
];
let currentFolder = foldersArray[0];

export { Folder, foldersArray, currentFolder };
