const seatButton = document.querySelectorAll(".seat-btn");
// console.log(seatButton);

for (let seat of seatButton) {
  seat.addEventListener("click", () => {
    console.log(seat);
    seat.classList.add("btn-selected");
    seat.classList.remove("text-gray-500");
  });
}
