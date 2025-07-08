function showDropdowns(unitNumber) {
  document
    .querySelectorAll(".dropdowns")
    .forEach((el) => el.classList.add("hidden"));

  const dropdown = document.getElementById(`dropdowns-${unitNumber}`);
  if (dropdown) {
    dropdown.classList.remove("hidden");
  }

  document
    .querySelectorAll(".unit-1-container, .unit-2-container, .unit-3-container")
    .forEach((container) => {
      container.style.border = "1px solid rgb(202, 197, 198)";
      container.style.backgroundColor = "#fff";
    });

  // Apply green border to the selected container
  const activeContainer = document.querySelector(
    `.unit-${unitNumber}-container`
  );
  if (activeContainer) {
    activeContainer.style.border = "2px solid #ff6b83";
    activeContainer.style.backgroundColor = "#fff9f9";
  }
}

window.onload = function () {
  const checkedRadio = document.querySelector('input[name="unit"]:checked');
  if (checkedRadio) {
    const id = checkedRadio.id;
    const unitNumber = id.replace("unit", ""); // e.g. unit1 -> 1
    showDropdowns(unitNumber);
  }
};
// pink = #ff6b83
// black = #251e1e
// white = #fefbfa
