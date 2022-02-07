"use strict";

var gProjs;

_createProjects();
function _createProject(id, name, title, desc, url, publishedAt, labels) {
  return {
    id,
    name,
    title,
    desc,
    url,
    publishedAt,
    labels,
  };
}

function _createProjects() {
  var projects = [];

  projects.push(
    _createProject(
      "pacman",
      "Pacman",
      "Eat some food beat some ghosts",
      makeLorem(50),
      "projs/pacman",
      1643199595000,
      ["Matrix", "Key Events"]
    )
  );

  projects.push(
    _createProject(
      "minesweeper",
      "Minesweeper",
      "Playing minesweeper is our passion. That's why we strive to make it the greatest game in the world!",
      makeLorem(50),
      "projs/minesweeper",
      1643285995000,
      ["Matrix", "Mouse Events"]
    )
  );
  projects.push(
    _createProject(
      "inPictureGame",
      "In-Picture Game",
      "Guess what is in the picture",
      makeLorem(50),
      "projs/in-picture-game",
      1642940395000,
      ["Display", "css"]
    )
  );

  gProjs = projects;
}

function getProjs() {
  return gProjs;
}

function getProjById(projId) {
  const proj = gProjs.find((project) => projId === project.id);
  return proj;
}
