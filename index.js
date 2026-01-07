// alert("Hello, World!");
function reload(){
    // alert("Page Reloaded");
    window.location.reload();
}
// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// };
function opentab(name, event) {
    var tabs = document.getElementsByClassName("section-items");
    var tabcontent = document.getElementsByClassName("tabs");
    for (var i = 0; i < tabs.length; i++) {
        tabcontent[i].classList.remove("active-tab");
        tabs[i].classList.remove("active-item");
    }
    event.currentTarget.classList.add("active-item");
    document.getElementById(name).classList.add("active-tab");
    // console.log(tabs);
    // console.log(tabcontent);
}

const images = ["./public/images/display/close shot.jpg",
    // "https://picsum.photos/800/600?random=0",
    // "https://picsum.photos/800/600?random=2",
    // "https://picsum.photos/800/600?random=1",
    "./public/images/display/sunrise.jpg",
    "./public/images/display/radison.jpg",
    "./public/images/display/glass bridge.jpg",
    "./public/images/display/abhyudaya25.jpg",
    "./public/images/display/railway hat.jpg",
    "./public/images/display/museum.jpg",
    "./public/images/display/ayodhya.jpg",
    "./public/images/display/citymall.jpg",
    "./public/images/display/theatre.jpg",
];

function preloadResources() {
    const imgasset = ["./public/images/display/close shot.jpg",
        // "https://picsum.photos/800/600?random=0",
        // "https://picsum.photos/800/600?random=2",
        // "https://picsum.photos/800/600?random=1",
        "./public/images/display/sunrise.jpg",
        "./public/images/display/radison.jpg",
        "./public/images/display/glass bridge.jpg",
        "./public/images/display/abhyudaya25.jpg",
        "./public/images/display/railway hat.jpg",
        "./public/images/display/museum.jpg",
        "./public/images/display/ayodhya.jpg",
        "./public/images/display/citymall.jpg",
        "./public/images/display/theatre.jpg",
        "./public/images/media handles/instagram color.png",
        "./public/images/media handles/github.png",
        "./public/images/media handles/linkedin color.png",
        "./public/images/logos/adobe-photoshop-seeklogo.png",
        "./public/images/logos/bootstrap-logo.png",
        "./public/images/logos/canva-seeklogo.png",
        "./public/images/logos/c-seeklogo.png",
        "./public/images/logos/css3-seeklogo.png",
        "./public/images/logos/github-seeklogo.png",
        "./public/images/logos/html5-seeklogo.png",
        "./public/images/logos/javascript-seeklogo.png",
        "./public/images/logos/node-js-seeklogo.png",
        "./public/images/logos/postgre-sql-seeklogo.png",
        "./public/images/logos/postman-api-platform-seeklogo.png",
        "./public/images/logos/python-seeklogo.png",
        "./public/images/logos/react-seeklogo.png",
        "./public/images/Project/calculator.jpg",
        "./public/images/Project/dice-game.jpg",
        "./public/images/Project/drum-kit 2.jpg",
        "./public/images/Project/simon-game.jpg",
        "./public/images/Project/tic-tak-toe.jpg",
        "./public/images/Project/to-do-list.jpg",
    ];
    // const audios = ['your-audio.mp3'];
    const fonts = ['./public/Fonts/san-miguel.otf',];

    const promises = [];
    // Preload images
    imgasset.forEach(src => {
        promises.push(new Promise(resolve => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
            // console.log(img);
        }));
    });
    // console.log(promises);

    // Preload audio
    // audios.forEach(src => {
    //     promises.push(new Promise(resolve => {
    //         const audio = new Audio();
    //         audio.src = src;
    //         audio.oncanplaythrough = resolve;
    //         audio.onerror = resolve;
    //     }));
    // });

    // Preload font
    fonts.forEach(src => {
        promises.push(fetch(src).then(res => res.blob()).catch(() => { }));
    });

    // Wait for all to load
    // Promise.all(promises).then(() => {
    //     document.getElementById('preloader').style.display = 'none';
    //     // document.getElementById('main-content').style.display = 'block';
    // });
}



let currentIndex = 0;
const img = document.getElementById("image");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");
const imgnext = document.getElementById("image");

function changeImage(index) {
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = images[index];
        img.style.opacity = 1;
    }, 300);
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
}, 9000);

prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(currentIndex);
});

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
});

imgnext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
});

// Form submit action

const scriptURL = 'https://script.google.com/macros/s/AKfycbxg4U6NJSLn5hBmLXfwV_ArB3jAZ-nxreDjWn-WbAewgXv4TnQ8d4VQrzDAhsaTXzvh/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
});

//Dynamic Date change
const footer = document.getElementById('footer');
footer.innerHTML = `<p>© ${new Date().getFullYear()} Chaitanya Raj, All rights reserved</p>`