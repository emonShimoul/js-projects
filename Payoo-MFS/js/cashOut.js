document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Cash Out Btn clicked");

    const cashOutInput = getInputFieldValueById("input-cash-out-money");

    const pinNumber = getInputFieldValueById("input-cash-out-pin");

    if (isNaN(cashOutInput)) {
      alert("Failed to Cash Out. Please enter a valid number...");
      return;
    }

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");

      if (cashOutInput > balance) {
        alert("You don't have enough money to Cash Out!!");
        return;
      }

      const newBalance = balance - cashOutInput;

      // add to transaction history
      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out</h4>
        <p>${cashOutInput} withdraw. New balance ${newBalance}</p>
      `;

      // should be a common function
      document.getElementById("transaction-container").appendChild(div);

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to cash out.");
    }
  });
