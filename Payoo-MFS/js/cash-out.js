document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Cash Out Btn clicked");

    const cashOutInput = document.getElementById("input-cash-out-money").value;

    const cashOutPinInput = document.getElementById("input-cash-out-pin").value;

    console.log(cashOutInput, cashOutPinInput);

    if (cashOutPinInput === "1234") {
      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);

      const newBalance = parseFloat(balance) - parseFloat(cashOutInput);
      console.log(newBalance);

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to cash out! Please try again.");
    }
  });
