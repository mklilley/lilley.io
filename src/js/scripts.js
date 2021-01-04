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

  window.router = new Router();

  router.config({ mode: "history" });

  router.add(/info/, navHandler)
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

    var logo       = document.querySelector("#logo");
    var infoNav    = document.querySelector("#info-nav");
    var codeNav    = document.querySelector("#code-nav");
    var contactNav = document.querySelector("#contact-nav");

    logo.addEventListener("click", function(){router.navigate('/');});
    infoNav.addEventListener("click", function(){router.navigate('info');});
    codeNav.addEventListener("click", function(){router.navigate('code');});
    contactNav.addEventListener("click", function(){router.navigate('contact');});

    router.listen();

    router.check(router.getFragment());
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
    var route = router.getFragment();

    templateTargets.header.innerHTML =
      "<h1>" + route.charAt(0).toUpperCase() + route.slice(1);
    +"</h1>";

    var navDelay = navSwitch(route);

    setTimeout(function() {
      loadTemplate(route, "page");
    }, navDelay);
  }

  function homeHandler() {
    if (router.getFragment() === "") {
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

// Router Adapted from http://krasimirtsonev.com/blog/article/A-modern-JavaScript-router-in-100-lines-history-api-pushState-hash-url

"use strict";
function Router() {
  return {
    routes: [],
    mode: null,
    root: "/",
    config: function(options) {
      this.mode =
        options &&
        options.mode &&
        options.mode == "history" &&
        !!history.pushState
          ? "history"
          : "hash";
      this.root =
        options && options.root
          ? "/" + this.clearSlashes(options.root) + "/"
          : "/";
      return this;
    },
    getFragment: function() {
      var fragment = "";
      if (this.mode === "history") {
        fragment = this.clearSlashes(
          decodeURI(location.pathname + location.search)
        );
        fragment = fragment.replace(/\?(.*)$/, "");
        fragment =
          this.root != "/" ? fragment.replace(this.root, "") : fragment;
      } else {
        var match = window.location.href.match(/#(.*)$/);
        fragment = match ? match[1] : "";
      }
      return this.clearSlashes(fragment);
    },
    clearSlashes: function(path) {
      return path
        .toString()
        .replace(/\/$/, "")
        .replace(/^\//, "");
    },
    add: function(re, handler) {
      if (typeof re == "function") {
        handler = re;
        re = "";
      }
      this.routes.push({ re: re, handler: handler });
      return this;
    },
    remove: function(param) {
      for (var i = 0, r; i < this.routes.length, (r = this.routes[i]); i++) {
        if (r.handler === param || r.re.toString() === param.toString()) {
          this.routes.splice(i, 1);
          return this;
        }
      }
      return this;
    },
    flush: function() {
      this.routes = [];
      this.mode = null;
      this.root = "/";
      return this;
    },
    check: function(f) {
      var fragment = f || this.getFragment();
      for (var i = 0; i < this.routes.length; i++) {
        var match = fragment.match(this.routes[i].re);
        if (match) {
          if (fragment === match[0]) {
            match.shift();
            this.routes[i].handler.apply({}, match);
            this.current = match;

            return this;
          }
          document.querySelector(".error").classList.remove("hide");
        }
      }

      return this;
    },
    listen: function() {
      var self = this;
      var current = self.getFragment();
      var fn = function() {
        if (current !== self.getFragment()) {
          current = self.getFragment();
          self.check(current);
        }
      };
      clearInterval(this.interval);
      this.interval = setInterval(fn, 50);
      return this;
    },
    navigate: function(path) {
      path = path ? path : "";
      if (path !== this.getFragment()) {
        if (this.mode === "history") {
          history.pushState(null, null, this.root + this.clearSlashes(path));
        } else {
          window.location.href =
            window.location.href.replace(/#(.*)$/, "") + "#" + path;
        }
      }
      return this;
    }
  };
}
