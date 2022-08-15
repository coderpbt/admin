"use strict";
//arrow toggle cls Js
(function () {
    var button = document.querySelector(".clickArrow");
    var box = document.querySelector(".toggleArrow");

    button.addEventListener("click", function () {
        box.classList.toggle("addToggleRemove");
    });
})();

// mobile menu dropdown js
var allHasChildren = document.querySelectorAll(".prent-dropdown");
for (var x = 0; x < allHasChildren.length; x++) {
    allHasChildren[x].onclick = function () {
        var subMenu = this.parentNode.getElementsByClassName("child-dropdown")[0];
        if (subMenu.classList.contains("show-menu")) {
            subMenu.classList.remove("show-menu");
        } else {
            subMenu.classList.add("show-menu");
        }
    };
}

// click add class
var allHasChildren = document.querySelectorAll(".prent-dropdown-nav a");
for (var x = 0; x < allHasChildren.length; x++) {
    allHasChildren[x].onclick = function () {
        var subMenu = this.parentNode.getElementsByClassName("child-dropdown-nav")[0];
        if (subMenu.classList.contains("show")) {
            subMenu.classList.remove("show");
        } else {
            subMenu.classList.add("show");
        }
    };
}

// creadit card js
document.getElementById("defaultOpen").click();
function tabOpener(evt, kat) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(kat).style.display = "block";
    evt.currentTarget.className += " active";
}

// profile information js
function Tabs() {
    var bindAll = function () {
        var menuElements = document.querySelectorAll("[data-tab]");
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener("click", change, false);
        }
    };

    var clear = function () {
        var menuElements = document.querySelectorAll("[data-tab]");
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove("activeShow");
            var id = menuElements[i].getAttribute("data-tab");
            document.getElementById(id).classList.remove("activeShow");
        }
    };

    var change = function (e) {
        clear();
        e.target.classList.add("activeShow");
        var id = e.currentTarget.getAttribute("data-tab");
        document.getElementById(id).classList.add("activeShow");
    };

    bindAll();
}

var connectTabs = new Tabs();
