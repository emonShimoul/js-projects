document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Cash Out Btn clicked");

    const cashOutInput = getInputFieldValueById("input-cash-out-money");

    const pinNumber = getInputFieldValueById("input-cash-out-pin");

    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      const newBalance = balance - cashOutInput;

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to cash out.");
    }
  });
