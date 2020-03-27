const submitBtn = document.getElementById("submit");
console.log("it works");
console.log(submitBtn);
const placeInput = document.forms["place-form"].querySelector("input");
const arriveInput = document.forms["arrive-form"].querySelector("input");
const departInput = document.forms["depart-form"].querySelector("input");

placeInput.addEventListener("keyup", function(e) {
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
});

submitBtn.addEventListener("click", function() {
  document.getElementById("place-form").reset();
  document.getElementById("arrive-form").reset();
  document.getElementById("depart-form").reset();
});
