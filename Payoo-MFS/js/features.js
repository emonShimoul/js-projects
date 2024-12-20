document.getElementById("donation-btn").addEventListener("click", function () {
  showSectionById("add-section");
  showButtonById("donation-btn");
});

document.getElementById("history-btn").addEventListener("click", function () {
  showSectionById("transaction-container");
  showButtonById("history-btn");
});
