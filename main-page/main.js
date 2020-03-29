const submitBtn = document.getElementById("submit");
/*console.log("it works");
console.log(submitBtn);*/
const placeInput = document.forms["place-form"].querySelector("input");
const arriveInput = document.forms["arrive-form"].querySelector("input");
const departInput = document.forms["depart-form"].querySelector("input");
const inputBar = document.getElementById("todo-input-bar");
const addBtn = document.getElementById("add-todo-btn");
const uList = document.getElementById("todo-list");
const placeCity = document.getElementById("city-name");
const mainPage = document.getElementById("main-page");
const userAccount = document.getElementById("user-account");
const hotelBtn = document.getElementById('hotels-btn');
const restaurantBtn = document.getElementById('restaurants-btn');
const thingstodoBtn = document.getElementById('thingstodo-btn');
const monumentsBtn = document.getElementById('monuments-btn');
const showInfo = document.getElementById('show-info');


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

  thingstodoBtn.addEventListener('click', () => {
    if (showInfo.classList.contains('hide')) {
      showInfo.classList.remove('hide')
      showInfo.innerHTML = `
      <iframe id="thingstodo-frame"
      width="1200"
      height="1000"
      src="https://foursquare.com/explore?cat=arts&mode=url&near=${placeInput.value}">
      </iframe>`
    } else {
      showInfo.classList.add('hide')
    }
  });

  restaurantBtn.addEventListener('click', () => {
    if (showInfo.classList.contains('hide')) {
      showInfo.classList.remove('hide')
      showInfo.innerHTML = `
      <iframe id="restaurants-frame"
      width="1200"
      height="1000"
      src="https://foursquare.com/explore?cat=food&mode=url&near=${placeInput.value}">
    </iframe>`
    } else {
      showInfo.classList.add('hide')
    }
  });

  monumentsBtn.addEventListener('click', () => {
    if (showInfo.classList.contains('hide')) {
      showInfo.classList.remove('hide')
      showInfo.innerHTML = `
      <iframe id="monuments-frame"
      width="1200"
      height="1000"
      src="https://foursquare.com/explore?mode=url&near=${placeInput.value}&q=Monument">
    </iframe>`
    } else {
      showInfo.classList.add('hide')
    }
  })

  hotelBtn.addEventListener('click', () => {
    if (showInfo.classList.contains('hide')) {
      showInfo.classList.remove('hide')    
      showInfo.innerHTML = `
      <iframe id="hotels-frame"
      width="1200"
      height="1000"
      src="https://foursquare.com/explore?mode=url&near=${placeInput.value}&q=Hotel">
    </iframe>`
    } else {
      showInfo.classList.add('hide')
    }
  })
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
