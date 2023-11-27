// MOBILE MENU

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

//  HEADER ANIMATION
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

  if (window.scrollY >= sectionTop - windowHeight) {
    // console.log("Scroll Triggered!");
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

//  GALLERY
document.addEventListener("DOMContentLoaded", function () {
  const imageSources = [
    "images/gallery1.jpg",
    "images/gallery2.jpg",
    "images/gallery3.jpg",
    "images/gallery4.jpg",
    "images/gallery5.webp",
    "images/gallery6.png",
    "images/gallery7.jpg",
    "images/gallery8.png",
    "images/gallery9.webp",
    "images/gallery10.png",
    "images/gallery11.jpg",
    "images/gallery12.jpg",
  ];

  const galleryContainer = document.getElementById("gallery");
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  const closeBtn = document.querySelector(".close");

  // Create gallery items dynamically
  imageSources.forEach((src, index) => {
    const octagonWrap = document.createElement("div");
    octagonWrap.className = "octagonWrap";

    const octagon = document.createElement("div");
    octagon.className = "octagon";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Image ${index + 1}`;
    img.className = "gallery-img";

    octagon.appendChild(img);
    octagonWrap.appendChild(octagon);
    galleryContainer.appendChild(octagonWrap);

    octagon.addEventListener("click", function () {
      popupImg.src = img.src;
      popup.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});

//  handle Contact form
function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  let data;
  if (!name && !email && !subject && !message) {
    // form validation through js
    alert("please fill Out the form");
  } else {
    !name
      ? alert("Name is required")
      : !email
      ? alert("Email is required")
      : !subject
      ? alert("Subject is required")
      : !message
      ? alert("Message is required")
      : (data = { name, email, subject, message });
    console.log(data);
    resetForm();
  }
  const popupContent = document.getElementById("popup-content");
  const success = document.getElementById("success");
  if (data) {
    popupContent.innerHTML = email;
    success.style.display = "flex";
  } else {
    success.style.display = "none";
  }
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
}

function closePopup() {
  const success = document.getElementById("success");
  success.style.display = "none";
}
