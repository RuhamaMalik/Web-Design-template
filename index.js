var tabs = document.querySelector(".tabs");
var menuIcon = document.querySelector(".menuIcon");
var isOpen = true;

function toggleMenu() {
  if (isOpen) {
    // tabs.style.display = "none";
    tabs.style.right = "0";
    isOpen = false;
    menuIcon.className = "fas fa-times menuIcon";
    // menuIcon.style.color = 'white'
  } else {
    // tabs.style.display = "flex";
    tabs.style.right = "-300px";
    isOpen = true;
    menuIcon.className = "fas fa-bars menuIcon";
    // menuIcon.style.color = 'black'
  }
}

function setActiveTab(tab) {
  // Remove active class from all tabs
  tabs.querySelectorAll("a").forEach(function (link) {
    link.classList.remove("active");
  });

  // Add active class to the selected tab
  tab.classList.add("active");
}

//  header animation
window.addEventListener("scroll", () => {
  var header = document.querySelector(".header");
  if (window.scrollY >= 30) {
    header.style.background = "black";
    header.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.35)";
  } else {
    header.style.background = "transparent";
    header.style.boxShadow = "none"; 
  }
});

//

// Move the images up and down continuously
window.addEventListener("DOMContentLoaded", function () {
  moveImageUpAndDown("movingImage1");
  moveImageUpAndDown("movingImage2");
  moveImageUpAndDown("movingImage3");
  moveImageUpAndDown("movingImage4");
});

function moveImageUpAndDown(imageId) {
  var image = document.getElementById(imageId);
  var moveUp = true;

  setInterval(function () {
    if (moveUp) {
      image.classList.remove("move-up");
      moveUp = false;
    } else {
      image.classList.add("move-up");
      moveUp = true;
    }
  }, 1000);
}


// Number counter
window.addEventListener("scroll", () => {
    var numbersSection = document.getElementById("numbers-section");
    var sectionTop = numbersSection.offsetTop;
    var windowHeight = window.innerHeight;

    if (window.scrollY >= (sectionTop - windowHeight)) {
        console.log("Scroll Triggered!");
        updateNumbers(0, 0, 0);
        startIncrementing();
    }
});

function updateNumbers(downloads, peopleRated, followers) {
    document.getElementById("downloads").textContent = downloads;
    document.getElementById("people-rated").textContent = peopleRated;
    document.getElementById("followers").textContent = followers;
}

function startIncrementing() {
    let downloadsCount = 0;
    let peopleRatedCount = 0;
    let followersCount = 0;

    function incrementNumbers() {
        if (downloadsCount < 765) {
            downloadsCount += 5; 
            updateNumbers(downloadsCount, peopleRatedCount, followersCount);
            requestAnimationFrame(incrementNumbers);
        }

        if (peopleRatedCount < 981) {
            peopleRatedCount += 5; 
            updateNumbers(downloadsCount, peopleRatedCount, followersCount);
            requestAnimationFrame(incrementNumbers);
        }

        if (followersCount < 937) {
            followersCount += 5; 
            updateNumbers(downloadsCount, peopleRatedCount, followersCount);
            requestAnimationFrame(incrementNumbers);
        }
    }

    setTimeout(() => {
        incrementNumbers();
    }, 200); 
}


// gallery popup
document.addEventListener('DOMContentLoaded', function () {
  const octagons = document.querySelectorAll('.octagon');
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  const closeBtn = document.querySelector('.close');

  octagons.forEach(octagon => {
    octagon.addEventListener('click', function () {
      const imgSrc = this.querySelector('.gallery-img').src;
      popupImg.src = imgSrc;
      popup.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});
