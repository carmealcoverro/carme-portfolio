var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


$(document).ready(function () {
    $(".js-project").on("mouseenter", function () {
        if (window.screen.width > 750) {
            $(this).siblings().addClass("dimmed");
            document.getElementById(`${this.dataset.project}__img`)
                .classList
                .add("desktop-imgs__img--on")
        }
    });

    $(".js-project").on("mouseleave", function () {
        if (window.screen.width > 750) {
            $(".js-project").removeClass("dimmed");
            document.getElementById(`${this.dataset.project}__img`)
                .classList
                .remove("desktop-imgs__img--on")
        }
    });

    $(".hover-underline-animation-multiline").on("mouseenter", function () {
        let e = document.querySelector(".hover-underline-animation-multiline")
        if (window.screen.width > 750)
            e.classList.add("hover-underline-animation-multiline-on")
    });

    $(".hover-underline-animation-multiline").on("mouseleave", function () {
        let e = document.querySelector(".hover-underline-animation-multiline")
        if (window.screen.width > 750)
            e.classList.remove("hover-underline-animation-multiline-on")
    });

    menu()

});

function menu() {
    const button = document.querySelector(".hamburger-button__icon")
    const menu = document.querySelector(".menu_on")
    const menuItems = Array.from(document.querySelectorAll(".menu_on li"))

    console.log(menuItems);
    button.onclick = () => {
        button.classList.toggle("hamburger-button__icon--on")
        menu.classList.toggle("menu_on--on")
        menuItems.forEach(e => e.onclick = () => closeMenu())
    }
}

function closeMenu() {
    const button = document.querySelector(".hamburger-button__icon")
    const menu = document.querySelector(".menu_on")
    button.classList.remove("hamburger-button__icon--on")
    menu.classList.remove("menu_on--on")
}
