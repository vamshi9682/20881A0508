'use strict';

// element toggle function
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { 
  elementToggleFunc(sidebar); 
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { 
  elementToggleFunc(this); 
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

//--------------------


document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll("[data-filter-btn]");
  const selectButtons = document.querySelectorAll("[data-select-item]");
  const photoItems = document.querySelectorAll(".photo-item");
  const filterSelectList = document.querySelector(".select-list");

  // Add click event listeners to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const category = this.textContent.trim();
      filterPhotos(category);
      hideFilterSelectList();
    });
  });

  // Add click event listeners to select buttons
  selectButtons.forEach(button => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      filterPhotos(category);
      hideFilterSelectList();
    });
  });

  // Function to filter photos based on category
  function filterPhotos(category) {
    photoItems.forEach(item => {
      const itemCategory = item.getAttribute("data-category");
      if (category === "All" || category === itemCategory) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Function to hide the filter select list after 3 seconds
  function hideFilterSelectList() {
    filterSelectList.style.opacity = "1"; // Reset opacity
    filterSelectList.style.visibility = "visible"; // Reset visibility

    setTimeout(function () {
      filterSelectList.style.opacity = "0";
      filterSelectList.style.visibility = "hidden";
      showFilterSelectList(); // Display the select list again
    }, 3000);
  }

  // Function to show the filter select list again
  function showFilterSelectList() {
    filterSelectList.style.opacity = "1";
    filterSelectList.style.visibility = "visible";
  }
});




//-----------------------------


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}






