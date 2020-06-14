"use strict";
(function(window) {
  var templateTargets = {
    body: "",
    header: "",
    page: ""
  };

  var content;
  var navs;
  //var templates;
  window.imgLoaded = imgLoaded;

  window.Router = new router();

  Router.config({ mode: "history" });

  Router.add(/info/, navHandler)
    .add(/code/, navHandler)
    .add(/contact/, navHandler)
    .add(homeHandler);

  document.addEventListener("DOMContentLoaded", init);

  ///////////////////////////////////

  function init(event) {
    //templates = document.querySelector('link[rel="import"]').import;

    templateTargets.body = document.body;
    loadTemplate("main", "body", { append: true });

    templateTargets.header = document.querySelectorAll(".header")[0];
    templateTargets.page = document.querySelectorAll(".page-content")[0];
    content = document.querySelectorAll(".view-content")[0];
    navs = document.querySelectorAll(".nav p");

    Router.listen();

    Router.check(Router.getFragment());
  }

  function imgLoaded(img) {
    var imgWrapper = img.parentNode;

    imgWrapper.className += imgWrapper.className ? " loaded" : "loaded";
  }

  function loadTemplate(name, target, options) {
    var t = document.querySelector("#" + name + "-template");
    var data = templateData[name];
    if (!options || !options.append) {
      templateTargets[target].innerHTML = "";
    }
    if (data) {
      for (var i = 0; i < data.length; i++) {
        var d = data[i];

        var keys = Object.keys(d);
        for (var j = 0; j < keys.length; j++) {
          var property = templateTagMap[keys[j]];
          var value = d[keys[j]];
          t.content.querySelector(keys[j])[property] = value;
        }

        var clone = document.importNode(t.content, true);
        templateTargets[target].appendChild(clone);
      }
    } else {
      var clone = document.importNode(t.content, true);
      templateTargets[target].appendChild(clone);
    }
  }

  function navSwitch(name) {
    content.classList.add("expand");
    templateTargets.header.classList.add("expand");
    var navDelay = 400;
    for (var j = 0; j < navs.length; j++) {
      if (navs[j].classList.contains("active")) {
        navDelay = 0;
        navs[j].classList.remove("active");
      }
    }

    document.querySelector("#" + name + "-nav").classList.add("active");

    return navDelay;
  }

  function navHandler() {
    var route = Router.getFragment();

    templateTargets.header.innerHTML =
      "<h1>" + route.charAt(0).toUpperCase() + route.slice(1);
    +"</h1>";

    var navDelay = navSwitch(route);

    setTimeout(function() {
      loadTemplate(route, "page");
    }, navDelay);
  }

  function homeHandler() {
    if (Router.getFragment() === "") {
      templateTargets.page.innerHTML = "";
      content.classList.remove("expand");
      templateTargets.header.classList.remove("expand");
      for (var j = 0; j < navs.length; j++) {
        navs[j].classList.remove("active");
      }
    } else {
      document.querySelector(".error").classList.remove("hide");
    }
  }
})(window);
