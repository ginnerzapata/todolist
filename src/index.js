import { Folder, foldersArray, currentFolder } from "./folder";
import { Task } from "./task";

const $folderForm = document.getElementById("form-folder");

$folderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const $title = document.getElementById("folder-name");
  const folder = new Folder($title.value);
  foldersArray.push(folder);
  console.log(foldersArray);
  $title.value = "";
  Folder.renderFolders();
});

const $taskForm = document.getElementById("form-task");

$taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const $title = document.getElementById("task-name");
  const $date = document.getElementById("task-date");
  const $priority = document.getElementById("task-priority");

  const task = new Task($title.value, $date.value, $priority.value);
  currentFolder.tasks.push(task);
  task.render();
});

Folder.renderFolders();
