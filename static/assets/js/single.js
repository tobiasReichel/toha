"use strict";

var isMobile = false, isTablet = false, isLaptop = false;
(function ($) {
  jQuery(document).ready(function () {
    function detectDevice() {
      if (window.innerWidth <= 425) {
        isMobile = true;
        isTablet = false;
        isLaptop = false;
      } else if (window.innerWidth <= 768) {
        isMobile = false;
        isTablet = true;
        isLaptop = false;
      } else {
        isMobile = false;
        isTablet = false;
        isLaptop = true;
      }
    }
    detectDevice();

    // =========== Add anchor to the headers ================
    function addAnchor(element) {
      element.innerHTML = `<a href="#${element.id}" class="header-anchor">${element.innerHTML}<sup><i class="fas fa-link"></i></sup></a>`;
    }

    var postContent = document.getElementById("post-content");
    if (postContent != null) {
      var headerTypes = ["h1", "h2", "h3", "h4", "h5", "h6"];
      for (var i = 0; i < headerTypes.length; i++) {
        var headers = postContent.querySelectorAll(headerTypes[i]);
        if (headers) {
          headers.forEach(addAnchor);
        }
      }
    }

    // =============== Make TOC Compatible wit Bootstrap Scroll Spy ========
    // add "navbar" class to the "nav" element
    let toc = document.getElementById("TableOfContents");
    toc.classList.add("navbar");
    // add "nav-pills" class to the "ul" elements
    let elems = toc.getElementsByTagName("ul");
    for (let i = 0; i < elems.length; i++) {
      elems[i].classList.add("nav-pills");
    }
    // add "nav-item" class to the "li" elements
    elems = toc.getElementsByTagName("li");
    for (let i = 0; i < elems.length; i++) {
      elems[i].classList.add("nav-item");
    }
    // add "nav-link" class to the "a" elements
    elems = toc.getElementsByTagName("a");
    for (let i = 0; i < elems.length; i++) {
      elems[i].classList.add("nav-link");
    }
  });
})(jQuery);

// toggle sidebar on click
function toggleSidebar() {
  document.getElementById("sidebar-holder").classList.toggle("hide");
  document.getElementById("sidebar-toggler").classList.toggle("align-left");
  console.log("Sidebar Toggler clicked...");
  // if it is mobile device. then scroll to top.
  // if (isMobile && $("#sidebar").hasClass("hide")) {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }
}

// toggle table of contents on click
function toggleTOC() {
  document.getElementById("toc-holder").classList.toggle("minimize");
  let btn = document.getElementById("toc-toggler");
  btn.children[0].classList.toggle("fa-compress");
  btn.children[0].classList.toggle("fa-stream");
}
