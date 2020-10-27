var templateData = templateData ? templateData : {};
var templateTagMap = {
  h2: "innerHTML",
  img: "src",
  code: "innerHTML",
  a: "href"
};

templateData.code = [
  {
    h2: "Lilley.io",
    img: "img/logo_landscape.png",
    code:
      "Completion : 12/2016<br>Front-end  : 100%<br>Back-end   : 100%<br>Design     : 100%<br>Experience :<br><span class='indent'>- HTML</span><br><span class='indent'>- CSS</span> <br><span class='indent'>- JavaScript</span><br><span class='indent'>- Debian</span><br><span class='indent'>- Nginx</span><br>Summary    : ><br><span class='indent'>Set-up secure https web server image capable of 'click-to-deploy', using Mail-in-a-box to create mail and DNS services. Went back to basics and made the site with pure HTML5</span>",
    a: "https://lilley.io"
  },

  {
    h2: "The Curtain Works",
    img: "img/thecurtainworks.png",
    code:
      "Completion : 11/2016<br>Front-end  : 20%<br>Back-end   : 20%<br>Design     : 5%<br>Experience :<br><span class='indent'>- HTML</span><br><span class='indent'>- CSS</span> <br><span class='indent'>- JavaScript</span><br><span class='indent'>- PHP</span><br><span class='indent'>- MySQL</span><br>Summary    : ><br><span class='indent'>Inherited code-base of e-commerce site. Extended the CMS to allow for bulk upload of product data. Added new and extended existing features to flesh out the initial design. Took the site live and am now CTO</span>",
    a: "http://thecurtainworks.com"
  },

  {
    h2: "Squidler",
    img: "img/squidler.png",
    code:
      "Completion : 10/2016<br>Front-end  : 100%<br>Back-end   : 60%<br>Design     : 15%<br>Experience :<br><span class='indent'>- HTML</span><br><span class='indent'>- CSS</span> <br><span class='indent'>- JavaScript</span><br><span class='indent'>- Sass</span><br><span class='indent'>- Angular</span><br><span class='indent'>- Ionic</span><br><span class='indent'>- Node</span><br><span class='indent'>- ActionHeroJS</span><br><span class='indent'>- Redis</span><br><span class='indent'>- MongoDB</span><br><span class='indent'>- Git</span><br>Summary    : ><br><span class='indent'>Created hybrid app with another developer and designer. Used Ionic framework to run the app on web, Android and iOS. Implemented node API server using ActionHeroJS framework. Utilised very fast Redis databse for text and MongoDB for media files with TTL</span>",
    a: "https://squidler.com"
  },

  {
    h2: "R Chapman Harris",
    img: "img/RChapmanHarris.png",
    code:
      "Completion : 10/2015<br>Front-end  : 100%<br>Back-end   : 0%<br>Design     : 100%<br>Experience :<br><span class='indent'>- HTML</span><br><span class='indent'>- CSS</span> <br><span class='indent'>- PHP</span><br><span class='indent'>- WordPress</span><br>Summary    : ><br><span class='indent'>Created a WordPress site using an existing template. Hacked the template to create additional features</span>",
    a: "https://web.archive.org/web/20180807085543/http://rchapmanharris.com/"
  },
  {
    h2: "Matt Lilley",
    img: "img/mattlilley.png",
    code:
      "Completion : 09/2014<br>Front-end  : 100%<br>Back-end   : 0%<br>Design     : 100%<br>Experience :<br><span class='indent'>- HTML</span><br><span class='indent'>- CSS</span> <br><span class='indent'>- PHP</span><br><span class='indent'>- WordPress</span><br>Summary    : ><br><span class='indent'>Created a WordPress site using an existing template. Hacked the template to create additional features</span>",
    a: "http://mattlilley.com"
  },
  {
    h2: "Play with Particles",
    img: "img/playwithparticles.png",
    code:
      "Completion : 09/2014<br>Front-end  : 100%<br>Back-end   : 0%<br>Design     : 100%<br>Experience :<br><span class='indent'>- HTML</span><br><span class='indent'>- CSS</span> <br><span class='indent'>- JavaScript</span><br>Summary    : ><br><span class='indent'>Created an in-browser physics app that allows a user to control the motion of particles using clicks/touches. The front end is made with HTML5 and the backend is provided by <a href='https://github.com/mklilley/orbit' target='_blank'>GitHub pages</a>.</span>",
    a: "https://mklilley.github.io/orbit/"
  }
];
