console.log("WhyBuy loaded");

document.getElementById("searchBox").addEventListener("input", function (e) {
  console.log("User is searching for:", e.target.value);
});
