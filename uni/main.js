const menuhomBtn = document.getElementById("menu-item-home");
const menuBtnBsit = document.getElementById("menu-dpt-bsit");
const menuBtnBscs = document.getElementById("menu-dpt-bscs");
const menuBtnBsse = document.getElementById("menu-dpt-bsse");
const menuBtnBed = document.getElementById("menu-dpt-bed");
const menuBtnBba = document.getElementById("menu-dpt-bba");
const menutimetable = document.getElementById("menu-item-timetable");
const menuitemcourses = document.getElementById("menu-item-courses");
const menuitemgallery = document.getElementById("menu-item-gallery");
// const timepage = document.getElementsByClassName("time-page");
const home = document.getElementById("home-page");
const itPage = document.getElementById("it-page");
const csPage = document.getElementById("cs-page");
const sePage = document.getElementById("se-page");
const bedPage = document.getElementById("bed-page");
const bbaPage = document.getElementById("bba-page");
const timetablepage = document.getElementById("timetable-page");
const allDptPages = document.querySelectorAll(".dpt-page");

menutimetable.addEventListener("click", () => {
  if (home.classList.contains("active")) {
    console.log("any thing else");
  } else {
    allDptPages.forEach((page) => {
      page.classList.remove("active");
    });
    home.classList.toggle("active");
  }
});
menuhomBtn.addEventListener("click", () => {
  if (home.classList.contains("active")) {
    console.log("any thing else");
  } else {
    allDptPages.forEach((page) => {
      page.classList.remove("active");
    });
    home.classList.toggle("active");
  }
});

menuBtnBsit.addEventListener("click", () => {
  if (itPage.classList.contains("active")) {
    console.log("Do nothing");
  } else {
    allDptPages.forEach((page) => {
      page.classList.remove("active");
    });
    itPage.classList.toggle("active");
  }
});

menuBtnBscs.addEventListener("click", () => {
  if (csPage.classList.contains("active")) {
    console.log("Do nothing");
  } else {
    allDptPages.forEach((page) => {
      page.classList.remove("active");
    });
    csPage.classList.toggle("active");
  }
});

menuBtnBsse.addEventListener("click", () => {
  if (sePage.classList.contains("active")) {
    console.log("Do nothing");
  } else {
    allDptPages.forEach((page) => {
      page.classList.remove("active");
    });
    sePage.classList.toggle("active");
  }
});

menuBtnBed.addEventListener("click", () => {
  if (bedPage.classList.contains("active")) {
    console.log("Do nothing");
  } else {
    allDptPages.forEach((page) => {
      page.classList.remove("active");
    });
    bedPage.classList.toggle("active");
  }
});

menuBtnBba.addEventListener("click", () => {
  if (bbaPage.classList.contains("active")) {
    console.log("Do nothing");
  } else {
    allDptPages.forEach((page) => {
      page.classList.remove("active");
    });
    bbaPage.classList.toggle("active");
  }
});
