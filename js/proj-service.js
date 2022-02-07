"use strict";

var gProjs;

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
}
