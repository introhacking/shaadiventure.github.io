"use strict";
// HOVER TO ADD CLASS AT HEADER MENU
$(document).ready(() => {
  $(".dropdown-item").hover(
    function () {
      $(this).parent().addClass("menu-open");
    },
    function () {
      $(this).parent().removeClass("menu-open");
    }
  );
});

// ALL FORM OPEN
let letConnect = document.querySelectorAll("#letConnect");
let letBody = document.querySelector("body");
letConnect.forEach((items) => {
  items.addEventListener("click", () => {
    letBody.classList.add("form_open");
  });
});

// CLICK TO OPEN HEADER MENU
window.addEventListener("DOMContentLoaded", () => {
  let trigger = document.querySelector("#clickTrigger");
  let body = document.querySelector("body");
  trigger.addEventListener("click", () => {
    body.classList.toggle("menuOpen");
    return;
  });
  //  SUBMENU OPEN
  let mobileSubMenu = document.querySelectorAll("#mobile_menu .mobile_menu");
  mobileSubMenu.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      if (e.target.parentNode.children.length > 1) {
        e.target.parentNode.classList.toggle("submenu-open");
      }
    });
  });

  // CLICK TO CLOSE HEADER MENU
  let closeMenu = document.querySelector("#closeMenu");
  closeMenu.addEventListener("click", () => {
    body.classList.remove("menuOpen");
  });

  // Sticky navabar
  let stickyClassAdd = document.querySelector(".mani_header-section");
  let backTopClassAdd = document.querySelector("body");
  let headerSticky = document.querySelector("header");
  const observer = new IntersectionObserver(
    (enteries) => {
      const entValue = enteries[0];
      entValue.isIntersecting === false
        ? (stickyClassAdd.classList.add("sticky"),
          backTopClassAdd.classList.add("backTop"))
        : (stickyClassAdd.classList.remove("sticky"),
          backTopClassAdd.classList.remove("backTop"));
    },
    {
      root: null,
      rootMargin: "-75px",
      threshold: 0,
    }
  );
  observer.observe(headerSticky);

  // BACK TO TOP
  $(document).ready(() => {
    $("#backTop_wrapper").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 500);
    });
    return false;
  });

  // CONTACT PAGE FORM VALIDATION
  const formSubmit = document.querySelector("#formSubmit");
  const inputs = document.querySelectorAll("form#form input");
  formSubmit.addEventListener("click", (e) => {
    formValidation(e);
  });
  const formValidation = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let city = document.getElementById("city").value.trim();
    let date = document.getElementById("date").value.trim();
    let budget = document.getElementById("budget").value;
    let emailRegChecker =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (name === "") {
      document.getElementById("nameErr").innerHTML = "Required field *";
      return false;
    } else if (name.length < 2) {
      document.getElementById("nameErr").innerHTML =
        "Your name should be more than 2 alphabets *";
      return false;
    } else {
      document.getElementById("nameErr").innerHTML = "";
    }
    if (phone === "") {
      document.getElementById("phoneErr").innerHTML = "Required field *";
      return false;
    } else if (isNaN(phone)) {
      document.getElementById("phoneErr").innerHTML = "Invalid number";
      return false;
    } else if (phone.length < 10 || phone.length > 10) {
      document.getElementById("phoneErr").innerHTML =
        "Phone number should not be more than 10 or not be less than 10 ";
      return false;
    } else {
      document.getElementById("phoneErr").innerHTML = "";
    }
    if (email === "") {
      document.getElementById("emailErr").innerHTML = "Required field *";
      return false;
    } else if (!email.match(emailRegChecker)) {
      document.getElementById("emailErr").innerHTML = "Invalid email address";
      return false;
    } else {
      document.getElementById("emailErr").innerHTML = "";
    }
    if (city === "") {
      document.getElementById("cityErr").innerHTML = "Required field *";
      return false;
    } else {
      document.getElementById("cityErr").innerHTML = "";
    }
    if (date === "") {
      document.getElementById("dateErr").innerHTML = "Required field *";
      return false;
    } else {
      document.getElementById("dateErr").innerHTML = "";
    }
    if (budget === "--Select your Budget--") {
      document.getElementById("budgetErr").innerHTML = "Select your Budget";
      return false;
    } else {
      document.getElementById("budgetErr").innerHTML = "";
    }
    console.log({ name, phone, email, city, date, budget });
    inputs.forEach((input) => (input.value = ""));
    // budget.innerHTML = "--Select your budget";
  };
});

// HIDE FORM
let formHide = document.querySelector("#form_HIDE");
formHide.addEventListener("click", () => {
  letBody.classList.remove("form_open");
});

const formSubmit = document.getElementById("letConnectForm");
formSubmit.addEventListener("submit", (e) => {
  infoFormSubmitToConnect(e);
});
// INFOMATION FORM TO CONNECT CLIENT
const infoFormSubmitToConnect = (e) => {
  e.preventDefault();
  let name = document.getElementById("info_name").value.trim();
  let phone = document.getElementById("info_phone").value.trim();
  let email = document.getElementById("info_email").value.trim();
  let city = document.getElementById("info_city").value.trim();
  let date = document.getElementById("info_date").value.trim();
  let budget = document.getElementById("info_budget").value;
  let category = document.getElementById("info_category").value;
  let noOfPax = document.getElementById("info_pax").value;
  let emailRegChecker =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (name === "") {
    document.getElementById("info_nameErr").innerHTML = "Required field *";
    return false;
  } else if (name.length < 2) {
    document.getElementById("info_nameErr").innerHTML =
      "Your name should be more than 2 alphabets *";
    return false;
  } else {
    document.getElementById("info_nameErr").innerHTML = "";
  }
  if (phone === "") {
    document.getElementById("info_phoneErr").innerHTML = "Required field *";
    return false;
  } else if (isNaN(phone)) {
    document.getElementById("info_phoneErr").innerHTML = "Invalid number";
    return false;
  } else if (phone.length < 10 || phone.length > 10) {
    document.getElementById("info_phoneErr").innerHTML =
      "Phone number should not be more than 10 or not be less than 10 ";
    return false;
  } else {
    document.getElementById("info_phoneErr").innerHTML = "";
  }
  if (email === "") {
    document.getElementById("info_emailErr").innerHTML = "Required field *";
    return false;
  } else if (!email.match(emailRegChecker)) {
    document.getElementById("info_emailErr").innerHTML =
      "Invalid email address";
    return false;
  } else {
    document.getElementById("info_emailErr").innerHTML = "";
  }
  if (city === "") {
    document.getElementById("info_cityErr").innerHTML = "Required field *";
    return false;
  } else {
    document.getElementById("info_cityErr").innerHTML = "";
  }
  if (date === "") {
    document.getElementById("info_dateErr").innerHTML = "Required field *";
    return false;
  } else {
    document.getElementById("info_dateErr").innerHTML = "";
  }
  if (category === "--Select your category--") {
    document.getElementById("info_categoryErr").innerHTML =
      "Select your category";
    return false;
  } else {
    document.getElementById("info_categoryErr").innerHTML = "";
  }
  if (noOfPax === "--Number of Pax--") {
    document.getElementById("info_paxErr").innerHTML = "Select No. of pax";
    return false;
  } else {
    document.getElementById("info_paxErr").innerHTML = "";
  }
  if (budget === "--Select your Budget--") {
    document.getElementById("info_budgetErr").innerHTML = "Select your Budget";
    return false;
  } else {
    document.getElementById("info_budgetErr").innerHTML = "";
    console.log({ name, phone, email, city, date, budget, noOfPax, category });
    letBody.classList.remove("form_open");
  }
};

// TIMELINE JS
function qs(selector, all = false) {
  return all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}
const sections = qs(".section", true);
const timeline = qs(".timeline");
const line = qs(".line");
const loveStory = qs(".mani_left-handside");
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e) {
  const { scrollY } = window;
  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;
  const dist = targetY - timelineRect.top;
  // console.log(dist);

  if (down && !full) {
    set = Math.max(set, dist);
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }
  sections.forEach((item) => {
    // console.log(item);
    const rect = item.getBoundingClientRect(); //     console.log(rect);

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add("show-me");
    } else {
      item.classList.remove("show-me");
    }
  }); // console.log(up, down);

  prevScrollY = window.scrollY;
}
scrollHandler();
line.style.display = "block";
window.addEventListener("scroll", scrollHandler);
