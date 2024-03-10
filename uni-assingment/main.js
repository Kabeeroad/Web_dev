// const menuhomBtn = document.getElementById("menu-item-home");
// const menuBtnBsit = document.getElementById("menu-dpt-bsit");
// const menuBtnBscs = document.getElementById("menu-dpt-bscs");
// const menuBtnBsse = document.getElementById("menu-dpt-bsse");
// const menuBtnBed = document.getElementById("menu-dpt-bed");
// const menuBtnBba = document.getElementById("menu-dpt-bba");
// const menutimetable = document.getElementById("menu-item-timetable");
// const menuitemcourses = document.getElementById("menu-item-courses");
// const menuitemgallery = document.getElementById("menu-item-gallery");

// const home = document.getElementById("home-page");
// const itPage = document.getElementById("it-page");
// const csPage = document.getElementById("cs-page");
// const sePage = document.getElementById("se-page");
// const bedPage = document.getElementById("bed-page");
// const bbaPage = document.getElementById("bba-page");
// const timepage = document.getElementById("timetable");

// const allDptPages = document.querySelectorAll(".dpt-page");
// const allNavPages = document.querySelectorAll(".nav-page");

// menuhomBtn.addEventListener("click", () => {
//   if (home.classList.contains("active")) {
//     console.log("any thing else");
//   } else {
//     allDptPages.forEach((page) => {
//       home.classList.remove("active");
//     });
//     home.classList.toggle("active");
//   }
// });

// // menutimetable.addEventListener("click", () => {
// //   if (home.classList.contains("active")) {
// //     console.log("any thing else");
// //   } else {
// //     allNavPages.forEach((page) => {
// //       home.classList.remove("active");
// //     });
// //     home.classList.toggle("active");
// //   }
// // });

// menuitemcourses.addEventListener("click", () => {});
// menuitemgallery.addEventListener("click", () => {
//   console.log("object");
// });

// menuBtnBsit.addEventListener("click", () => {
//   if (itPage.classList.contains("active")) {
//     console.log("Do nothing");
//   } else {
//     allDptPages.forEach((page) => {
//       page.classList.remove("active");
//     });
//     itPage.classList.toggle("active");
//   }
// });

// menuBtnBscs.addEventListener("click", () => {
//   if (csPage.classList.contains("active")) {
//     console.log("Do nothing");
//   } else {
//     allDptPages.forEach((page) => {
//       page.classList.remove("active");
//     });
//     csPage.classList.toggle("active");
//   }
// });

// menuBtnBsse.addEventListener("click", () => {
//   if (sePage.classList.contains("active")) {
//     console.log("Do nothing");
//   } else {
//     allDptPages.forEach((page) => {
//       page.classList.remove("active");
//     });
//     sePage.classList.toggle("active");
//   }
// });

// menuBtnBed.addEventListener("click", () => {
//   if (bedPage.classList.contains("active")) {
//     console.log("Do nothing");
//   } else {
//     allDptPages.forEach((page) => {
//       page.classList.remove("active");
//     });
//     bedPage.classList.toggle("active");
//   }
// });

// menuBtnBba.addEventListener("click", () => {
//   if (bbaPage.classList.contains("active")) {
//     console.log("Do nothing");
//   } else {
//     allDptPages.forEach((page) => {
//       page.classList.remove("active");
//     });
//     bbaPage.classList.toggle("active");
//   }
// });

const menuhomBtn = document.getElementById("menu-item-home");
const menuBtnBsit = document.getElementById("menu-dpt-bsit");
const menuBtnBscs = document.getElementById("menu-dpt-bscs");
const menuBtnBsse = document.getElementById("menu-dpt-bsse");
const menuBtnBed = document.getElementById("menu-dpt-bed");
const menuBtnBba = document.getElementById("menu-dpt-bba");
const menutimetable = document.getElementById("menu-item-timetable");
const menuitemcourses = document.getElementById("menu-item-courses");
const menuitemgallery = document.getElementById("menu-item-gallery");

const home = document.getElementById("home-page");
const itPage = document.getElementById("it-page");
const csPage = document.getElementById("cs-page");
const sePage = document.getElementById("se-page");
const bedPage = document.getElementById("bed-page");
const bbaPage = document.getElementById("bba-page");
const timetablePage = document.getElementById("timetable-page");
const coursesPage = document.getElementById("courses-page");
const galleryPage = document.getElementById("gallayr-page");

// Add event listeners to navigation buttons
menuhomBtn.addEventListener("click", () => {
  hideAllPages();
  home.style.display = "block";
});

menutimetable.addEventListener("click", () => {
  hideAllPages();
  timetablePage.style.display = "block";
});

menuitemcourses.addEventListener("click", () => {
  hideAllPages();
  coursesPage.style.display = "block";
});

menuitemgallery.addEventListener("click", () => {
  hideAllPages();
  galleryPage.style.display = "block";
});

menuBtnBsit.addEventListener("click", () => {
  hideAllPages();
  itPage.style.display = "block";
});

menuBtnBscs.addEventListener("click", () => {
  hideAllPages();
  csPage.style.display = "block";
});

menuBtnBsse.addEventListener("click", () => {
  hideAllPages();
  sePage.style.display = "block";
});

menuBtnBed.addEventListener("click", () => {
  hideAllPages();
  bedPage.style.display = "block";
});

menuBtnBba.addEventListener("click", () => {
  hideAllPages();
  bbaPage.style.display = "block";
});

// Function to hide all pages
function hideAllPages() {
  const allPages = document.querySelectorAll(".dpt-page, .nav-page");
  allPages.forEach((page) => {
    page.style.display = "none";
  });
}
