const lisItemEl = document.querySelectorAll(".item");
console.log("Number of categories:", lisItemEl.length);

lisItemEl.forEach((element) => {
  return console.log(
    `Category: ${element.querySelector("h2").textContent}
Elements: ${element.querySelectorAll("li").length}`
  );
});
