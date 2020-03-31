const submitBtn = document.getElementById("submit");
const placeInput = document.forms["place-form"].querySelector("input");
const arriveInput = document.forms["arrive-form"].querySelector("input");
const departInput = document.forms["depart-form"].querySelector("input");
const inputBar = document.getElementById("todo-input-bar");
const addBtn = document.getElementById("add-todo-btn");
const uList = document.getElementById("todo-list");
const placeCity = document.getElementById("city-name");
const mainPage = document.getElementById("main-page");
const userAccount = document.getElementById("user-account");
const hotelBtn = document.getElementById("hotels-btn");
const restaurantBtn = document.getElementById("restaurants-btn");
const thingstodoBtn = document.getElementById("thingstodo-btn");
const monumentsBtn = document.getElementById("monuments-btn");
const showInfo = document.getElementById("show-info");
const cityBoxesBtn = Array.from(document.getElementsByClassName("box"));
const closeBar = document.getElementById("close-bar");
const showInfoDiv = document.getElementById("showInfoDiv");

/*placeInput.addEventListener("keyup", function(e) {
  const placeName = e.target.value;
  console.log(placeName);
  return placeName;
});
arriveInput.addEventListener("input", function(e) {
  const arriveDate = e.target.value;
  console.log(arriveDate);
  return arriveDate;
});
departInput.addEventListener("input", function(e) {
  const departDate = e.target.value;
  console.log(departDate);
  return departDate;
});*/

document.addEventListener("DOMContentLoaded", function() {
  eventListeners();
});

function eventListeners() {
  addBtn.addEventListener("click", () => {
    startFunction();
  });

  inputBar.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      startFunction();
    }
  });

  uList.addEventListener("click", function(event) {
    if (event.target.classList.contains("done-btn")) {
      tickFromList(event.target);
    } else if (event.target.classList.contains("delete-btn")) {
      deleteFromList(event.target);
    }
  });

  submitBtn.addEventListener("click", function(e) {
    /*document.getElementById("place-form").reset();
    document.getElementById("arrive-form").reset();
    document.getElementById("depart-form").reset();*/
    e.preventDefault();
    placeCity.innerText = placeInput.value;
    mainPage.classList.add("hide");
    userAccount.classList.remove("hide");
    document.body.style.backgroundImage = "url(./img/travel.jpg)";
  });

  cityBoxesBtn.forEach(box =>
    box.addEventListener("click", e => {
      showInfoDiv.classList.remove("hide");

      if (e.target.value === "thingstodo") {
        showInfo.innerHTML = `
      <iframe id="thingstodo-frame"
      width="1200"
      height="700"
      src="https://foursquare.com/explore?cat=arts&mode=url&near=${placeInput.value}">
      </iframe>`;
      } else if (e.target.value === "restaurants") {
        showInfo.innerHTML = `
      <iframe id="restaurants-frame"
      width="1200"
      height="700"
      src="https://foursquare.com/explore?cat=food&mode=url&near=${placeInput.value}">
    </iframe>`;
      } else if (e.target.value === "monuments") {
        showInfo.innerHTML = `
      <iframe id="monuments-frame"
      width="1200"
      height="700"
      src="https://foursquare.com/explore?mode=url&near=${placeInput.value}&q=Monument">
    </iframe>`;
      } else if (e.target.value === "hotels") {
        showInfo.innerHTML = `
      <iframe id="hotels-frame"
      width="1200"
      height="700"
      src="https://foursquare.com/explore?mode=url&near=${placeInput.value}&q=Hotel">
    </iframe>`;
      }
    })
  );

  closeBar.addEventListener("click", () => {
    showInfoDiv.classList.add("hide");
  });
}

function startFunction() {
  let inputBarValue = inputBar.value;
  if (inputBarValue.length > 0) {
    addToList(inputBarValue);
  }
}

function addToList(inputBarValue) {
  let itemText = document.createElement("li");
  itemText.innerHTML = `<li class='todo'>${inputBarValue}
  <button class='done-btn'>✓</button>
  <button class='delete-btn'>x</button>
  </li>`;
  uList.appendChild(itemText);
  inputBar.value = "";
}

function tickFromList(element) {
  let parent = element.parentElement;
  if (parent.classList.contains("done")) {
    parent.classList.remove("done");
  } else {
    parent.classList.add("done");
  }
}

function deleteFromList(e) {
  let parent = e.parentElement.parentElement;
  uList.removeChild(parent);
}
