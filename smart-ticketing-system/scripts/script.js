const seatButton = document.querySelectorAll(".seat-btn");
// console.log(seatButton);

for (let seat of seatButton) {
  seat.addEventListener("click", () => {
    console.log(seat);
    seat.classList.toggle("btn-selected");
    // seat.classList.add("cursor-not-allowed");
    // seat.classList.remove("text-gray-500");
    let selectedSeatCounter = document.getElementById("selected-seat-counter");
    let selectedSeatCounterInt = parseInt(selectedSeatCounter.innerText);
    if (seat.classList.contains("btn-selected")) {
      selectedSeatCounterInt += 1;
      selectedSeatCounter.innerText = selectedSeatCounterInt;
    } else {
      selectedSeatCounterInt -= 1;
      selectedSeatCounter.innerText = selectedSeatCounterInt;
    }
  });
}
