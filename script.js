// elements
const carousel = document.getElementById("carousel");
const moveBtn = document.querySelectorAll(".btn");

let drag = false;

// the different pictures to be displayed
const images = [
    "jellof.jpg",
    "fried.jpg",
    "tea.jpg",
    "spaghetti.jpg",
    "mobile-image-hero-1.jpg",
    "mobile-image-hero-2.jpg",
    "mobile-image-hero-3.jpg",
]


const displayImages = (collection) => {
    display = collection.map(photos => {
        return `
        <img src="images/${photos}" alt="">
        `
    })
    
    carousel.innerHTML = display.join("");
}// function to display images

window.addEventListener("DOMContentLoaded", displayImages(images));

const scrolling = (e) => {
    if (drag == false) return;


    let leftScroll = carousel.scrollLeft;
    leftScroll -= e.movementX;
    carousel.scrollLeft = leftScroll;
}

carousel.addEventListener("mouseup", (e) => {
    e.preventDefault();
    drag = false;
});

carousel.addEventListener("mousedown", (e) => {
    e.preventDefault();
    drag = true;
});

carousel.addEventListener("mousemove", scrolling);

moveBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        let identity = e.currentTarget.classList;
        
        identity.contains ("right") ? carousel.scrollLeft -= 450: carousel.scrollLeft += 450;
        
        console.log(carousel.scrollLeft)
    } )
})



