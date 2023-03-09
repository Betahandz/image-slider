const carousel = document.querySelector(".carousel");
const firtimage = document.querySelectorAll(".carousel img")[0];
const point = document.querySelectorAll(".point");

let width = firtimage.clientWidth + 14;

let isDragStart = false;
let prevPageX;
let prevScrollLeft;

// using the new way to write functions
const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positiondiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positiondiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragStop = () => {
    isDragStart = false;
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousemove", dragging);

carousel.addEventListener("touchmove", sliding);
carousel.addEventListener("touchstart", slideon);
carousel.addEventListener("touchend", slideoff);
let num = 0;
// using the old ways
function sliding (e) {
    if (!isDragStart) return;
    e.preventDefault();
    num = carousel.scrollLeft;
    let pos = e.touches[0].pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - pos;
    
    if (e.touches[0].pageX++) {
        num++;
    }else {
        num--;
    }
    console.log(width);
    if (num >= width) {
        point.forEach(item => {
            item.classList.remove("active");
            point[1].classList.add("active")
        })
    }


    if (num >= width*2) {
        point.forEach(item => {
            item.classList.remove("active");
            point[2].classList.add("active")
        })
    }

    if (num >= width*3) {
        point.forEach(item => {
            item.classList.remove("active");
            point[3].classList.add("active")
        })
    }

    if (num >= width*4) {
        point.forEach(item => {
            item.classList.remove("active");
            point[4].classList.add("active")
        })
    }
    if (num >= width*5) {
        point.forEach(item => {
            item.classList.remove("active");
            point[5].classList.add("active")
        })
    }
    if (num >= width*6) {
        point.forEach(item => {
            item.classList.remove("active");
            point[6].classList.add("active")
        })
    }
    if (num >= width*7) {
        point.forEach(item => {
            item.classList.remove("active");
            point[7].classList.add("active")
        })
    }
    if (num >= width*8) {
        point.forEach(item => {
            item.classList.remove("active");
            point[8].classList.add("active")
        })
    }
    if (num < width) {
        point.forEach(item => {
            item.classList.remove("active");
            point[0].classList.add("active")
        })
    }

}

// functio slide on
function slideon (e) {
    isDragStart = true;
    prevPageX = e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

function slideoff () {
    isDragStart = false;
}

