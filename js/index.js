function $(element) {
    return document.querySelector(element);
}
function $all(element) {
    return document.querySelectorAll(element);
}

$(".menu i").onclick = () => {
    if($(".menu ul").classList.contains("show")) {
        $(".menu ul").classList.remove("show");
    } else {
        $(".menu ul").classList.add("show");
    }
};

$(".control-video span").onclick = () => {
    if($("video").classList.contains("play")) {
        $("video").classList.remove("play");
        $(".control-video p").style.cssText = "visibility: visible;";
        $("video").pause();
        $(".control-video span i:first-child").style.cssText = "display: block";
        $(".control-video span i:last-child").style.cssText = "display: none";
    } else {
        $("video").classList.add("play");
        $(".control-video p").style.cssText = "visibility: hidden;";
        $("video").play();
        $(".control-video span i:first-child").style.cssText = "display: none";
        $(".control-video span i:last-child").style.cssText = "display: block";
    }
};

$all(".studio ul li").forEach((li) => {
    li.onclick = function() {
        $all(".studio ul li").forEach((li) => {
            li.classList.remove("active");
        });
        li.classList.add("active");
        $all(".photos .photo").forEach((photo) => {
            if(li.innerHTML === "all") {
                photo.classList.remove("hide");
            } else if(li.innerHTML !== photo.dataset.type) {
                photo.classList.add("hide");
            } else if(li.innerHTML === photo.dataset.type) {
                photo.classList.remove("hide");
            }
        });
    };
});

$(".return-up").onclick = function() {
    scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

window.onscroll = function() {
    if(window.scrollY >= (window.pageYOffset + $(".download").getBoundingClientRect().top)) {
        $(".return-up").classList.add("show-return-up");
    } else {
        $(".return-up").classList.remove("show-return-up");
    }
};

let countPhotos = 6;

getData("../json/portfolio.json");

function getData(api) {
    const data = [
        {
            "img": "./images/alexander-krivitskiy-peLEpNOsZzo-unsplash.jpg",
            "type": "portrait"
        },
        {
            "img": "./images/florian-klauer-mk7D-4UCfmg-unsplash.jpg",
            "type": "architectural"
        },
        {
            "img": "./images/nati-melnychuk-7M4Ae0TnQiM-unsplash.jpg",
            "type": "portrait"
        },
        {
            "img": "./images/ryan-jacobson-F2XFjXpNJfg-unsplash.jpg",
            "type": "portrait"
        },
        {
            "img": "./images/sophia-richards-hNVzT9XSqCE-unsplash.jpg",
            "type": "portrait"
        },
        {
            "img": "./images/yusuf-evli-DjQx057gBC0-unsplash.jpg",
            "type": "landscape"
        },
        {
            "img": "./images/alexander-krivitskiy-peLEpNOsZzo-unsplash.jpg",
            "type": "portrait"
        },
        {
            "img": "./images/florian-klauer-mk7D-4UCfmg-unsplash.jpg",
            "type": "architectural"
        },
        {
            "img": "./images/nati-melnychuk-7M4Ae0TnQiM-unsplash.jpg",
            "type": "portrait"
        },
        {
            "img": "./images/ryan-jacobson-F2XFjXpNJfg-unsplash.jpg",
            "type": "portrait"
        },
        {
            "img": "./images/sophia-richards-hNVzT9XSqCE-unsplash.jpg",
            "type": "portrait"
        },
        {
            "img": "./images/yusuf-evli-DjQx057gBC0-unsplash.jpg",
            "type": "landscape"
        }
    ]
    // fetch(api)
        // .then((Response) => Response.json())
        // .then((data) => {
            createElement(data);
    // });
}

function createElement(data) {
    let cards = "";
    for(let i=0;i<countPhotos;i++) {
        let card = `<div class="photo overflow-hidden position-relative" data-type="${data[i]["type"]}">
            <img src="${data[i]["img"]}" alt="portfolio">
        </div>`;
        cards+=card;
    }
    $(".photos").innerHTML = cards;
}

$(".studio .bttn").onclick = function() {
    countPhotos+=3;
    getData("../json/portfolio.json");
    if(countPhotos === 12) {
        $(".studio .bttn").style.cssText = "display: none";
    }
};


