document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Add Money Btn clicked");

    const addMoneyInput = document.getElementById("input-add-money").value;

    const pinNumberInput = document.getElementById("input-pin-number").value;

    console.log(addMoneyInput, pinNumberInput);

    if (pinNumberInput === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);

      const newBalance = parseFloat(balance) + parseFloat(addMoneyInput);
      console.log(newBalance);

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money! Please try again.");
    }
  });
