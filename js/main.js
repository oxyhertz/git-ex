"use strict";
$(init());

$(".portfolio-link").click(onOpenModal);

function init() {
  renderProjs();
}

function renderProjs() {
  var projs = getProjs();
  var strHTMLs = projs.map((project) => {
    return `
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-id="${project.id}" data-toggle="modal" href="#portfolioModal">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/${project.id}.jpg" alt="" />
    </a>
    <div class="portfolio-caption">
      <h4>${project.name}</h4>
      <p class="text-muted">${project.title}</p>
    </div>
  </div>
      `;
  });

  $(".portfolio-items").html(strHTMLs);
}

function onOpenModal() {
  const proj = getProjById(this.dataset.id);

  $(".modal-body h2").text(proj.name);
  $(".modal-body .item-intro").text(proj.title);
  $("modal-body .modal-desc").text(proj.desc);
  $(".modal-project-date").text();
}
