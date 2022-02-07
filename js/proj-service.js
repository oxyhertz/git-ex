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
      "https://oxyhertz.github.io/pacman/",
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
      "https://oxyhertz.github.io/minesweeper/",
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
      "https://oxyhertz.github.io/in-picture/",
      1642940395000,
      ["Display", "css"]
    )
  );
  projects.push(
    _createProject(
      "touchNums",
      "Touch Nums",
      "Touch the numbers",
      makeLorem(50),
      "https://oxyhertz.github.io/touch-nums/",
      1642274095000,
      ["Matrix", "css"]
    )
  );
  projects.push(
    _createProject(
      "ballBoard",
      "Ball Board",
      "Ball Board Game",
      makeLorem(50),
      "https://oxyhertz.github.io/ball-board-game/",
      1642274095000,
      ["Matrix", "Mouse Events", "css"]
    )
  );
  projects.push(
    _createProject(
      "booksShop",
      "Books Shop",
      "Books shop smart table",
      makeLorem(50),
      "https://oxyhertz.github.io/book-proj/",
      1644002095000,
      ["Advanced DOM", "MVC", "css"]
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
