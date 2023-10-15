let toggler = document.querySelectorAll(".has-children");
toggler.forEach(tg => {
    tg.addEventListener("click", function () {
        this.parentNode.querySelector(".nested").classList.toggle("active");
        if (tg.parentNode.querySelector(".nested").classList.contains("active")) {
            tg.querySelector(".status").src = "/rsc/minus.gif";
        } else {
            tg.querySelector(".status").src = "/rsc/plus.gif";
        }
    });
})
